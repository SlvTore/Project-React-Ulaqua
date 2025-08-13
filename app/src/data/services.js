// Centralized service data derived from template service detail pages
export const SERVICES = {
  'project-planning': {
    id: 'project-planning',
    title: 'Project Planning',
    icon: 'flaticon-water-bottle-1',
    heroImage: 'assets/images/resource/service-1.jpg',
    images: ['assets/images/resource/service-2.jpg','assets/images/resource/service-3.jpg'],
    short: 'Professional planning for water system projects ensuring efficiency and compliance.',
    sections: [
      { heading: 'Project Planning', text: 'We deliver end-to-end project planning services for water treatment installations, covering requirement analysis, system design, regulatory alignment, procurement, and timeline optimization.' },
      { heading: 'Expert Guidance', text: 'Our team leverages decades of combined experience to anticipate risks, optimize resource allocation, and accelerate deployment.' }
    ],
    features: [
      { title: 'Timeline Optimization', desc: 'Structured phases reduce delays and improve delivery certainty.' },
      { title: 'Compliance Ready', desc: 'Aligned with local and international water safety guidelines.' }
    ]
  },
  'residential-waters': {
    id: 'residential-waters',
    title: 'Residential Waters',
    icon: 'flaticon-water',
    heroImage: 'assets/images/resource/service-4.jpg',
    images: ['assets/images/resource/service-2.jpg','assets/images/resource/service-3.jpg'],
    short: 'Whole‑home water purification and softening systems for families.',
    sections: [
      { heading: 'Residential Waters', text: 'Comprehensive residential treatment solutions remove sediments, heavy metals, micro‑organisms, chlorine, and hardness.' },
      { heading: 'Health & Convenience', text: 'Cleaner water for drinking, bathing, and appliances, extending system lifespan and improving taste.' }
    ],
    features: [
      { title: 'Multi-Stage Filtration', desc: 'Sediment, carbon, RO, and UV integration.' },
      { title: 'Eco Efficient', desc: 'Optimized water and energy usage.' }
    ]
  },
  'commercial-waters': {
    id: 'commercial-waters',
    title: 'Commercial Waters',
    icon: 'flaticon-water-bottle',
    heroImage: 'assets/images/resource/service-5.jpg',
    images: ['assets/images/resource/service-2.jpg','assets/images/resource/service-3.jpg'],
    short: 'Scalable water treatment systems for hospitality, retail, and offices.',
    sections: [
      { heading: 'Commercial Waters', text: 'Custom engineered systems sized for flow demand, uptime resilience, and maintenance efficiency.' },
      { heading: 'Operational Reliability', text: 'Smart monitoring and modular design minimize downtime.' }
    ],
    features: [
      { title: 'Scalable Architecture', desc: 'Modular assemblies adapt as operations grow.' },
      { title: 'Remote Monitoring', desc: 'Proactive performance alerts and diagnostics.' }
    ]
  },
  'filtration-plants': {
    id: 'filtration-plants',
    title: 'Filtration Plants',
    icon: 'flaticon-recycle',
    heroImage: 'assets/images/resource/service-6.jpg',
    images: ['assets/images/resource/service-2.jpg','assets/images/resource/service-3.jpg'],
    short: 'Large scale municipal and industrial filtration infrastructure.',
    sections: [
      { heading: 'Filtration Plants', text: 'Design/build services for municipal and industrial water purification—clarification, disinfection, sludge handling.' },
      { heading: 'Engineering Excellence', text: 'Process modeling ensures efficiency, throughput, and sustainability.' }
    ],
    features: [
      { title: 'Process Modeling', desc: 'Advanced simulation for optimized throughput.' },
      { title: 'Lifecycle Support', desc: 'Commissioning, training, audits, upgrades.' }
    ]
  },
  'water-softening': {
    id: 'water-softening',
    title: 'Water Softening',
    icon: 'flaticon-glass',
    heroImage: 'assets/images/resource/service-7.jpg',
    images: ['assets/images/resource/service-2.jpg','assets/images/resource/service-3.jpg'],
    short: 'Ion-exchange and alternative hardness reduction technologies.',
    sections: [
      { heading: 'Water Softening', text: 'Eliminates scale buildup, improving appliance efficiency and extending asset life.' },
      { heading: 'Quality & Comfort', text: 'Enhanced soap performance, reduced spotting, smoother skin and hair.' }
    ],
    features: [
      { title: 'Low Salt Use', desc: 'Optimized regeneration cycles.' },
      { title: 'Smart Controllers', desc: 'Demand-based automation reduces waste.' }
    ]
  },
  'market-research': {
    id: 'market-research',
    title: 'Market Research',
    icon: 'flaticon-water-drop',
    heroImage: 'assets/images/resource/service-8.jpg',
    images: ['assets/images/resource/service-2.jpg','assets/images/resource/service-3.jpg'],
    short: 'Analytical insights for water industry investment and product strategy.',
    sections: [
      { heading: 'Market Research', text: 'Data-driven intelligence—regulatory trends, consumer behavior, emerging technologies.' },
      { heading: 'Strategic Clarity', text: 'Actionable reporting for capital allocation and roadmap planning.' }
    ],
    features: [
      { title: 'Benchmarking', desc: 'Competitive and regional performance baselines.' },
      { title: 'Trend Forecasting', desc: 'Predictive modeling for market direction.' }
    ]
  }
};

// Ordered array for listings & navigation
export const SERVICES_ORDER = [
  'project-planning',
  'residential-waters',
  'commercial-waters',
  'filtration-plants',
  'water-softening',
  'market-research'
];

export const SERVICES_LIST = SERVICES_ORDER.map(k => {
  const { id, title, icon, short } = SERVICES[k];
  return { id, title, icon, description: short, link: `/service/${id}` };
});
