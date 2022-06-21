import { Link } from 'react-router-dom';

type Props = {
  href: string;
  label: string;
};
export function NavLink({ href, label }: Props) {
  return (
    <Link to={href} className="nav-link">
      {label}
    </Link>
  );
}
