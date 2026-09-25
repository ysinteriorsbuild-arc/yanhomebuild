export interface NewsSection {
  heading?: string;
  paragraphs: string[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  tag: string;
  image: string;
  intro: string[];
  sections: NewsSection[];
  takeaways?: string[];
  closing?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'from-concept-to-cabinetry-our-design-to-build-process',
    title: 'From Concept to Cabinetry: Inside Our Design-to-Build Process',
    excerpt:
      'What actually happens between a first consultation and the day your furniture is installed? Here’s how design and fabrication move together under one roof.',
    date: '18 Sep 2026',
    isoDate: '2026-09-18',
    tag: 'Process',
    image: 'https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: [
      'Most homeowners only see two moments of a renovation: the mood board and the finished room. Everything in between — measuring, material selection, joinery drawings, workshop production — tends to stay invisible. But that middle stretch is where a design either survives contact with reality or falls apart.',
      'Because our design team and our fabrication workshop sit under the same roof, that middle stretch is shorter and far less prone to miscommunication. Here’s roughly how a project moves from first conversation to final handover.',
    ],
    sections: [
      {
        heading: '1. Site Visit and Brief',
        paragraphs: [
          'Before any concept work begins, we visit the space in person. Photos and floor plans only tell part of the story — ceiling beams, uneven walls, existing wiring and door swings all shape what’s realistically possible. We use this visit to understand how the space is actually lived in, not just how it looks on paper.',
        ],
      },
      {
        heading: '2. Design Development',
        paragraphs: [
          'Layouts, material palettes and furniture concepts are developed together rather than in sequence. Because our designers know what our workshop can fabricate — and what it can’t, or what it can’t do affordably — the concepts we present are already grounded in what’s buildable, not just what renders well.',
        ],
      },
      {
        heading: '3. Shop Drawings and Material Sign-Off',
        paragraphs: [
          'Once a design direction is approved, it’s translated into detailed shop drawings — exact dimensions, joinery methods, hardware specs and material codes. This is the step that prevents surprises later: what you approve on paper is what gets built.',
        ],
      },
      {
        heading: '4. Workshop Fabrication',
        paragraphs: [
          'Cabinetry, built-ins and custom fixtures are produced in our own workshop rather than outsourced piecemeal to different vendors. That keeps quality consistent across a project and means our team can flag and fix issues before they ever reach your home.',
        ],
      },
      {
        heading: '5. Installation and Handover',
        paragraphs: [
          'The same team that designed the space oversees installation, so any on-site adjustments are made with the original intent in mind rather than reinterpreted by a third party. We walk through the finished space together before calling a project complete.',
        ],
      },
    ],
    takeaways: [
      'Design and fabrication decisions are made together, not handed off in isolation.',
      'Shop drawings turn an approved concept into an exact build spec — no guesswork on site.',
      'In-house production means one team is accountable from first sketch to final install.',
    ],
    closing:
      'If you’re planning a renovation and want a clearer sense of how design and build actually connect, get in touch and we’ll walk you through it for your space specifically.',
  },
  {
    slug: 'clever-storage-ideas-for-compact-malaysian-homes',
    title: 'Clever Storage Ideas for Compact Malaysian Homes',
    excerpt:
      'From condo units to terrace houses, storage is rarely about having more space — it’s about using the space you already have more deliberately.',
    date: '04 Sep 2026',
    isoDate: '2026-09-04',
    tag: 'Design Tips',
    image: 'https://images.pexels.com/photos/32579238/pexels-photo-32579238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: [
      'Many of the homes we work on in the Klang Valley share the same constraint: good layouts, limited floor area. Rather than fighting that limit, the most effective storage solutions we’ve built work with it — using height, awkward corners and multi-purpose furniture that a standard fit-out would overlook.',
    ],
    sections: [
      {
        heading: '1. Build Up, Not Just Out',
        paragraphs: [
          'Wall space above eye level is one of the most underused areas in a home. Full-height wardrobes, overhead kitchen cabinets and tall bookshelves make use of vertical space that would otherwise just be ceiling. In condo units especially, this can free up meaningful floor area without shrinking a single room.',
        ],
      },
      {
        heading: '2. Turn Dead Corners Into Storage',
        paragraphs: [
          'The space under a staircase, beside a fridge, or in an awkward L-shaped nook is often left empty simply because standard furniture doesn’t fit it. Custom-built cabinetry can be shaped precisely to these areas, turning wasted volume into genuinely useful storage.',
        ],
      },
      {
        heading: '3. Let Furniture Do Double Duty',
        paragraphs: [
          'A bench with drawers underneath, a bed frame with built-in storage, or a study desk that folds into a wall unit all reduce the number of separate pieces a small room needs. For studio and 2-room condo layouts, this single change often does more for a room’s feel than a fresh coat of paint.',
        ],
      },
      {
        heading: '4. Keep Sightlines Clear',
        paragraphs: [
          'Storage that’s functional but visually busy can make a small room feel smaller. Concealed handles, matching cabinet fronts and consistent material choices help a wall of storage read as a single clean surface rather than a stack of separate boxes.',
        ],
      },
    ],
    takeaways: [
      'Vertical space is usually the easiest untapped storage in a compact home.',
      'Custom cabinetry can claim awkward corners that off-the-shelf furniture can’t.',
      'Multi-purpose furniture reduces clutter without reducing function.',
      'Consistent finishes keep a storage wall looking calm, not crowded.',
    ],
    closing:
      'Have a space that feels short on storage? We’re happy to take a look and suggest what’s realistically possible for your layout.',
  },
  {
    slug: 'choosing-materials-that-hold-up-in-malaysias-climate',
    title: 'Choosing Materials That Hold Up in Malaysia’s Climate',
    excerpt:
      'Year-round humidity changes what "durable" means for furniture and fixtures. Here’s what we consider before recommending a material for a project.',
    date: '21 Aug 2026',
    isoDate: '2026-08-21',
    tag: 'Materials',
    image: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: [
      'A material that performs beautifully in a temperate climate can behave very differently in Malaysia’s heat and humidity. Solid timber can warp, certain adhesives can fail early, and finishes that look identical on a sample chip can age in noticeably different ways once installed. Material choice here isn’t just about aesthetics — it’s about what will still look and function well in five years.',
    ],
    sections: [
      {
        heading: '1. Moisture Resistance Comes First in Wet Areas',
        paragraphs: [
          'Kitchens, bathrooms and anywhere near a balcony door need materials engineered to resist swelling and delamination. High-pressure laminates and moisture-resistant board cores generally outperform raw veneers in these zones, without sacrificing the wood-look finish most homeowners want.',
        ],
      },
      {
        heading: '2. Consider How a Finish Ages, Not Just How It Looks New',
        paragraphs: [
          'Matte and textured finishes tend to hide fine scratches and fingerprints better over time than high-gloss surfaces, particularly in humid conditions where surfaces are wiped down more often. We factor this into recommendations for high-traffic areas like kitchen cabinetry and TV consoles.',
        ],
      },
      {
        heading: '3. Hardware Matters as Much as the Surface',
        paragraphs: [
          'Hinges, runners and handles are exposed to the same humidity as the cabinetry itself. Lower-grade hardware corrodes or stiffens faster in Malaysian conditions, which is why we spec hardware rated for the environment rather than defaulting to whatever’s cheapest.',
        ],
      },
      {
        heading: '4. Ventilation Design Extends Material Life',
        paragraphs: [
          'Even the right materials can underperform in a poorly ventilated space. Where possible, we factor airflow and moisture exposure into cabinetry placement — for instance, leaving clearance behind units in kitchens and utility areas rather than sealing them flush against damp walls.',
        ],
      },
    ],
    takeaways: [
      'Wet areas need moisture-resistant cores and finishes, not just a waterproof top coat.',
      'Matte and textured finishes generally age better than high-gloss in humid, high-touch spaces.',
      'Hardware quality affects long-term durability as much as the surface material does.',
      'Ventilation around built-ins helps materials perform as intended over time.',
    ],
    closing:
      'If you’re unsure whether a material you’ve seen online is suitable for our climate, ask us before committing — it’s a quick conversation that can save a costly redo.',
  },
  {
    slug: 'minimalist-interiors-designing-calm-functional-spaces',
    title: 'Minimalist Interiors: Designing Calm, Functional Spaces',
    excerpt:
      'Minimalism isn’t about having less furniture — it’s about every piece earning its place. Here’s how we approach it in practice.',
    date: '30 Jul 2026',
    isoDate: '2026-07-30',
    tag: 'Design Tips',
    image: 'https://images.pexels.com/photos/8092431/pexels-photo-8092431.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: [
      'Minimalist design has a reputation for being stark or cold, but done well, it’s closer to the opposite — a space with nothing extra to distract from how it actually feels to live in. The discipline is in the decisions, not the decor.',
    ],
    sections: [
      {
        heading: '1. Start With What the Room Needs to Do',
        paragraphs: [
          'Before choosing finishes or furniture, we define the room’s actual function: is it for quiet reading, entertaining guests, or both at different times? A minimalist layout works because it’s built around real use, not because it’s sparse for its own sake.',
        ],
      },
      {
        heading: '2. Limit the Material Palette',
        paragraphs: [
          'Rooms tend to feel calmer when they draw from two or three materials rather than six. A restrained palette — say, a single wood tone paired with one neutral surface — lets the architecture and light do more of the visual work.',
        ],
      },
      {
        heading: '3. Hide the Everyday Clutter',
        paragraphs: [
          'Minimalist rooms usually have just as much stored inside them as any other home — the difference is that it’s concealed. Built-in cabinetry with clean fronts lets a room look uncluttered while still holding everything a household actually needs.',
        ],
      },
      {
        heading: '4. Let a Few Details Carry the Room',
        paragraphs: [
          'With fewer elements competing for attention, the ones that remain matter more. A well-chosen light fixture, a textured feature wall, or a single striking piece of furniture can define a minimalist room far more effectively than it would in a busier space.',
        ],
      },
    ],
    takeaways: [
      'Minimalism starts with function, not with removing things for their own sake.',
      'A restrained material palette reads as calmer than a varied one.',
      'Concealed storage keeps a room visually clean without sacrificing capacity.',
      'Fewer standout details carry more visual weight in a pared-back space.',
    ],
    closing:
      'If a calmer, more considered space is the goal, we’re glad to help figure out what to keep, what to conceal, and what to let go of.',
  },
  {
    slug: 'built-in-vs-loose-furniture-whats-right-for-your-space',
    title: 'Built-In vs. Loose Furniture: What’s Right for Your Space',
    excerpt:
      'Custom built-ins and freestanding furniture both have a place — the right mix depends on your layout, budget and how long you plan to stay.',
    date: '09 Jul 2026',
    isoDate: '2026-07-09',
    tag: 'Design Tips',
    image: 'https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: [
      'One of the most common questions we get early in a project is whether a piece should be custom-built into the space or bought as freestanding furniture. Neither is inherently better — they solve different problems, and most homes end up using a mix of both.',
    ],
    sections: [
      {
        heading: 'When Built-In Makes Sense',
        paragraphs: [
          'Built-in furniture is the better choice when a space has an awkward footprint, when you want a completely seamless look, or when you know exactly how you’ll use the space for years to come. Wardrobes, kitchen cabinetry and TV consoles are typically better as built-ins because they’re shaped precisely to the room, with no wasted gaps.',
        ],
      },
      {
        heading: 'When Loose Furniture Makes Sense',
        paragraphs: [
          'Freestanding pieces make more sense when flexibility matters — if you rent, plan to move within a few years, or simply like the option to rearrange a room. Sofas, dining tables and accent chairs are usually better left loose, since they’re easier to replace or reposition as needs change.',
        ],
      },
      {
        heading: 'Budget Considerations',
        paragraphs: [
          'Built-ins generally cost more upfront per piece because they’re custom-fabricated, but they can be more cost-effective over time by making full use of available space and avoiding the need to replace ill-fitting furniture later. Loose furniture offers more flexibility to spread spending out or upgrade gradually.',
        ],
      },
      {
        heading: 'A Practical Middle Ground',
        paragraphs: [
          'Most of the homes we design use built-ins for storage-heavy, fixed-use areas — kitchens, wardrobes, entertainment walls — and loose furniture for social and flexible spaces like the living and dining areas. That mix tends to give the best balance of a tailored look and everyday adaptability.',
        ],
      },
    ],
    takeaways: [
      'Built-ins suit fixed, storage-heavy areas and awkward footprints.',
      'Loose furniture suits spaces where flexibility or future moves matter.',
      'Built-ins cost more upfront but can outperform on long-term space efficiency.',
      'Most homes benefit from a deliberate mix of both, not an all-or-nothing choice.',
    ],
    closing:
      'Not sure which approach fits your space? Tell us how you plan to use the room and we’ll recommend a mix that makes sense for your budget and timeline.',
  },
  {
    slug: 'feature-walls-that-make-a-small-room-feel-bigger',
    title: 'Feature Walls That Make a Small Room Feel Bigger',
    excerpt:
      'Used well, a single feature wall can add depth and character to a room — without the visual clutter that actually makes small spaces feel cramped.',
    date: '18 Jun 2026',
    isoDate: '2026-06-18',
    tag: 'Design Tips',
    image: 'https://images.pexels.com/photos/8357326/pexels-photo-8357326.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: [
      'It sounds counterintuitive: adding texture or pattern to a wall in a small room, rather than keeping every surface plain to preserve space. But a well-placed feature wall can actually make a compact room feel more considered and spacious, not less — if it’s used with restraint.',
    ],
    sections: [
      {
        heading: '1. Choose One Wall, Not the Whole Room',
        paragraphs: [
          'The effect works because of contrast. A single feature wall against otherwise neutral surroundings draws the eye and adds depth. Apply the same treatment to every wall and the room loses that focal point — and can start to feel smaller, not bigger.',
        ],
      },
      {
        heading: '2. Fluted and Grooved Panels Add Depth Without Bulk',
        paragraphs: [
          'Vertical fluted panelling is one of the most effective feature wall treatments for compact rooms. The vertical lines draw the eye upward, subtly increasing the sense of ceiling height, while the panels themselves add only a shallow amount of depth to the wall.',
        ],
      },
      {
        heading: '3. Keep the Rest of the Room Quiet',
        paragraphs: [
          'A feature wall does its job best when it isn’t competing with a busy floor, patterned curtains or an equally bold accent piece elsewhere in the room. Letting the rest of the space stay simple gives the feature wall room to actually read as a feature.',
        ],
      },
      {
        heading: '4. Match the Material to the Room’s Light',
        paragraphs: [
          'In naturally darker rooms, a matte or lightly textured finish tends to work better than a high-gloss surface, which can look flat without strong light to reflect. Rooms with good natural light have more flexibility to take on richer tones or reflective finishes.',
        ],
      },
    ],
    takeaways: [
      'One feature wall creates contrast; every wall treated the same removes it.',
      'Vertical panelling can make a room feel taller without adding real depth.',
      'A quiet surrounding room lets the feature wall stand out as intended.',
      'Match the finish to the room’s natural light, not just the mood board.',
    ],
    closing:
      'Curious what would work for a specific wall in your home? Share a photo of the space and we can suggest a treatment suited to its light and proportions.',
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
