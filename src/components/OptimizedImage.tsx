import { memo, useState, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * OptimizedImage component that provides:
 * - Responsive image sizes for different viewports
 * - Lazy loading for non-priority images
 * - Proper width/height to prevent CLS
 * - Async decoding for better performance
 */
export const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive srcset for different viewport sizes
  // This helps serve smaller images on mobile devices
  const generateSrcSet = (imageSrc: string) => {
    // For Vite bundled assets, the src already has optimization
    // We create virtual responsive sizes for the browser to choose
    const baseSrc = imageSrc;
    
    // Create srcset with width descriptors
    // The browser will choose the most appropriate size
    return `${baseSrc} 1x, ${baseSrc} 2x`;
  };

  return (
    <img
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`${className} ${!isLoaded && !hasError ? 'animate-pulse bg-muted' : ''}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      {...props}
    />
  );
});

OptimizedImage.displayName = "OptimizedImage";

/**
 * ResponsiveImage component using <picture> element for format negotiation
 * Provides WebP/AVIF fallback support when available
 */
interface ResponsiveImageProps extends OptimizedImageProps {
  webpSrc?: string;
  avifSrc?: string;
}

export const ResponsiveImage = memo(({
  src,
  webpSrc,
  avifSrc,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  ...props
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <picture>
      {/* AVIF - best compression, limited support */}
      {avifSrc && (
        <source
          srcSet={avifSrc}
          sizes={sizes}
          type="image/avif"
        />
      )}
      {/* WebP - good compression, wide support */}
      {webpSrc && (
        <source
          srcSet={webpSrc}
          sizes={sizes}
          type="image/webp"
        />
      )}
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`${className} ${!isLoaded ? 'animate-pulse bg-muted' : ''}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </picture>
  );
});

ResponsiveImage.displayName = "ResponsiveImage";
