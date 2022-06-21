import { ResponsiveIcon } from 'components';

type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function LogoutIcon({ width = 28, height = 22, fill = '#000000' }: Props) {
  return (
    <ResponsiveIcon width={width} height={height}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 28 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.9375 11H27M18 6V3.5C18 2.83696 17.7366 2.20107 17.2678 1.73223C16.7989 1.26339 16.163 1 15.5 1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H15.5C16.163 21 16.7989 20.7366 17.2678 20.2678C17.7366 19.7989 18 19.163 18 18.5V16V6ZM22 6L27 11L22 16V6Z"
          stroke={fill}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ResponsiveIcon>
  );
}
