import { useState, useCallback } from 'react';

function useFilterState<T>(filter: any, initialValue: T) {
  // Pass initial state function to useState so logic is only executed once
  const [value, setValue] = useState<T>(initialValue);

  const setFilter = useCallback(
    (next) => filter(next) && setValue(next),
    [filter]
  );
  return [value, setFilter] as const;
}

export default useFilterState;
