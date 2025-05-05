import { PhysicsBall } from '@/components/physics/PhysicsBall';
import { TwitterCircle } from '@/components/circles/TwitterCircle';
import { GithubCircle } from '@/components/circles/GithubCircle';
import { LinkedInCircle } from '@/components/circles/LinkedInCircle';
import { MyStoryCircle } from '@/components/circles/MyStoryCircle';
import { WorkExperienceCircle } from '@/components/circles/WorkExperienceCircle';
import { EducationCircle } from '@/components/circles/EducationCircle';
import { SkillsCircle } from '@/components/circles/SkillsCircle';
import { Leaf, FileText, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

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
    color: '#1DA1F2',
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
    color: '#333333',
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
    color: '#0077B5',
    component: LinkedInCircle,
    props: {
      href: 'https://linkedin.com/in/reidrelatores',
    },
  },

  // Project Circles (Generic)
  {
    id: 'leadblooms',
    label: 'Leadblooms',
    dock: 'projects',
    size: 100,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'Leadblooms',
      icon: Leaf,
    },
  },
  {
    id: 'screenresumes',
    label: 'ScreenResumes',
    dock: 'projects',
    size: 120,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'ScreenResumes',
      icon: FileText,
    },
  },
  {
    id: 'sociallistening',
    label: 'Social Listening Tool',
    dock: 'projects',
    size: 210,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'Social Listening',
      icon: GraduationCap,
    },
  },

  // About Circles (Custom Components)
  {
    id: 'my_story',
    label: 'My Story',
    dock: 'about',
    size: 150,
    color: '#ededed',
    component: MyStoryCircle,
    props: {},
  },
  {
    id: 'skills',
    label: 'Skills',
    dock: 'about',
    size: 140,
    color: '#ededed',
    component: SkillsCircle,
    props: {},
  },
  {
    id: 'experience',
    label: 'Experience',
    dock: 'about',
    size: 165,
    color: '#ededed',
    component: WorkExperienceCircle,
    props: {},
  },
  {
    id: 'education',
    label: 'Education',
    dock: 'about',
    size: 110,
    color: '#ededed',
    component: EducationCircle,
    props: {},
  },

  // Contact Circles (Generic)
  {
    id: 'email',
    label: 'Email',
    dock: 'contact',
    size: 155,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'Email',
      icon: Mail,
    },
  },
  {
    id: 'phone',
    label: 'Phone',
    dock: 'contact',
    size: 130,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'Phone',
      icon: Phone,
    },
  },
  {
    id: 'location',
    label: 'Location',
    dock: 'contact',
    size: 150,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'Location',
      icon: MapPin,
    },
  },
  {
    id: 'blank_1',
    label: '',
    dock: 'home',
    size: 40,
    color: '#ededed',
    component: PhysicsBall,
    props: {
      content: 'Location',
      icon: MapPin,
    },
  },
  ...smallCircles,
]); 