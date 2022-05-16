import { getScrollWidth } from './getScrollWidth';

export const getLockStyles = ({ disableBodyPadding }: any) => {
  const scrollWidth = disableBodyPadding ? null : getScrollWidth();

  const styles = `body {
        --removed-scroll-width: ${scrollWidth}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${
          scrollWidth
            ? 'padding-right: var(--removed-scroll-width) !important;'
            : ''
        }
        `;

  return styles;
};