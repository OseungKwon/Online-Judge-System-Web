import { useCallback, useEffect, useRef } from 'react';

interface useInfiniteScrollProps {
  targetElement: HTMLDivElement | null;
  isDataLoading?: boolean;
  dataFetch?: () => void;
  option?: IntersectionObserverInit;
}

function useInfiniteScroll({ targetElement, option, isDataLoading, dataFetch }: useInfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries[0].isIntersecting && dataFetch) {
        observer.unobserve(entries[0].target);
        dataFetch();
        observer.observe(entries[0].target);
      }
    },
    [dataFetch],
  );

  useEffect(() => {
    if (targetElement) {
      if (isDataLoading) {
        observerRef?.current?.unobserve(targetElement);
      } else {
        observerRef.current = new IntersectionObserver(onIntersect, {
          threshold: 0.4,
          ...option,
        });

        observerRef?.current?.observe(targetElement);
      }
    } else {
      observerRef?.current?.disconnect();
    }
  }, [isDataLoading, onIntersect, targetElement, option]);

  useEffect(() => {
    return () => {
      observerRef?.current?.disconnect();
    };
  }, []);
}

export default useInfiniteScroll;
