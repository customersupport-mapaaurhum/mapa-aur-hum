import { ReactNode, memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

const DefaultFallback = memo(() => (
  <div className="py-8 flex items-center justify-center" aria-hidden="true">
    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
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