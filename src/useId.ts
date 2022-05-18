import { useRef } from 'react';
import randomId from './randomId';

function useId(id?: string, generateId: () => string = randomId) {
  const generatedId = useRef(generateId());
  return id || generatedId.current;
}

export default useId;
