export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/',
    title: 'Dashboard',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
];

export default navItems;
