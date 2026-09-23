import { Creation } from '@/types/creation';

export const SAMPLE_CREATIONS: Creation[] = [
  {
    id: 'aura-luxury-commerce',
    title: 'Aura Luxury Minimalist Commerce',
    subtitle: 'High-end dark aesthetic digital storefront crafted with micro-interactions and smooth checkout logic.',
    category: 'E-Commerce & Brand Identity',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
    overview: 'Aura is an avant-garde digital luxury storefront engineered for high-concurrency bespoke retail. Featuring custom micro-interactions, responsive 3D asset previews, real-time inventory synchrony, and an ultra-minimalist deep black and royal gold design philosophy.',
    publishedDate: '2026',
    technologies: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Stripe'],
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100' },
      { label: 'Render Latency', value: '<45ms' },
      { label: 'Conversion Lift', value: '+38%' }
    ],
    detailedBreakdown: [
      {
        title: 'Architectural Philosophy',
        description: 'Constructed around a composable component architecture designed to ensure near-zero cumulative layout shift during dynamic content hydration.',
        highlights: [
          'Server-first streaming data layer for instant product hydration',
          'Deep dark mode palette with custom amber and 24K gold luminance curves',
          'GPU-accelerated hardware transitions for silky smooth swipe navigation'
        ]
      },
      {
        title: 'Interactive Design & Canvas',
        description: 'Implements bespoke spring physics for tactile tactile feedback when manipulating product configurations.',
        highlights: [
          'Dynamic multi-angle photo gallery with magnifying viewport inspection',
          'Custom drawer cart with optimistic UI state and instantaneous price recalculation',
          'Fluid responsive breakpoint adaptability spanning 320px to 4K displays'
        ]
      }
    ],
    liveUrl: 'https://example.com/aura',
    githubUrl: 'https://github.com/example/aura-commerce'
  },
  {
    id: 'neuraltrace-ai-canvas',
    title: 'NeuralTrace AI Inference Canvas',
    subtitle: 'Interactive real-time visual debugger for large language models and multi-agent reasoning graphs.',
    category: 'AI Tooling & Visual Systems',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    overview: 'NeuralTrace provides visual observability into agentic orchestration. It maps token streams, attention graphs, and tool invocation pipelines onto an infinite hardware-accelerated canvas with zero frame drops.',
    publishedDate: '2026',
    technologies: ['React 19', 'Framer Motion', 'WebSockets', 'Tailwind CSS', 'Python'],
    metrics: [
      { label: 'Graph Nodes Supported', value: '10,000+' },
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Telemetry Jitter', value: '<2ms' }
    ],
    detailedBreakdown: [
      {
        title: 'Real-Time Streaming Engine',
        description: 'Engineered with bi-directional streaming protocols that ingest streaming agent logs without blocking the main DOM thread.',
        highlights: [
          'WebWorker-powered layout calculations for dynamic DAG node graphs',
          'Interactive node inspector revealing latency breakdowns and prompt context',
          'Audio-visual status indicators signaling agent thought loops'
        ]
      },
      {
        title: 'Design System & Aesthetics',
        description: 'Styled using a dark studio console aesthetic with neon sky-blue and cyan data conduits.',
        highlights: [
          'High-contrast typography tuned for dense analytical inspection',
          'Custom pan-and-zoom viewport with mathematical inertia dampening',
          'Exportable session snapshots with cryptographic verification stamps'
        ]
      }
    ],
    liveUrl: 'https://example.com/neuraltrace',
    githubUrl: 'https://github.com/example/neuraltrace'
  },
  {
    id: 'kuro-motion-design-system',
    title: 'Kuro Obsidian Design System',
    subtitle: 'Next-generation accessible motion token framework and dark-mode component architecture.',
    category: 'UI/UX & Component Library',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80',
    overview: 'A boutique UI kit and design system crafted specifically for luxury tech startups. Built on the principles of Swiss typographic hierarchy, strict mathematical padding scales, and sub-pixel motion choreography.',
    publishedDate: '2026',
    technologies: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    metrics: [
      { label: 'Component Primitives', value: '45+' },
      { label: 'Bundle Size', value: '12.4 KB' },
      { label: 'WCAG AA Compliance', value: '100%' }
    ],
    detailedBreakdown: [
      {
        title: 'Motion Choreography',
        description: 'Provides standardized physics-based animation curves designed to eliminate artificial bounce and jitter.',
        highlights: [
          'Optical spring constants adapted for both mobile touch and desktop cursor',
          'Accessible reduced-motion fallbacks built natively into every primitive',
          'Zero external CSS-in-JS dependencies'
        ]
      },
      {
        title: 'Sub-Pixel Typography',
        description: 'Pairs high-character display lettering with monospace numerical tabular layouts for data dashboards.',
        highlights: [
          'Pre-configured dark glassmorphism card tokens with customizable specular borders',
          'Interactive keyboard navigation bindings for all dialogs and popovers',
          'Full theme tokens for Royal Gold, Sky Blue, and Neon Emerald palettes'
        ]
      }
    ],
    liveUrl: 'https://example.com/kuro',
    githubUrl: 'https://github.com/example/kuro-system'
  }
];

// Initial default creations array is set to empty to fulfill the placeholder requirement by default.
export const INITIAL_CREATIONS: Creation[] = [];
