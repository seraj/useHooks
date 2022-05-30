function useFavicon(defaultHref: string) {
  const set = (hrefToSet: string) => {
    const link: any =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = hrefToSet;
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  const setFavicon = (href: string) =>
    defaultHref && !href ? set(defaultHref) : set(href);
  return { setFavicon };
}

export default useFavicon;
