import { useEffect } from 'react';

function useWindowEvent<K extends string>(
  type: K,
  listener: any,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, []);
}
export default useWindowEvent;
