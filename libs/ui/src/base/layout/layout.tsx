import { FC } from 'react';

const base = 'flex';

const buildCss = (css?: string | string[], _css?: string) => {
  if (!css) return;
  if (Array.isArray(css))
    return !_css
      ? css.join(' ')
      : css.join(' ') + ' ' + _css;

  return !_css
    ? css
    : css + ' ' + _css;
}

export const Box: FC<{_css?: string}> =
  ({children, _css}) =>
    <div className={buildCss(_css)}>{children}</div>

export const Flex: FC<{_css?: string; onpress: () => void}> =
  ({children, _css, onpress}) => {
    return (
      <div className={buildCss(base, _css)} onClick={onpress}>
        {children}
      </div>
    )
}
