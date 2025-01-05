import { BarChart2, DollarSign, Percent, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";

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

export const OVERVIEW_STAT_CARD_ITEMS = [
  {
    title: 'New Users',
    value: 1500,
    icon: Users,
    color: '#F76C6C',
  },
  {
    title: 'Total Orders',
    value: 2500,
    icon: ShoppingCart,
    color: '#3E92CC',
  },
  {
    title: 'Total Sales',
    value: '$150,000',
    icon: DollarSign,
    color: '#6D214F',
  },
  {
    title: 'Contribution Rate',
    value: '40%',
    icon: Percent,
    color: '#F2A365',
  },
];

export const SALES_OVERVIEW_CHART_DATA = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 2000,
  },
  {
    name: "Apr",
    sales: 2780,
  },
  {
    name: "May",
    sales: 1890,
  },
  {
    name: "Jun",
    sales: 2390,
  },
  {
    name: "Jul",
    sales: 3490,
  },
  {
    name: "Aug",
    sales: 4000,
  },
  {
    name: "Sep",
    sales: 3000,
  },
  {
    name: "Oct",
    sales: 2000,
  },
  {
    name: "Nov",
    sales: 2780,
  },
  {
    name: "Dec",
    sales: 1890,
  },
];

export const CATEGORY_DISTRIBUTION_CHART_COLORS = [
  "#6366F1",
  "#F43F5E",
  "#F2A365",
  "#9CA3AF",
  "#EC4899",
  "#4ADE80",
];

export const CATEGORY_DISTRIBUTION_CHART_DATA = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3500 },
  { name: "Furniture", value: 3000 },
  { name: "Stationery", value: 2500 },
  { name: "Groceries", value: 2000 },
  { name: "Others", value: 1000 },
];

export const SALES_CHANNEL_CHART_COLORS = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

export const SALES_CHANNEL_CHART_DATA = [
  { name: "Social Media", value: 45800 },
  { name: "In-Store", value: 31400 },
  { name: "Mail Order", value: 24900 },
  { name: "Others", value: 18800 },
];