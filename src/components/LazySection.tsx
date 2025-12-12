import { ReactNode, memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

const DefaultFallback = memo(() => (
  <div className="min-h-[100px]" aria-hidden="true" />
));

DefaultFallback.displayName = "DefaultFallback";

export const LazySection = memo(({ 
  children, 
  fallback,
  rootMargin = "200px" 
}: LazySectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({ rootMargin });

  return (
    <div ref={ref}>
      {isVisible ? children : (fallback || <DefaultFallback />)}
    </div>
  );
});

LazySection.displayName = "LazySection";