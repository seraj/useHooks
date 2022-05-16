import useMediaQuery from './useMediaQuery';

function useColorScheme(initialValue?: 'dark' | 'light') {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark')
    ? 'dark'
    : 'light';
}

export default useColorScheme;
