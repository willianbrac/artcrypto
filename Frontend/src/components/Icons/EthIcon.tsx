import { ResponsiveIcon } from 'components';

type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function EthIcon({ width = 9, height = 13, fill = '#000000' }: Props) {
  return (
    <ResponsiveIcon width={width} height={height}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 9 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.49485 9.85538L0.524353 7.68157L4.49242 12.871L8.46494 7.68157L4.49242 9.85538H4.49485ZM4.55386 0.871033L0.584984 6.98222L4.55386 9.15977L8.52435 6.98447L4.55386 0.871033Z"
          fill={fill}
        />
      </svg>
    </ResponsiveIcon>
  );
}
