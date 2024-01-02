import React, { useRef } from 'react';

import { useInfiniteScroll } from '@/hooks';

interface ObserverTargetProps {
  rootElement?: HTMLDivElement | null;
  children?: React.ReactNode;
  actionOnIntersection?: () => void;
  isLoading?: boolean;
}

function ObserverTarget({ children, rootElement, actionOnIntersection, isLoading }: ObserverTargetProps) {
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll({
    targetElement: observerTargetRef?.current,
    isDataLoading: isLoading,
    option: { root: rootElement },
    dataFetch: actionOnIntersection,
  });

  return <div ref={observerTargetRef}>{children}</div>;
}

export default React.memo(ObserverTarget);
