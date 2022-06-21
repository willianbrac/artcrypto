import { ResponsiveIcon } from 'components';

type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function TrashIcon({ width = 24, height = 24, fill = '#666666' }: Props) {
  return (
    <ResponsiveIcon width={width} height={height}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7L8.25 27C8.30937 28.1556 9.15 29 10.25 29H21.75C22.8544 29 23.6794 28.1556 23.75 27L25 7"
          stroke={fill}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M5 7H27H5Z" fill={fill} />
        <path d="M5 7H27" stroke={fill} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M20.5 11L20 25M12 7.00001V4.50001C11.9994 4.30286 12.0378 4.10755 12.113 3.9253C12.1882 3.74305 12.2986 3.57746 12.4381 3.43806C12.5775 3.29866 12.743 3.18819 12.9253 3.11301C13.1075 3.03783 13.3029 2.99943 13.5 3.00001H18.5C18.6971 2.99943 18.8925 3.03783 19.0747 3.11301C19.257 3.18819 19.4225 3.29866 19.5619 3.43806C19.7014 3.57746 19.8118 3.74305 19.887 3.9253C19.9622 4.10755 20.0006 4.30286 20 4.50001V7.00001H12ZM16 11V25V11ZM11.5 11L12 25L11.5 11Z"
          stroke={fill}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ResponsiveIcon>
  );
}
