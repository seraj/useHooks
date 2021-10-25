import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

const storageName = 'dark-mode';

function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    storageName,
    false
  );
  const storageStored = window.localStorage.getItem(storageName);
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = storageStored ? enabledState : prefersDarkMode;

  useEffect(() => {
    const className = 'dark';
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState] as const;
}

function usePrefersDarkMode() {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false);
}

export default useDarkMode;
