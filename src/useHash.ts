import { useState } from 'react';
import useWindowEvent from './useWindowEvent';

function useHash() {
  const [hash, setHashValue] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  const setHash = (value: string) => {
    window.location.hash = value;
    setHashValue(value);
  };

  useWindowEvent('hashchange', () => {
    setHashValue(window.location.hash);
  });

  return [hash, setHash] as const;
}
export default useHash;
