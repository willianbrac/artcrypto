import { ResponsiveIcon } from 'components';

type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function HamburgerIcon({ width = 24, height = 16, fill = '#000000' }: Props) {
  return (
    <ResponsiveIcon width={width} height={height}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41302 14.5H22.413M1.41302 8H22.413M1.41302 1.5H22.413"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ResponsiveIcon>
  );
}
