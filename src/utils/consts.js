import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    icon: BarChart2,
    color: '#2E93A1',
    link: '/',
  },
  {
    name: 'Products',
    icon: ShoppingBag,
    color: '#F2A365',
    link: '/products',
  },
  {
    name: 'Users',
    icon: Users,
    color: '#F76C6C',
    link: '/users',
  },
  {
    name: 'Sales',
    icon: DollarSign,
    color: '#6D214F',
    link: '/sales',
  },
  {
    name: 'Orders',
    icon: ShoppingCart,
    color: '#3E92CC',
    link: '/orders',
  },
  {
    name: 'Analytics',
    icon: TrendingUp,
    color: '#F9C22E',
    link: '/analytics',
  },
  {
    name: 'Settings',
    icon: Settings,
    color: '#4B7DFE',
    link: '/settings',
  },
];