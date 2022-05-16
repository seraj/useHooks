export function injectStyles(tag: any, css: any): void {
  if (tag.styleSheet) {
    // eslint-disable-next-line no-param-reassign
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
