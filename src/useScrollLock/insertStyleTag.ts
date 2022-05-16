export function insertStyleTag(tag: any) {
  const head = document.head || document.getElementsByTagName('head')[0];

  head.appendChild(tag);
}
