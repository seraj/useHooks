import { useEffect, useRef } from 'react';

function useDidUpdate(fn: () => void, dependencies?: any[]) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  }, dependencies);
}
export default useDidUpdate;
