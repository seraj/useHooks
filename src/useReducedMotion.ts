import useMediaQuery from './useMediaQuery';

function useReducedMotion(initialValue?: boolean) {
  return useMediaQuery('(prefers-reduced-motion: reduce)', initialValue);
}

export default useReducedMotion;
