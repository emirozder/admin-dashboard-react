import { AlertTriangle, BarChart, BarChart2, CheckCircle, Clock, DollarSign, Eye, Package, Percent, PieChart, Settings, ShieldClose, ShoppingBag, ShoppingCart, TrendingDown, TrendingUp, User2, UserCheck, UserMinus, UserPlus, Users } from "lucide-react";

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

export const USERS_STAT_CARD_ITEMS = [
  {
    title: 'Total Users',
    value: 25000,
    icon: Users,
    color: '#6366F1',
  },
  {
    title: 'Active Users',
    value: 1500,
    icon: UserCheck,
    color: '#2E93A1',
  },
  {
    title: 'Inactive Users',
    value: 500,
    icon: User2,
    color: '#F59E0B',
  },
  {
    title: 'Churn Rate',
    value: '8.1%',
    icon: UserMinus,
    color: '#EF4444',
  },
];

export const USERS_TABLE_DATA = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Inactive" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Customer", status: "Active" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Moderator", status: "Active" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Customer", status: "Inactive" },
  { id: 6, name: "Diana Evans", email: "diana@example.com", role: "Admin", status: "Active" },
];

export const USER_GROWTH_CHART_DATA = [
  {
    name: "Jan",
    users: 1000,
  },
  {
    name: "Feb",
    users: 1800,
  },
  {
    name: "Mar",
    users: 2000,
  },
  {
    name: "Apr",
    users: 2780,
  },
  {
    name: "May",
    users: 3000,
  },
  {
    name: "Jun",
    users: 3780,
  },
];

export const USER_ACTIVITY_CHART_COLORS = ["#6366F1", "#EC4899", "#8B5CA0", "#10B981", "#F59E0B", "#3B82F6"];

export const USER_ACTIVITY_CHART_DATA = [
  { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
  { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
  { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
  { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
  { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
  { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
  { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];

export const USER_DEMOGRAPHICS_CHART_DATA = [
  { period: "18-24", value: 400 },
  { period: "25-34", value: 300 },
  { period: "35-44", value: 200 },
  { period: "45-54", value: 100 },
  { period: "55-64", value: 50 },
  { period: "65+", value: 25 },
];

export const USER_DEMOGRAPHICS_CHART_COLORS = ["#6366F1", "#EC4899", "#8B5CA0", "#10B981", "#F59E0B", "#3B82F6"];

export const SALES_STAT_CARD_ITEMS = [
  {
    title: 'Total Revenue',
    value: '$1,250,000',
    icon: DollarSign,
    color: '#10B981',
  },
  {
    title: 'Total Orders',
    value: 25000,
    icon: ShoppingCart,
    color: '#3E92CC',
  },
  {
    title: 'Average Order Value',
    value: '$100',
    icon: ShoppingBag,
    color: '#6366F1',
  },
  {
    title: 'Conversion Rate',
    value: '3.5%',
    icon: Percent,
    color: '#F2A365',
  },
];

export const SALES_CHART_MONTHLY_SALES_DATA = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 2000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 1890 },
  { month: "Jun", sales: 2390 },
  { month: "Jul", sales: 3490 },
  { month: "Aug", sales: 4000 },
  { month: "Sep", sales: 3000 },
  { month: "Oct", sales: 2000 },
  { month: "Nov", sales: 2780 },
  { month: "Dec", sales: 1890 },
];

export const SALES_CHART_WEEKLY_SALES_DATA = [
  { week: "1", sales: 4000 },
  { week: "2", sales: 3000 },
  { week: "3", sales: 2000 },
  { week: "4", sales: 2780 },
  { week: "5", sales: 1890 },
  { week: "6", sales: 2390 },
];

export const SALES_CHART_QUARTERLY_SALES_DATA = [
  { quarter: "Q1", sales: 4000 },
  { quarter: "Q2", sales: 3000 },
  { quarter: "Q3", sales: 2000 },
  { quarter: "Q4", sales: 2780 },
];

export const SALES_CHART_YEARLY_SALES_DATA = [
  { year: "2020", sales: 4000 },
  { year: "2021", sales: 7000 },
  { year: "2023", sales: 12000 },
  { year: "2024", sales: 15780 },
];

export const SALES_BY_CATEGORY_CHART_COLORS = [
  "#6366F1",
  "#F43F5E",
  "#F2A365",
  "#9CA3AF",
  "#EC4899",
  "#4ADE80",
];

export const SALES_BY_CATEGORY_CHART_DATA = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3500 },
  { name: "Furniture", value: 3000 },
  { name: "Stationery", value: 2500 },
  { name: "Groceries", value: 2000 },
  { name: "Others", value: 1000 },
];

export const DAILY_SALES_CHART_DATA = [
  { name: "Mon", sales: 2800 },
  { name: "Tue", sales: 3000 },
  { name: "Wed", sales: 2000 },
  { name: "Thu", sales: 2780 },
  { name: "Fri", sales: 1890 },
  { name: "Sat", sales: 4000 },
  { name: "Sun", sales: 3490 },
];

export const ORDERS_STAT_CARD_ITEMS = [
  {
    title: 'Total Orders',
    value: 2500,
    icon: ShoppingCart,
    color: '#3E92CC',
  },
  {
    title: 'Pending Orders',
    value: 500,
    icon: Clock,
    color: '#F59E0B',
  },
  {
    title: 'Completed Orders',
    value: 2000,
    icon: CheckCircle,
    color: '#10B981',
  },
  {
    title: 'Cancelled Orders',
    value: 100,
    icon: ShieldClose,
    color: '#EF4444',
  },
];

export const DAILY_ORDERS_CHART_DATA = [
  { name: "Mon", orders: 280 },
  { name: "Tue", orders: 300 },
  { name: "Wed", orders: 200 },
  { name: "Thu", orders: 278 },
  { name: "Fri", orders: 189 },
  { name: "Sat", orders: 400 },
  { name: "Sun", orders: 349 },
];

export const ORDER_STATUS_DISTRIBUTION_CHART_COLORS = ["#9CA3AF", "#6366F1", "#F2A365", "#4ADE80"];

export const ORDER_STATUS_DISTRIBUTION_CHART_DATA = [
  { name: "Pending", value: 500 },
  { name: "Processing", value: 1000 },
  { name: "Shipped", value: 800 },
  { name: "Delivered", value: 200 },
];

export const ORDERS_TABLE_DATA = [
  { id: "ORD001", customer: "John Doe", total: 346.8, status: "Delivered", date: "2024-09-17" },
  { id: "ORD002", customer: "Jane Smith", total: 124.5, status: "Shipped", date: "2024-09-16" },
  { id: "ORD003", customer: "Alice Johnson", total: 89.9, status: "Processing", date: "2024-09-15" },
  { id: "ORD004", customer: "Bob Brown", total: 45.0, status: "Pending", date: "2024-09-14" },
  { id: "ORD005", customer: "Charlie Davis", total: 67.8, status: "Delivered", date: "2024-09-13" },
  { id: "ORD006", customer: "Diana Evans", total: 120.0, status: "Shipped", date: "2024-09-12" },
];

export const ANALYTICS_STAT_CARD_ITEMS = [
  { title: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
  { title: "Users", value: "45,678", change: 8.3, icon: Users },
  { title: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
  { title: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

export const REVENUE_TARGET_CHART_MONTHLY_DATA = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4500 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 5500, target: 5800 },
  { month: "Jul", revenue: 7000, target: 6500 },
  { month: "Aug", revenue: 8000, target: 7500 },
  { month: "Sep", revenue: 7500, target: 7800 },
  { month: "Oct", revenue: 9000, target: 8500 },
  { month: "Nov", revenue: 8500, target: 8800 },
  { month: "Dec", revenue: 10000, target: 9500 },
];

export const REVENUE_TARGET_CHART_WEEKLY_DATA = [
  { week: "1", revenue: 4000, target: 3800 },
  { week: "2", revenue: 3000, target: 3200 },
  { week: "3", revenue: 5000, target: 4500 },
  { week: "4", revenue: 4500, target: 4200 },
  { week: "5", revenue: 6000, target: 5500 },
  { week: "6", revenue: 5500, target: 5800 },
];

export const REVENUE_TARGET_CHART_QUARTERLY_DATA = [
  { quarter: "Q1", revenue: 12000, target: 11000 },
  { quarter: "Q2", revenue: 14000, target: 13000 },
  { quarter: "Q3", revenue: 16000, target: 15000 },
  { quarter: "Q4", revenue: 18000, target: 17000 },
];

export const REVENUE_TARGET_CHART_YEARLY_DATA = [
  { year: "2020", revenue: 40000, target: 38000 },
  { year: "2021", revenue: 50000, target: 48000 },
  { year: "2022", revenue: 60000, target: 58000 },
  { year: "2023", revenue: 70000, target: 68000 },
  { year: "2024", revenue: 80000, target: 78000 },
];

export const CHANNEL_PERFORMANCE_CHART_COLORS = [
  "#6366F1",
  "#F43F5E",
  "#F2A365",
  "#EC4899",
  "#4ADE80",
  "#9CA3AF",
];

export const CHANNEL_PERFORMANCE_CHART_DATA = [
  { name: "Organic Search", value: 4000 },
  { name: "Social Media", value: 4500 },
  { name: "In-Store", value: 3500 },
  { name: "Referral", value: 1890 },
  { name: "Mail Order", value: 3000 },
  { name: "Others", value: 2500 },
];

export const PRODUCT_PERFORMANCE_CHART_DATA = [
  { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
  { name: "Product C", sales: 2000, revenue: 5400, profit: 2290 },
  { name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
  { name: "Product E", sales: 1890, revenue: 4800, profit: 2180 },
];

export const PRODUCT_PERFORMANCE_CHART_COLORS = ["#8B5CF6", "#10B981", "#F59E0B"];

export const USER_RETENTION_CHART_DATA = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 75 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 50 },
  { name: "Week 5", retention: 45 },
  { name: "Week 6", retention: 40 },
];

export const CUSTOMER_SEGMENTATION_CHART_DATA = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

export const AI_POWERED_INSIGHTS = [
  {
    icon: TrendingDown,
    color: "text-red-500",
    insight:
      "Revenue is down 10% compared to last month, due to decreased customer engagement.",
  },
  {
    icon: UserPlus,
    color: "text-green-500",
    insight:
      "New customer acquisition has increased by 12% after the recent marketing campaign.",
  },
  {
    icon: BarChart,
    color: "text-orange-500",
    insight:
      "Sales in the 'Home Appliances' category have surged by 20% this quarter.",
  },
  {
    icon: PieChart,
    color: "text-blue-500",
    insight:
      "Market share has grown by 3% in the last month, indicating a strong competitive position.",
  },
];