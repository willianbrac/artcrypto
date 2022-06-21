import { createContext, useContext, useState } from 'react';
export interface INavMobileContext {
  isVisible: boolean;
  setIsVisible(isVisible: boolean): void;
}
const NavMobileContext = createContext<INavMobileContext>(null!);
type Props = {
  children: React.ReactNode;
};
export function NavMobileProvider({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  return <NavMobileContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavMobileContext.Provider>;
}

export function useNavMobileContext() {
  return useContext(NavMobileContext);
}
