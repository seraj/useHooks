import { useRef, useEffect } from 'react';

function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = any
>(
  type: K,
  listener: (this: any, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) {
  const ref = useRef<T>();

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      return () => ref.current?.removeEventListener(type, listener, options);
    }
    return undefined;
  }, [listener, options]);

  return ref;
}

export default useEventListener;
