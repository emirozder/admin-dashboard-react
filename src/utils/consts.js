import { AlertTriangle, BarChart2, DollarSign, Package, Percent, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";

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
    color: '#10B981',
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

export const PRODUCTS_STAT_CARD_ITEMS = [
  {
    title: 'Total Products',
    value: 12500,
    icon: Package,
    color: '#6366F1',
  },
  {
    title: 'Top Selling',
    value: 2500,
    icon: TrendingUp,
    color: '#2E93A1',
  },
  {
    title: 'Low Stock',
    value: 1500,
    icon: AlertTriangle,
    color: '#F59E0B',
  },
  {
    title: 'Total Revenue',
    value: '$250,000',
    icon: DollarSign,
    color: '#10B981',
  },
];

export const SALES_TREND_CHART_DATA = [
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

export const SALES_PRODUCTS_DISTRIBUTION_CHART_COLORS = [
  "#6366F1",
  "#F43F5E",
  "#F2A365",
  "#9CA3AF",
  "#EC4899",
  "#4ADE80",
  "#F59E0B",
];

export const SALES_PRODUCTS_DISTRIBUTION_CHART_DATA = [
  { name: 'Steel Watch', value: 3490 },
  { name: 'Leather Bag', value: 4000 },
  { name: 'Cofee Machine', value: 3000 },
  { name: 'Soft Pillow', value: 2000 },
  { name: 'Wood Chair', value: 2780 },
  { name: 'Cotton T-Shirt', value: 1890 },
  { name: 'Glass Table', value: 2390 },
];

export const PRODUCTS_TABLE_DATA = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1451290173668-9a14beaf714c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlZWwlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Steel Watch",
    category: "Fashion",
    price: 99.99,
    stock: 340,
    sales: 3490
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBiYWd8ZW58MHx8MHx8fDA%3D",
    name: "Leather Bag",
    category: "Fashion",
    price: 99.99,
    stock: 430,
    sales: 4000
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1664189122777-01ad20e7fb9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Cofee Machine",
    category: "Home & Kitchen",
    price: 149.99,
    stock: 560,
    sales: 3000
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1730580015629-d07e58d81c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdCUyMHBpbGxvd3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Soft Pillow",
    category: "Home & Kitchen",
    price: 19.99,
    stock: 890,
    sales: 2000
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1699588772787-1eed3b726e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvb2QlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Wood Chair",
    category: "Furniture",
    price: 199.99,
    stock: 120,
    sales: 2780
  },
  {
    id: 6,
    img: "https://plus.unsplash.com/premium_photo-1673125287363-b4e837f1215f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y290dG9uJTIwdHNoaXJ0fGVufDB8fDB8fHww",
    name: "Cotton T-Shirt",
    category: "Fashion",
    price: 29.99,
    stock: 2000,
    sales: 1890
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1563146413-d915a569d6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xhc3MlMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Glass Table",
    category: "Furniture",
    price: 299.99,
    stock: 50,
    sales: 2390
  },
];