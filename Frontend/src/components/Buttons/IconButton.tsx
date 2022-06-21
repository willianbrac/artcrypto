import classNames from 'classnames';

type Props = {
  href?: string;
  onClick?: VoidFunction;
  Icon?: React.ReactNode;
  opacityEnabled?: boolean;
  label?: string;
};
export function IconButton({
  href,
  onClick,
  Icon,
  opacityEnabled = true,
  label 
}: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={classNames('icon-button', {
        'opacity-60 hover:opacity-100': opacityEnabled 
      })}
    >
      {Icon}
      {label && <span className="font-display text-xl font-bold">{label}</span>}
    </a>
  );
}
