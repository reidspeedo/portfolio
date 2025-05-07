import { PhysicsBall } from '@/components/physics/PhysicsBall';
import { TwitterCircle } from '@/components/circles/TwitterCircle';
import { GithubCircle } from '@/components/circles/GithubCircle';
import { LinkedInCircle } from '@/components/circles/LinkedInCircle';
import { MyStoryCircle } from '@/components/circles/MyStoryCircle';
import { WorkExperienceCircle } from '@/components/circles/WorkExperienceCircle';
import { EducationCircle } from '@/components/circles/EducationCircle';
import { SkillsCircle } from '@/components/circles/SkillsCircle';
import { SunCircle } from '@/components/circles/SunCircle';
import { MoonCircle } from '@/components/circles/MoonCircle';
import { GlobeCircle } from '@/components/circles/GlobeCircle';
import { EmailCircle } from '@/components/circles/EmailCircle';
import { PhoneCircle } from '@/components/circles/PhoneCircle';
import { Leaf, FileText, Mail, Phone, MapPin, GraduationCap, Sun, Moon } from 'lucide-react';

export type CircleConfig = {
  id: string;
  label: string;
  dock: string;
  size: number;
  color: string;
  component?: React.ComponentType<any>;
  props?: Record<string, any>;
};

// Generate 10 small circles with random sizes between 20 and 50
const smallCircles: CircleConfig[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `small_${i + 1}`,
  label: '',
  dock: 'all',
  size: Math.floor(Math.random() * 31) + 20,
  color: '#ededed',
  component: PhysicsBall,
  props: {},
}));

// Shuffle function (Fisher-Yates)
function shuffle<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const allCircles: CircleConfig[] = shuffle([
  // Social Media Circles (Custom Components)
  {
    id: 'twitter',
    label: 'Twitter',
    dock: 'lets-hang',
    size: 175,
    color: '#1Da1f2',
    component: TwitterCircle,
    props: {
      href: 'https://twitter.com/reidrelatores',
    },
  },
  {
    id: 'github',
    label: 'GitHub',
    dock: 'lets-hang',
    size: 150,
    color: '#2b3137',
    component: GithubCircle,
    props: {
      href: 'https://github.com/reidrelatores',
    },
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    dock: 'lets-hang',
    size: 120,
    color: '#5dd9c1',
    component: LinkedInCircle,
    props: {
      href: 'https://linkedin.com/in/reidrelatores',
    },
  },


  // About Circles (Custom Components)
  {
    id: 'my_story',
    label: 'My Story',
    dock: 'about',
    size: 150,
    color: '#b084cc',
    component: MyStoryCircle,
    props: {},
  },
  {
    id: 'skills',
    label: 'Skills',
    dock: 'about',
    size: 140,
    color: '#190933',
    component: SkillsCircle,
    props: {},
  },
  {
    id: 'experience',
    label: 'Experience',
    dock: 'about',
    size: 165,
    color: '#665687',
    component: WorkExperienceCircle,
    props: {},
  },
  {
    id: 'education',
    label: 'Education',
    dock: 'about',
    size: 110,
    color: '#b084cc',
    component: EducationCircle,
    props: {},
  },

  // Contact Circles (Custom Components)
  {
    id: 'email',
    label: 'Email',
    dock: 'contact',
    size: 155,
    color: '#b084cc',
    component: EmailCircle,
    props: {},
  },
  {
    id: 'phone',
    label: 'Phone',
    dock: 'contact',
    size: 130,
    color: '#acfcd9',
    component: PhoneCircle,
    props: {},
  },
  {
    id: 'globe',
    label: 'Location',
    dock: 'contact',
    size: 85,
    color: '#665687',
    component: GlobeCircle,
    props: {},
  },
  ...smallCircles,

  // Theme Circles
  {
    id: 'sun',
    label: 'Light Mode',
    dock: 'themes',
    size: 100,
    color: '#acfcd9',
    component: SunCircle,
    props: {},
  },
  {
    id: 'moon',
    label: 'Dark Mode',
    dock: 'themes',
    size: 50,
    color: '#190933',
    component: MoonCircle,
    props: {},
  },
]); 