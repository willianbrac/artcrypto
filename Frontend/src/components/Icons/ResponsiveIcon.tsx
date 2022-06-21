type Props = {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
};

export function ResponsiveIcon({ width, height, children }: Props) {
  return <div style={{ width, height }}>{children}</div>;
}
