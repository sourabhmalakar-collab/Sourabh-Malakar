import { Project, ServiceItem, Testimonial, BTSItem } from '../types';

export const PHOTOGRAPHER_INFO = {
  name: 'Sourabh Malakar',
  title: 'Commercial Food & Product Photographer | Visual Storyteller',
  location: 'Nagpur, India',
  availability: 'Available Worldwide for Commercial Projects',
  experience: '6+ Years',
  shootsCompleted: '140+',
  brandsCount: '50+',
  email: 'sourabh.malakar@gmail.com',
  phone: '+91 98765 43210',
  instagram: 'https://instagram.com/sourabhmalakar.photography',
  linkedin: 'https://linkedin.com/in/sourabhmalakar',
  behance: 'https://behance.net/sourabhmalakar',
  youtube: 'https://youtube.com/@sourabhmalakar',
  bioHeadline: 'Behind the Lens',
  bio: [
    "I'm Sourabh Malakar, a commercial food and product photographer with over six years of experience creating visual content for brands.",
    "I believe great photography does more than make something look beautiful. It creates emotion, captures attention, and helps people connect with a brand.",
    "From carefully styled food photography to high-impact product campaigns and creative visual concepts, I combine photography, lighting, storytelling, and creativity to create images that stand out.",
    "Based in Nagpur, India, available for collaborations and commercial projects worldwide."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'gourmet-food-campaign',
    title: 'Gourmet Food Campaign',
    category: 'Food Photography / Commercial',
    categorySlug: 'food',
    client: 'L’Osteria Fine Dining & Artisanal Bakery',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Sculpting flavor through precision rim lighting and dynamic organic textures.',
    overview: 'A full-scale commercial campaign for an artisanal gastronomy brand looking to re-energize their seasonal menu and cookbook release. The visual goal was to elevate culinary craft into sculptural fine art while retaining mouth-watering authenticity.',
    creativeApproach: 'We utilized deep shadow contrasts (chiaroscuro) combined with targeted micro-reflectors to capture delicate glazes, steam vapor, and herbal garnishes at the microscopic level.',
    lightingStrategy: 'Key light: Profoto B10 Plus with 3ft Octa softbox at 45° back-rim, fill bounced through a frosted acrylic diffusion panel, and snooted optical spots to illuminate the focal garnish.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
        caption: 'Signature slow-roasted tenderloin with caramelized glaze and micro-herbs.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85',
        caption: 'Plated culinary composition emphasizing natural earthy tones and slate surfaces.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
        caption: 'Artisan hand-rolled pasta finished with truffle shavings and golden olive drizzle.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=85',
        caption: 'Crisp wood-fired artisanal flatbread with fresh burrata and basil.',
        aspect: 'portrait'
      }
    ],
    behindTheScenes: [
      {
        url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
        title: 'Studio Lighting Setup',
        description: 'Tethered 61MP capture to calibrated Eizo monitors with dual C-stands holding diffusion scrims.'
      },
      {
        url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
        title: 'Live Food Styling & Tweezing',
        description: 'Precision placement of micro-greens 12 seconds prior to strobe firing to preserve dew droplets.'
      }
    ],
    techSpecs: {
      camera: 'Sony A7R V (61 Megapixels)',
      lens: 'Sony FE 90mm f/2.8 Macro G OSS',
      lighting: 'Profoto B10X Plus + Broncolor Para 88',
      shutter: '1/250s',
      aperture: 'f/8.0',
      iso: '100'
    },
    deliverables: ['18 Master Commercial Hero Stills', 'Social Media 4K Reels & Cinemagraphs', 'Print Menu & Billboard Assets'],
    results: '340% increase in seasonal menu reservations and featured in prestigious culinary editorial magazines.'
  },
  {
    id: 'premium-product-visuals',
    title: 'Premium Product Visuals',
    category: 'Product Photography / Advertising',
    categorySlug: 'product',
    client: 'AURA Luxury Fragrances & Horology',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Minimalist reflections, flawless metallic gradients, and obsidian glass purity.',
    overview: 'A global product launch visual suite for luxury fragrance bottles and precision timepieces. Designed for high-contrast e-commerce, flagship retail lightboxes, and digital brand campaigns.',
    creativeApproach: 'Using polarizers and graduated strip-box lighting to carve crisp highlight lines along the beveled glass edges while retaining obsidian black shadows with zero unwanted dust or reflections.',
    lightingStrategy: 'Four-light overhead strip array with black card flags on magnetic arms to eliminate studio bounce. Polarized cross-lighting on metallic crowns and bezels.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Luxury perfume flacon on dark reflective stone with subtle ambient mist.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85',
        caption: 'High-end cosmetics glass bottle with precise amber liquid refraction.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Chronograph timepiece showcasing sunburst guilloche dial and sapphire crystal clarity.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1600&q=85',
        caption: 'Minimalist smart device with ceramic finish and laser-accurate edge highlights.',
        aspect: 'landscape'
      }
    ],
    behindTheScenes: [
      {
        url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
        title: 'Achromatic Polarizer Rig',
        description: 'Eliminating glare on faceted glass while isolating amber internal liquid glow.'
      },
      {
        url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80',
        title: 'Focus Stacking Station',
        description: 'Capturing 24 individual focus slices merged seamlessly for edge-to-edge optical sharpness.'
      }
    ],
    techSpecs: {
      camera: 'Fujifilm GFX 100 II (Medium Format 102MP)',
      lens: 'GF 120mm f/4 Macro R LM OIS WR',
      lighting: 'Profoto D2 1000 AirTTL with 1x4 Stripboxes & Grids',
      shutter: '1/125s',
      aperture: 'f/11.0 (Focus-stacked 16 slices)',
      iso: '64'
    },
    deliverables: ['Global E-Commerce Stills', 'Ultra-Res Billboard Assets', 'Retail Lightbox Displays'],
    results: 'Featured in Harper’s Bazaar and GQ product showcases; doubled client direct-to-consumer conversions.'
  },
  {
    id: 'chocolate-dessert-collection',
    title: 'Chocolate & Dessert Collection',
    category: 'Food Styling / Creative Direction',
    categorySlug: 'food',
    client: 'Velvet Noir Chocolatier',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Sensual decadence, micro-crystallized cocoa textures, and warm golden hour tones.',
    overview: 'A premium brand story celebrating dark single-origin truffles, molten lava ganache, and hand-dusted cocoa beans. Focused on sensory indulgence and tactile perfection.',
    creativeApproach: 'We heated tools to specific temperatures for clean chocolate cuts and used low-angle warm directional lighting to showcase velvety gloss and delicate powdered dust.',
    lightingStrategy: 'Continuous warm tungsten modeling light paired with ultra-short strobe flash duration to freeze delicate chocolate shavings in mid-air.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1600&q=85',
        caption: 'Handcrafted dark chocolate bark dusted with roasted hazelnuts and sea salt crystals.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85',
        caption: 'Triple chocolate mousse cake with mirror chocolate glaze reflection.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Artisan chocolate truffles with 24k gold leaf and velvet cocoa powder coating.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fluffy gourmet raspberry soufflé with powdered sugar dusting in mid-air.',
        aspect: 'portrait'
      }
    ],
    behindTheScenes: [
      {
        url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
        title: 'Thermal Temperature Control',
        description: 'Maintaining a 19°C studio environment to prevent chocolate bloom and fingerprint marks.'
      }
    ],
    techSpecs: {
      camera: 'Sony A7R V',
      lens: 'Sony 90mm f/2.8 Macro + 50mm f/1.2 GM',
      lighting: 'Godox AD600 Pro with Beauty Dish & Grid',
      shutter: '1/200s',
      aperture: 'f/5.6',
      iso: '100'
    },
    deliverables: ['Packaging Cover Art', 'Luxury Gift Box Inserts', 'Social Motion Graphics'],
    results: 'Sold out holiday gift edition within 48 hours of campaign launch.'
  },
  {
    id: 'levitation-series',
    title: 'Levitation Series',
    category: 'Creative Photography / Levitation',
    categorySlug: 'levitation',
    client: 'Kinetic Footwear & Zero-G Concepts',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Defying gravity through physical rigging, multi-point strobes, and seamless compositing.',
    overview: 'An avant-garde commercial series exploring zero-gravity physics for high-performance sneakers, floating fruit ingredients, and deconstructed electronic hardware.',
    creativeApproach: 'Using custom monofilament wire rigging, acrylic rods, high-speed sound triggers, and composite plate photography to achieve hyper-realistic floating aesthetics without CGI artificiality.',
    lightingStrategy: 'Three high-speed sync strobes firing at 1/8000s flash duration (t0.1 = 1/19,000s) to freeze floating particles, laces, and water beads in mid-flight.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=85',
        caption: 'High-performance athletic sneaker suspended in mid-air with dynamic shadow geometry.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=85',
        caption: 'Floating citrus and botanical components around a suspended perfume vial.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1600&q=85',
        caption: 'Urban skate shoe defying gravity over minimalist architectural concrete.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1600&q=85',
        caption: 'Deconstructed burger layers captured in a synchronized vertical explosion drop.',
        aspect: 'landscape'
      }
    ],
    behindTheScenes: [
      {
        url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80',
        title: 'Multi-Wire Rigging Setup',
        description: 'Micro-filament wire suspension with reference plates for zero-artifact composite retouching.'
      },
      {
        url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
        title: 'High-Speed Sound Sensor Trigger',
        description: 'Micro-second laser tripwire triggering Profoto Pro-11 strobe at 1/80,000s peak freeze.'
      }
    ],
    techSpecs: {
      camera: 'Sony A7R V',
      lens: 'Sony FE 50mm f/1.2 GM',
      lighting: 'Profoto Pro-11 2400 AirTTL with Freeze Mode',
      shutter: '1/8000s HSS',
      aperture: 'f/8.0',
      iso: '100'
    },
    deliverables: ['Global Hero Campaign Posters', 'Animated 3D Depth Parallax Loops', 'Print Advertising'],
    results: 'Over 1.8M organic social impressions and awarded Gold in Commercial Craft Advertising.'
  },
  {
    id: 'beverage-campaign',
    title: 'Beverage & Splash Campaign',
    category: 'Product Photography / Motion',
    categorySlug: 'beverage',
    client: 'VORTEX Botanical Spirits & Cold Brew',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Hyper-crisp liquid dynamics, crystalline ice shards, and macro condensation.',
    overview: 'A visual celebration of liquid movement, ice collisions, and refreshing effervescence for an artisanal botanical gin and craft tonic brand.',
    creativeApproach: 'We engineered custom acrylic splash tanks and electromagnetic drop triggers to capture the exact millisecond an ice sphere breaks the surface with surrounding citrus droplets.',
    lightingStrategy: 'Backlit through custom matte plexiglass with twin rim strobes to illuminate liquid amber translucency while freezing water droplets sharp as glass.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=85',
        caption: 'High-speed liquid crown splash with suspended lime zest and condensation beads.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=85',
        caption: 'Signature smoked cocktail with rosemary garnish and crystal clear clarity.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1600&q=85',
        caption: 'Craft beer pour with cascading micro-bubbles and dense velvety foam head.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1600&q=85',
        caption: 'Handcrafted iced espresso beverage with swirling milk density dynamics.',
        aspect: 'landscape'
      }
    ],
    behindTheScenes: [
      {
        url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
        title: 'Waterproof Splash Tank Chamber',
        description: 'Tethered capture station with optical splash barrier protecting lens elements.'
      }
    ],
    techSpecs: {
      camera: 'Sony A1 (50MP @ 30fps)',
      lens: 'Sony FE 70-200mm f/2.8 GM OSS II',
      lighting: 'Elinchrom ELC 500 High-Speed Strobes',
      shutter: '1/5000s',
      aperture: 'f/9.0',
      iso: '125'
    },
    deliverables: ['High-Res Digital Billboards', '120fps 4K Slow Motion Loops', 'Point of Sale Retail Assets'],
    results: 'Generated 42% increase in distributor onboarding during summer beverage launch.'
  },
  {
    id: 'artisan-coffee-roastery',
    title: 'Artisan Coffee & Roastery',
    category: 'Commercial Photography / Culinary',
    categorySlug: 'food',
    client: 'Monsoon Origin Coffee Lab',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Raw ceramic warmth, rising aroma steam, and roasted bean micro-details.',
    overview: 'A complete brand visual refresh covering single-origin whole bean packaging, manual pour-over rituals, and specialty espresso bar aesthetics.',
    creativeApproach: 'Emphasized rich earthy hues, matte stoneware ceramics, and subtle back-lit morning light to convey an intimate, mindful ritual.',
    lightingStrategy: 'Large 5ft softbox mimicking soft diffused Nordic window light with negative fill on the right side to sculpt deep organic shadows.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85',
        caption: 'Ceramic cups of specialty pour-over brew with warm wooden table textures.',
        aspect: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=85',
        caption: 'Golden crema extraction shot from bottomless portafilter.',
        aspect: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85',
        caption: 'Freshly roasted Arabica beans in hand-carved mahogany tasting paddle.',
        aspect: 'landscape'
      }
    ],
    behindTheScenes: [
      {
        url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
        title: 'Micro-Steam Vapor Machine',
        description: 'Using ultrasonic mist generator to sustain natural, authentic steam plumes for photography.'
      }
    ],
    techSpecs: {
      camera: 'Sony A7R V',
      lens: 'Zeiss Batis 85mm f/1.8',
      lighting: 'Aputure 600d Pro + Light Dome 150',
      shutter: '1/320s',
      aperture: 'f/4.0',
      iso: '100'
    },
    deliverables: ['Global Packaging Art', 'E-Commerce Hero Banners', 'Brand Story Video B-Roll'],
    results: 'Helped brand scale from regional roaster to national subscription service.'
  }
];

export const IMMERSIVE_SLIDES = [
  {
    id: 'slide-1',
    phrase: 'Crafted with Light.',
    subtext: 'Every beam, shadow, and specular reflection is sculpted to transform everyday ingredients into iconic centerpieces.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2200&q=90',
    tag: 'Lighting Precision'
  },
  {
    id: 'slide-2',
    phrase: 'Designed to Make You Look Twice.',
    subtext: 'We stop the infinite scroll. Visuals with tactile depth, vibrant clarity, and irresistible aesthetic magnetism.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=2200&q=90',
    tag: 'Commercial Impact'
  },
  {
    id: 'slide-3',
    phrase: 'Every Detail Matters.',
    subtext: 'From the crystalline structure of sea salt to the laser-etched bevel of luxury glass, perfection is found in the micro-millimeter.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=2200&q=90',
    tag: 'Ultra-High Resolution'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'food-photography',
    title: 'Food Photography',
    tagline: 'Irresistible culinary storytelling',
    description: 'Beautifully crafted visuals designed to make food look irresistible. We style, light, and capture textures, steam, glazes, and color palettes that make audiences crave your dishes immediately.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    features: ['High-End Restaurant Menus', 'CPG Packaging Photography', 'Cookbook & Editorial Publishing', 'Live On-Set Food Styling'],
    idealFor: 'Restaurants, artisan bakeries, gourmet food brands, CPG food packaging'
  },
  {
    id: 'product-photography',
    title: 'Product Photography',
    tagline: 'Precision commercial aesthetics',
    description: 'Premium visuals that highlight design, texture, quality, and personality. Flawless reflections on glass, metal, leather, and cosmetics with true-to-life color calibration.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    features: ['Luxury Cosmetics & Fragrance', 'Timepieces & Jewelry Stacking', 'Electronics & Hardware', 'E-Commerce & Amazon Premium A+ Content'],
    idealFor: 'D2C brands, luxury manufacturers, tech lifestyle brands'
  },
  {
    id: 'commercial-campaigns',
    title: 'Commercial Campaigns',
    tagline: 'Full-scale brand advertising',
    description: 'Creative photography designed for advertising, marketing, and brand storytelling. High-concept visuals engineered for billboards, digital ad sets, and global marketing launches.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    features: ['Creative Direction & Moodboarding', 'Multi-Platform Asset Toolkits', 'High-Res Large Format Output', 'Full Production & Crew Management'],
    idealFor: 'Creative agencies, national brand campaigns, seasonal product launches'
  },
  {
    id: 'product-videography',
    title: 'Product Videography',
    tagline: 'Cinematic 4K motion in action',
    description: 'Short cinematic videos and visual content for websites, social media, and paid ads. Slow-motion macro reveals, liquid splashes, 360 rotations, and dynamic camera moves.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    features: ['120fps Slow-Motion Macro', 'Liquid Splashes & Drop Dynamics', 'Social Media 9:16 Video Kits', 'Commercial Video Ad B-Roll'],
    idealFor: 'Instagram Reels, TikTok campaigns, website hero video headers'
  },
  {
    id: 'creative-photography',
    title: 'Creative & Levitation Photography',
    tagline: 'Conceptual & gravity-defying art',
    description: 'Levitation photography, light painting, conceptual visuals, and experimental campaigns. We engineer physical rigs and precision composites that captivate imagination.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
    features: ['Physical Monofilament Rigging', 'Light Painting & Long Exposure', 'High-Speed Particle Freeze', 'Surrealist Concept Direction'],
    idealFor: 'Footwear brands, luxury packaging, statement advertising'
  },
  {
    id: 'documentary-photography',
    title: 'Documentary Photography',
    tagline: 'Authentic human & craft narratives',
    description: 'Authentic visual storytelling focused on people, places, and real experiences. Capturing the raw passion of chefs, farmers, master craftsmen, and behind-the-brand origins.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    features: ['Farm-to-Table Origin Stories', 'Master Craftsman Documentaries', 'Kitchen & Factory Operations', 'Brand Heritage Archives'],
    idealFor: 'Heritage brands, organic culinary labels, brand founders'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    step: 'Discover',
    title: 'Brand Vision & Campaign Goals',
    description: 'Understanding the product, brand identity, target demographic, and campaign goals. We dissect brand guidelines and establish visual benchmarks.',
    deliverable: 'Creative Brief & Visual Moodboard'
  },
  {
    number: '02',
    step: 'Create',
    title: 'Concept, Styling & Pre-Production',
    description: 'Developing concepts, prop sourcing, food styling planning, lighting schemes, composition sketches, and art direction.',
    deliverable: 'Shot List & Lighting Blueprint'
  },
  {
    number: '03',
    step: 'Capture',
    title: 'Tethered Production & High-Res Stills',
    description: 'Producing high-quality photography and cinematic visual content with live tethered preview on color-calibrated monitors.',
    deliverable: 'Full High-Res Raw Capture Session'
  },
  {
    number: '04',
    step: 'Refine',
    title: 'Retouching, Color Grading & Master Delivery',
    description: 'Professional pixel-level retouching, focus-stack merging, frequency separation, and multi-format delivery tailored to your platforms.',
    deliverable: 'Color-Managed Print & Web Masters'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Sourabh's ability to understand our products and translate them into premium visuals helped us elevate our entire brand presence. Our conversion rate increased immediately upon updating our campaign assets.",
    author: 'Aarav Mehta',
    role: 'Creative Director',
    company: 'AURA Luxury Fragrances',
    projectType: 'Commercial Product Campaign'
  },
  {
    id: '2',
    quote: "Working with Sourabh is seamless. His mastery of lighting transforms even simple food dishes into sculptural works of art. He captures details we didn't even know existed in our own menu.",
    author: 'Chef Elena Rossi',
    role: 'Executive Chef & Founder',
    company: 'L’Osteria Gastronomy',
    projectType: 'Culinary Hero Series'
  },
  {
    id: '3',
    quote: "The levitation and splash shots Sourabh created for our beverage launch were phenomenal. The sheer technical rigor and crispness of the strobe work blew our creative agency away.",
    author: 'Rohan Deshmukh',
    role: 'Head of Marketing',
    company: 'VORTEX Botanicals',
    projectType: 'High-Speed Motion & Stills'
  }
];

export const CLIENT_LOGOS = [
  { name: 'AURA Luxury', category: 'Fragrance & Horology' },
  { name: 'L’Osteria', category: 'Fine Dining' },
  { name: 'VORTEX', category: 'Botanical Spirits' },
  { name: 'Velvet Noir', category: 'Artisanal Chocolate' },
  { name: 'Kinetic', category: 'Performance Footwear' },
  { name: 'Monsoon Origin', category: 'Specialty Coffee' },
  { name: 'Saffron & Stone', category: 'CPG Food Brand' }
];

export const BTS_ITEMS: BTSItem[] = [
  {
    id: 'bts-1',
    title: 'Studio Lighting Sculpting',
    category: 'Lighting Rig',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    description: 'Balancing three Profoto strobes with custom diffusion sheets to create soft, wrap-around specular lines on curved glassware.',
    technique: 'Cross-Polarized Lighting & Graduated Scrims',
    equipment: 'Profoto B10X, Matthews C-Stands, Savage Seamless Paper'
  },
  {
    id: 'bts-2',
    title: 'Food Styling & Temperature Precision',
    category: 'Culinary Prep',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision tweezing of micro-greens and application of edible glycerin droplets right before the shutter clicks to ensure fresh gloss.',
    technique: 'Precision Micro-Tweezing & Glycerin Mist',
    equipment: 'Culinary Tweezers, Thermapen, Heated Palette Knives'
  },
  {
    id: 'bts-3',
    title: 'Levitation Rigging & Monofilament Support',
    category: 'Special FX',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
    description: 'Rigging mechanical watches and sneakers with 0.15mm fishing monofilament to calculate zero-g trajectory angles.',
    technique: 'Plate Compositing & Precision Wire Rigging',
    equipment: 'Manfrotto Articulated Arms, Calibrated Levelers'
  },
  {
    id: 'bts-4',
    title: 'High-Speed Liquid Impact Catch',
    category: 'Liquid Motion',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    description: 'Freezing an ice cube splash at 1/19,000s strobe duration in an optical grade acrylic water tank.',
    technique: 'Laser Acoustic Drop Sensor & High-Speed Flash',
    equipment: 'Elinchrom ELC 500, Custom Acrylic Splash Basin'
  }
];

export const GEAR_SPECS = [
  { category: 'Bodies', items: ['Sony A7R V (61MP High-Res)', 'Fujifilm GFX 100 II (Medium Format)', 'Sony A1 (50MP 30fps Cinema)'] },
  { category: 'Optics', items: ['Sony FE 90mm f/2.8 Macro G', 'Sony FE 50mm f/1.2 GM', 'Sony FE 24-70mm f/2.8 GM II', 'GF 120mm f/4 Macro'] },
  { category: 'Lighting', items: ['Profoto B10X Plus Monolights', 'Broncolor Para 88 Reflector', 'Aputure 600d Pro Continuous', 'Profoto Pro-11 High Speed'] },
  { category: 'Post & Color', items: ['Eizo ColorEdge 4K Calibrated', 'Capture One Pro Tethering', 'X-Rite ColorChecker Passports', 'Wacom Intuos Pro'] }
];
