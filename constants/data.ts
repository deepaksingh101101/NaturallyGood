import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; 
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; 
  latitude?: number; 
  job: string;
  profile_picture?: string | null; 
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/user',
    icon: 'user',
    label: 'User'
  },
  {
    title: 'User Management',
    href: '/user-management',
    icon: 'management',
    label: 'User Management'
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: 'profile',
    label: 'Profile'
  },
  {
    title: 'Subscription Management',
    href: '/subscription-management',
    icon: 'createSubscription',
    label: 'create-subscription'
  },
  {
    title: 'Order Management',
    href: '/order-management',
    icon: 'order',
    label: 'create-order'
  },
  {
    title: 'Product Management',
    href: '/product-management',
    icon: 'product',
    label: 'create-product'
  },
  {
    title: 'Complaint Management',
    href: '/complaint-management',
    icon: 'complaint',
    label: 'create-complaint'
  },
  {
    title: 'Employee Management',
    href: '/employee-management',
    icon: 'user',
    label: 'create-employee'
  },
  {
    title: 'Report And Analytics',
    href: '/report-management',
    icon: 'report',
    label: 'create-report'
  },
  {
    title: 'Settings',
    href: '/settings-management',
    icon: 'settings',
    label: 'settings',
    subItems: [
      {
        title: 'General Settings',
        href: '/settings-management/general',
        icon: 'general',
        label: 'general-settings'
      },
      {
        title: 'Payment Settings',
        href: '/settings-management/payment',
        icon: 'paymentSetting',
        label: 'payment-settings'
      },
      {
        title: 'Notification Settings',
        href: '/settings-management/notifications',
        icon: 'notificationSetting',
        label: 'notification-settings'
      },
      {
        title: 'API Settings',
        href: '/settings-management/API',
        icon: 'api',
        label: 'api-settings'
      }
    ]
  },
 
];
