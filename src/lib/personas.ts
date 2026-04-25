export type PersonaId = "sophie" | "ava" | "tristan" | "aaron";

export type Presenter = "shane" | "vanessa";

export interface Persona {
  id: PersonaId;
  slug: string;
  name: string;
  shortName: string;
  qualifier: string;
  presenter: {
    name: string;
    firstName: string;
    role: string;
    avatar: string;
    voice: Presenter;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineEmphasis?: string;
    subhead: string;
    leadMagnet: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  vsl: {
    runtime: string;
    posterImage: string;
    posterAlt: string;
  };
  mirror: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  mechanism: {
    title: string;
    body: string;
    pillars: { title: string; body: string }[];
  };
  proof: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  faq: { q: string; a: string }[];
  finalCta: {
    eyebrow: string;
    headline: string;
    subhead: string;
    button: string;
  };
}

const SHARED_PROOF = {
  eyebrow: "26,000+ active members",
  headline: "A network, not a pitch.",
  body: "Elysian Leaders is a global team of professionals who chose a high-ticket distribution path over the side-hustle grind. We're not selling you a course — we're showing you the vehicle, and qualifying whether it's a fit.",
};

const SHARED_PILLARS = [
  {
    title: "High-ticket, not high-volume",
    body: "Commissions run $350–$1,400+ per sale. The economics don't require chasing 1,000 customers a month.",
  },
  {
    title: "The infrastructure is already built",
    body: "No inventory, no shipping, no customer service. The back-end is run by a 50+ year-old company. You distribute; the system fulfils.",
  },
  {
    title: "Designed for professionals, not hustlers",
    body: "If you're earning $75k–$100k+ in a real career, this is built for the way you actually want to work — measured, leveraged, sustainable.",
  },
  {
    title: "Selective by design",
    body: "We qualify before we enroll. The Alignment Audit is a real filter, not a sales pretext. Most who apply aren't a fit, and that's intentional.",
  },
];

const SHARED_FAQ_TAIL = [
  {
    q: "What does it actually cost to start?",
    a: "We talk about real numbers on the strategy call, after the Alignment Audit. The Audit takes about 4 minutes and helps us decide if the call is worth your time and ours.",
  },
  {
    q: "Is this network marketing?",
    a: "It's a high-ticket distribution model. There's a team structure and there are overrides — we're transparent about that. The product is real, the commissions are real, and the audience is professional. We don't recruit; we qualify.",
  },
  {
    q: "How much time does this take?",
    a: "The first 90 days take real focus — call it 8–12 hours a week alongside your existing role. After that, it scales to whatever you want it to be. We'll walk through the time model on the call.",
  },
  {
    q: "What's the next step after I watch the video?",
    a: "Take the 4-minute Alignment Audit. If your answers fit, we'll send you a calendar link to book a call. If not, we'll tell you why — and that's a complete and useful answer in itself.",
  },
];

export const personas: Record<PersonaId, Persona> = {
  sophie: {
    id: "sophie",
    slug: "searching-sophie",
    name: "Searching Sophie",
    shortName: "Sophie",
    qualifier: "Professional reclaim",
    presenter: {
      name: "Vanessa Carling",
      firstName: "Vanessa",
      role: "Co-Founder, Elysian Leaders",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400",
      voice: "vanessa",
    },
    hero: {
      eyebrow: "For professionals tired of asking permission",
      headline: "Build a business",
      headlineEmphasis: "that fits your life.",
      subhead: "A 5-minute walkthrough of the Freedom Blueprint — the same path Vanessa used to step away from the invisible ceiling and into a high-ticket business of her own.",
      leadMagnet: "The Freedom Blueprint",
      ctaPrimary: "Watch the walkthrough",
      ctaSecondary: "Take the Alignment Audit",
    },
    vsl: {
      runtime: "5:00",
      posterImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600",
      posterAlt: "Vanessa Carling in conversation",
    },
    mirror: {
      eyebrow: "The invisible ceiling",
      title: "On paper, you've made it. The math just isn't adding up.",
      body: [
        "You earned the title. You hold the salary. People respect what you do — and on the 20th of the month, the math is still tighter than it should be.",
        "You're tired of asking for permission to live your life. And you're quietly worried that if you stay on this track, the next twenty years will look exactly like the last five.",
        "You don't need another side hustle. You need a professional pivot.",
      ],
    },
    mechanism: {
      title: "What the Freedom Blueprint actually is",
      body: "The Blueprint isn't a course or a community. It's the operating model behind a high-ticket distribution business — the infrastructure, the math, and the team — packaged for professionals who want a real business, not a hobby.",
      pillars: SHARED_PILLARS,
    },
    proof: SHARED_PROOF,
    faq: [
      {
        q: "I'm not looking to be a salesperson. Is this a fit?",
        a: "Most of our team aren't 'salespeople' — they're professionals who built something on the side and let it grow. The model is consultative; you're qualifying buyers, not chasing them.",
      },
      ...SHARED_FAQ_TAIL,
    ],
    finalCta: {
      eyebrow: "If this lands",
      headline: "Take the Alignment Audit.",
      subhead: "Four minutes. Honest answers. We'll tell you whether the next conversation is worth having.",
      button: "Start the Alignment Audit",
    },
  },

  ava: {
    id: "ava",
    slug: "strategic-ava",
    name: "Strategic Ava",
    shortName: "Ava",
    qualifier: "Side-hustle aware",
    presenter: {
      name: "Vanessa Carling",
      firstName: "Vanessa",
      role: "Co-Founder, Elysian Leaders",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400",
      voice: "vanessa",
    },
    hero: {
      eyebrow: "For professionals who've already done the research",
      headline: "A side-business",
      headlineEmphasis: "that holds up to your standards.",
      subhead: "If you've already evaluated affiliate marketing, digital products, and low-margin e-commerce — this is the framework you wished those models were.",
      leadMagnet: "The Freedom Blueprint",
      ctaPrimary: "See the framework",
      ctaSecondary: "Take the Alignment Audit",
    },
    vsl: {
      runtime: "5:00",
      posterImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1600",
      posterAlt: "Vanessa Carling walking through the framework",
    },
    mirror: {
      eyebrow: "Model fatigue",
      title: "You've already done the homework. Most of it was disappointing.",
      body: [
        "You've watched the YouTube videos. You've sat in the webinars. You've looked at affiliate marketing, low-margin e-commerce, and the latest digital product launch — and walked away.",
        "Not because you're afraid of work. Because the work didn't match the return. High-volume hustle for thin margins isn't a business; it's a second job with worse benefits.",
        "What you actually want is a model with professional-grade economics and someone you trust to walk you through the real numbers.",
      ],
    },
    mechanism: {
      title: "Why this model survives the comparison",
      body: "The Freedom Blueprint is built around a single question: what does the math have to look like for a working professional to take this seriously? We start with the unit economics, not the hype.",
      pillars: SHARED_PILLARS,
    },
    proof: SHARED_PROOF,
    faq: [
      {
        q: "How is this different from affiliate marketing?",
        a: "Different ticket size, different margin profile, different infrastructure. Affiliate marketing rewards traffic volume; this rewards qualified conversations. We'll show you the side-by-side on the call.",
      },
      ...SHARED_FAQ_TAIL,
    ],
    finalCta: {
      eyebrow: "If the math holds up",
      headline: "Take the Alignment Audit.",
      subhead: "Four minutes. Real questions. We use it to decide if a call is worth your time and ours.",
      button: "Start the Alignment Audit",
    },
  },

  tristan: {
    id: "tristan",
    slug: "mobile-tristan",
    name: "Mobile Tristan",
    shortName: "Tristan",
    qualifier: "Location independence",
    presenter: {
      name: "Shane Carling",
      firstName: "Shane",
      role: "Co-Founder, Elysian Leaders",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      voice: "shane",
    },
    hero: {
      eyebrow: "For high-earners on a long leash",
      headline: "Income that travels",
      headlineEmphasis: "with you.",
      subhead: "A 5-minute walkthrough of the 100K Roadmap — the same engine Shane uses to run a high-ticket business from anywhere, without asking anyone for permission.",
      leadMagnet: "The 100K Roadmap",
      ctaPrimary: "Get the 100K Roadmap",
      ctaSecondary: "Take the Alignment Audit",
    },
    vsl: {
      runtime: "5:00",
      posterImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600",
      posterAlt: "Shane Carling on a coastal terrace",
    },
    mirror: {
      eyebrow: "The golden leash",
      title: "Remote isn't free. It's just a longer leash.",
      body: [
        "You've got the remote role, the income, the optionality. And you're still asking another adult for permission to book a flight or shift a time zone.",
        "You're not interested in the budget-nomad fantasy — laptops on beaches, hostels, $1k-a-month survival mode. You want the real version: a business that runs on its own infrastructure while you live well.",
        "What you need is a vehicle, not a job with a different view.",
      ],
    },
    mechanism: {
      title: "What the 100K Roadmap actually is",
      body: "The Roadmap is the math behind a location-independent high-ticket business — the unit economics, the back-end infrastructure, and the time model that decouples income from physical presence.",
      pillars: SHARED_PILLARS,
    },
    proof: SHARED_PROOF,
    faq: [
      {
        q: "Do I need to leave my current role?",
        a: "Most of our team didn't, at least not at first. The model fits inside a demanding career — that's part of the design. You'll know whether to leave when the math says so.",
      },
      ...SHARED_FAQ_TAIL,
    ],
    finalCta: {
      eyebrow: "If the engine fits",
      headline: "Take the Alignment Audit.",
      subhead: "Four minutes. Real questions. If you qualify, we'll send a calendar link.",
      button: "Start the Alignment Audit",
    },
  },

  aaron: {
    id: "aaron",
    slug: "roi-aaron",
    name: "ROI Aaron",
    shortName: "Aaron",
    qualifier: "ROI pragmatist",
    presenter: {
      name: "Shane Carling",
      firstName: "Shane",
      role: "Co-Founder, Elysian Leaders",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      voice: "shane",
    },
    hero: {
      eyebrow: "For people who've already run the math on FBA",
      headline: "High-ticket math,",
      headlineEmphasis: "without the inventory.",
      subhead: "If you've evaluated FBA, dropshipping, or thin-margin e-commerce and the numbers didn't work — this is the side-by-side Shane wishes someone had shown him five years earlier.",
      leadMagnet: "The 100K Roadmap",
      ctaPrimary: "See the side-by-side",
      ctaSecondary: "Take the Alignment Audit",
    },
    vsl: {
      runtime: "5:00",
      posterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
      posterAlt: "Shane Carling walking through unit economics",
    },
    mirror: {
      eyebrow: "The technician trap",
      title: "Most side-hustles aren't businesses. They're low-paying jobs you bought for yourself.",
      body: [
        "You've looked at FBA. You've looked at dropshipping. You've watched someone you know turn a $20k investment into a garage full of unsold inventory and a 60-hour week of customer service emails.",
        "10% margins. Inventory risk. Platform dependency. A single algorithm change away from zero. The math is brutal once you actually run it.",
        "What you want is one sale that covers the mortgage, not a thousand sales that cover the time you spent shipping them.",
      ],
    },
    mechanism: {
      title: "Why the unit economics work",
      body: "The 100K Roadmap is the side-by-side comparison between traditional e-commerce and high-ticket distribution. Margins, time-to-revenue, capital exposure, and platform risk — laid out flat so you can decide.",
      pillars: SHARED_PILLARS,
    },
    proof: SHARED_PROOF,
    faq: [
      {
        q: "Is this just MLM with extra steps?",
        a: "It's a high-ticket distribution model with a team structure and overrides — we don't pretend otherwise. What's different is the price point, the margin profile, and the audience. We'll be transparent on the call.",
      },
      ...SHARED_FAQ_TAIL,
    ],
    finalCta: {
      eyebrow: "If the math holds",
      headline: "Take the Alignment Audit.",
      subhead: "Four minutes. Real questions. We use it to decide if a call is worth running the numbers on.",
      button: "Start the Alignment Audit",
    },
  },
};

export const personaList: Persona[] = [
  personas.sophie,
  personas.ava,
  personas.tristan,
  personas.aaron,
];
