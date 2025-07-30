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
import { LeadBloomsCircle } from '@/components/circles/LeadBloomsCircle';
import { RankMyCandidatesCircle } from '@/components/circles/RankMyCandidatesCircle';
import { SocialListeningCircle } from '@/components/circles/SocialListeningCircle';
import { OtherProjectsCircle } from '@/components/circles/OtherProjectsCircle';

export type CircleConfig = {
  id: string;
  label: string;
  dock: string;
  size: number;
  color: string;
  component?: React.ComponentType<any>;
  props?: Record<string, any>;
};

type ColorScheme = {
  name: string;
  colors: {
    social: {
      twitter: string;
      github: string;
      linkedin: string;
    };
    about: {
      myStory: string;
      skills: string;
      experience: string;
      education: string;
    };
    contact: {
      email: string;
      phone: string;
      globe: string;
    };
    themes: {
      sun: string;
      moon: string;
    };
    smallCircles: string;
    projects: {
      leadblooms: string;
      rankmycandidates: string;
      sociallistening: string;
      otherprojects: string;
    };
  };
};

const colorSchemes: ColorScheme[] = [
  {
    name: 'Modern Monochrome',
    colors: {
      social: {
        twitter: '#2563eb',
        github: '#18181b',
        linkedin: '#0ea5e9',
      },
      about: {
        myStory: '#6366f1',
        skills: '#4f46e5',
        experience: '#4338ca',
        education: '#3730a3',
      },
      contact: {
        email: '#0f766e',
        phone: '#14b8a6',
        globe: '#2dd4bf',
      },
      themes: {
        sun: '#fbbf24',
        moon: '#1e293b',
      },
      smallCircles: '#e2e8f0',
      projects: {
        leadblooms: '#4f46e5',
        rankmycandidates: '#7c3aed',
        sociallistening: '#7c3aed',
        otherprojects: '#7c3aed',
      },
    },
  },
  {
    name: 'Warm Earth',
    colors: {
      social: {
        twitter: '#dc2626',
        github: '#1f2937',
        linkedin: '#059669',
      },
      about: {
        myStory: '#b45309',
        skills: '#92400e',
        experience: '#78350f',
        education: '#451a03',
      },
      contact: {
        email: '#166534',
        phone: '#15803d',
        globe: '#16a34a',
      },
      themes: {
        sun: '#f59e0b',
        moon: '#1e293b',
      },
      smallCircles: '#f3f4f6',
      projects: {
        leadblooms: '#b45309',
        rankmycandidates: '#92400e',
        sociallistening: '#92400e',
        otherprojects: '#92400e',
      },
    },
  },
  {
    name: 'Ocean Theme',
    colors: {
      social: {
        twitter: '#0284c7',
        github: '#0f172a',
        linkedin: '#0369a1',
      },
      about: {
        myStory: '#0c4a6e',
        skills: '#075985',
        experience: '#0369a1',
        education: '#0284c7',
      },
      contact: {
        email: '#164e63',
        phone: '#155e75',
        globe: '#0e7490',
      },
      themes: {
        sun: '#fbbf24',
        moon: '#1e293b',
      },
      smallCircles: '#f1f5f9',
      projects: {
        leadblooms: '#0c4a6e',
        rankmycandidates: '#075985',
        sociallistening: '#075985',
        otherprojects: '#075985',
      },
    },
  },
  {
    name: 'Vibrant Gradient',
    colors: {
      social: {
        twitter: '#7c3aed',
        github: '#1e293b',
        linkedin: '#8b5cf6',
      },
      about: {
        myStory: '#c026d3',
        skills: '#a21caf',
        experience: '#86198f',
        education: '#701a75',
      },
      contact: {
        email: '#db2777',
        phone: '#be185d',
        globe: '#9d174d',
      },
      themes: {
        sun: '#fbbf24',
        moon: '#1e293b',
      },
      smallCircles: '#f3f4f6',
      projects: {
        leadblooms: '#c026d3',
        rankmycandidates: '#a21caf',
        sociallistening: '#a21caf',
        otherprojects: '#a21caf',
      },
    },
  },
  {
    name: 'Minimalist Monochrome',
    colors: {
      social: {
        twitter: '#1a1a1a',
        github: '#262626',
        linkedin: '#333333',
      },
      about: {
        myStory: '#404040',
        skills: '#4d4d4d',
        experience: '#595959',
        education: '#666666',
      },
      contact: {
        email: '#737373',
        phone: '#808080',
        globe: '#8c8c8c',
      },
      themes: {
        sun: '#f5f5f5',
        moon: '#1a1a1a',
      },
      smallCircles: '#e5e5e5',
      projects: {
        leadblooms: '#404040',
        rankmycandidates: '#4d4d4d',
        sociallistening: '#4d4d4d',
        otherprojects: '#4d4d4d',
      },
    },
  },
  {
    name: 'Neutral Accents',
    colors: {
      social: {
        twitter: '#2c2c2c',
        github: '#1a1a1a',
        linkedin: '#404040',
      },
      about: {
        myStory: '#525252',
        skills: '#404040',
        experience: '#2c2c2c',
        education: '#1a1a1a',
      },
      contact: {
        email: '#666666',
        phone: '#525252',
        globe: '#404040',
      },
      themes: {
        sun: '#fafafa',
        moon: '#171717',
      },
      smallCircles: '#f3f3f3',
      projects: {
        leadblooms: '#525252',
        rankmycandidates: '#404040',
        sociallistening: '#404040',
        otherprojects: '#404040',
      },
    },
  },
  {
    name: 'Subtle Gradient',
    colors: {
      social: {
        twitter: '#171717',
        github: '#262626',
        linkedin: '#404040',
      },
      about: {
        myStory: '#525252',
        skills: '#666666',
        experience: '#737373',
        education: '#808080',
      },
      contact: {
        email: '#8c8c8c',
        phone: '#999999',
        globe: '#a6a6a6',
      },
      themes: {
        sun: '#f5f5f5',
        moon: '#171717',
      },
      smallCircles: '#e6e6e6',
      projects: {
        leadblooms: '#525252',
        rankmycandidates: '#666666',
        sociallistening: '#666666',
        otherprojects: '#666666',
      },
    },
  },
  {
    name: 'High Contrast',
    colors: {
      social: {
        twitter: '#000000',
        github: '#1a1a1a',
        linkedin: '#333333',
      },
      about: {
        myStory: '#4d4d4d',
        skills: '#666666',
        experience: '#808080',
        education: '#999999',
      },
      contact: {
        email: '#b3b3b3',
        phone: '#cccccc',
        globe: '#e6e6e6',
      },
      themes: {
        sun: '#ffffff',
        moon: '#000000',
      },
      smallCircles: '#f2f2f2',
      projects: {
        leadblooms: '#4d4d4d',
        rankmycandidates: '#666666',
        sociallistening: '#666666',
        otherprojects: '#666666',
      },
    },
  },
  {
    name: 'Neon Tron',
    colors: {
      social: {
        twitter: '#00f3ff',
        github: '#ff00ff',
        linkedin: '#00ff9f',
      },
      about: {
        myStory: '#ff3e3e',
        skills: '#00ffea',
        experience: '#ff00ea',
        education: '#00ff9f',
      },
      contact: {
        email: '#ff3e3e',
        phone: '#00ffea',
        globe: '#ff00ea',
      },
      themes: {
        sun: '#ffffff',
        moon: '#000000',
      },
      smallCircles: '#1a1a1a',
      projects: {
        leadblooms: '#00f3ff',
        rankmycandidates: '#ff00ff',
        sociallistening: '#ff00ff',
        otherprojects: '#ff00ff',
      },
    },
  },
  {
    name: 'Cyberpunk',
    colors: {
      social: {
        twitter: '#1DA1F2',
        github: '#2b3137',
        linkedin: '#0077B5',
      },
      about: {
        myStory: '#ff71ce',
        skills: '#01cdfe',
        experience: '#05ffa1',
        education: '#b967ff',
      },
      contact: {
        email: '#ff2a6d',
        phone: '#05d9e8',
        globe: '#ff71ce',
      },
      themes: {
        sun: '#ffffff',
        moon: '#000000',
      },
      smallCircles: '#f2f2f2',
      projects: {
        leadblooms: '#ff71ce',
        rankmycandidates: '#01cdfe',
        sociallistening: '#ff71ce',
        otherprojects: '#ff71ce',
      },
    },
  },
  {
    name: 'Synthwave',
    colors: {
      social: {
        twitter: '#ff00ff',
        github: '#00ffff',
        linkedin: '#ff00aa',
      },
      about: {
        myStory: '#ff00ff',
        skills: '#00ffff',
        experience: '#ff00aa',
        education: '#ff00ff',
      },
      contact: {
        email: '#00ffff',
        phone: '#ff00aa',
        globe: '#ff00ff',
      },
      themes: {
        sun: '#ffffff',
        moon: '#000000',
      },
      smallCircles: '#1a1a1a',
      projects: {
        leadblooms: '#ff00ff',
        rankmycandidates: '#00ffff',
        sociallistening: '#00ffff',
        otherprojects: '#00ffff',
      },
    },
  },
  {
    name: 'Black and White',
    colors: {
      social: {
        twitter: '#1DA1F2',
        github: '#2b3137',
        linkedin: '#0077B5',
      },
      about: {
        myStory: '#999999',
        skills: '#999999',
        experience: '#999999',
        education: '#999999',
      },
      contact: {
        email: '#999999',
        phone: '#999999',
        globe: '#999999',
      },
      themes: {
        sun: '#ffffff',
        moon: '#000000',
      },
      smallCircles: '#f2f2f2',
      projects: {
        leadblooms: '#999999',
        rankmycandidates: '#999999',
        sociallistening: '#999999',
        otherprojects: '#999999',
      },
    },
  },
  {
    name: 'Neon Noir',
    colors: {
      social: {
        twitter: '#00ffea',
        github: '#ff00ea',
        linkedin: '#00ff9f',
      },
      about: {
        myStory: '#ff3e3e',
        skills: '#00ffea',
        experience: '#ff00ea',
        education: '#00ff9f',
      },
      contact: {
        email: '#ff3e3e',
        phone: '#00ffea',
        globe: '#ff00ea',
      },
      themes: {
        sun: '#ffffff',
        moon: '#000000',
      },
      smallCircles: '#1a1a1a',
      projects: {
        leadblooms: '#00ffea',
        rankmycandidates: '#ff00ea',
        sociallistening: '#00ffea',
        otherprojects: '#00ffea',
      },
    },
  },
];

// Generate 10 small circles with random sizes between 20 and 50
const smallCircles: CircleConfig[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `small_${i + 1}`,
  label: '',
  dock: 'all',
  size: Math.floor(Math.random() * 31) + 20,
  color: colorSchemes[0].colors.smallCircles,
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

export const getCircles = (schemeIndex: number = 0): CircleConfig[] => {
  const scheme = colorSchemes[schemeIndex];
  
  return shuffle([
    // Social Media Circles (Custom Components)
    // {
    //   id: 'twitter',
    //   label: 'Twitter',
    //   dock: 'lets-hang',
    //   size: 175,
    //   color: scheme.colors.social.twitter,
    //   component: TwitterCircle,
    //   props: {
    //     href: 'https://twitter.com/reidrelatores',
    //   },
    // },
    {
      id: 'github',
      label: 'GitHub',
      dock: 'lets-hang',
      size: 150,
      color: scheme.colors.social.github,
      component: GithubCircle,
      props: {
        href: 'https://github.com/reidspeedo',
      },
    },
    // {
    //   id: 'linkedin',
    //   label: 'LinkedIn',
    //   dock: 'lets-hang',
    //   size: 120,
    //   color: scheme.colors.social.linkedin,
    //   component: LinkedInCircle,
    //   props: {
    //     href: 'https://linkedin.com/in/reidrelatores',
    //   },
    // },

    // About Circles (Custom Components)
    {
      id: 'my_story',
      label: 'My Story',
      dock: 'about',
      size: 150,
      color: scheme.colors.about.myStory,
      component: MyStoryCircle,
      props: {},
    },
    {
      id: 'skills',
      label: 'Skills',
      dock: 'about',
      size: 140,
      color: scheme.colors.about.skills,
      component: SkillsCircle,
      props: {},
    },
    {
      id: 'experience',
      label: 'Experience',
      dock: 'about',
      size: 165,
      color: scheme.colors.about.experience,
      component: WorkExperienceCircle,
      props: {},
    },
    {
      id: 'education',
      label: 'Education',
      dock: 'about',
      size: 110,
      color: scheme.colors.about.education,
      component: EducationCircle,
      props: {},
    },

    // Contact Circles (Custom Components)
    {
      id: 'email',
      label: 'Email',
      dock: 'contact',
      size: 155,
      color: scheme.colors.contact.email,
      component: EmailCircle,
      props: {},
    },
    {
      id: 'phone',
      label: 'Phone',
      dock: 'contact',
      size: 130,
      color: scheme.colors.contact.phone,
      component: PhoneCircle,
      props: {},
    },
    {
      id: 'globe',
      label: 'Location',
      dock: 'contact',
      size: 85,
      color: scheme.colors.contact.globe,
      component: GlobeCircle,
      props: {},
    },
    ...smallCircles.map(circle => ({
      ...circle,
      color: scheme.colors.smallCircles,
    })),

    // Theme Circles
    {
      id: 'sun',
      label: 'Light Mode',
      dock: 'themes',
      size: 100,
      color: scheme.colors.themes.sun,
      component: SunCircle,
      props: {},
    },
    {
      id: 'moon',
      label: 'Dark Mode',
      dock: 'themes',
      size: 50,
      color: scheme.colors.themes.moon,
      component: MoonCircle,
      props: {},
    },

    // Projects
    {
      id: 'leadblooms',
      label: 'leadBlooms',
      dock: 'projects',
      size: 160,
      color: scheme.colors.projects.leadblooms,
      component: LeadBloomsCircle,
      props: {},
    },
    {
      id: 'rankmycandidates',
      label: 'RankMyCandidates',
      dock: 'projects',
      size: 150,
      color: scheme.colors.projects.rankmycandidates,
      component: RankMyCandidatesCircle,
      props: {},
    },
    // {
    //   id: 'sociallistening',
    //   label: 'SocialListening',
    //   dock: 'projects',
    //   size: 155,
    //   color: scheme.colors.projects.sociallistening,
    //   component: SocialListeningCircle,
    //   props: {},
    // },
    {
      id: 'otherprojects',
      label: 'Other Projects',
      dock: 'projects',
      size: 145,
      color: scheme.colors.projects.otherprojects,
      component: OtherProjectsCircle,
      props: {},
    },
  ]);
};

export const allCircles = getCircles(11); 