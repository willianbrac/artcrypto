import { ResponsiveIcon } from 'components';

type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function CloseIcon({ width = 16, height = 16, fill = '#000000' }: Props) {
  return (
    <ResponsiveIcon width={width} height={height}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 15L1 1M15 1L1 15" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </ResponsiveIcon>
  );
}
