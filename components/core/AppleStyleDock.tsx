'use client';

import {
  User,
  Package,
  MessageSquare,
  Mail,
  SunMoon,
  Home,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/core/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'home',
  },
  {
    title: 'About',
    icon: (
      <User className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'about',
  },
  {
    title: 'Projects',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'projects',
  },
  {
    title: "Social",
    icon: (
      <MessageSquare className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'lets-hang',
  },
  {
    title: 'Contact',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'contact',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: 'themes',
  },
];

export function AppleStyleDock({ onIconClick }: { onIconClick: (id: string) => void }) {
  return (
    <div className='relative'>
      <Dock 
        className='items-end pb-3'
        magnification={100}
        distance={100}
        panelHeight={70}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
      >
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            onClick={() => onIconClick(item.href)}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
} 