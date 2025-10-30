# AI/ML Portfolio Design Guidelines for Thirumalai G

## Design Approach
**Reference-Based:** Drawing inspiration from Linear's clean technical aesthetic, Vercel's developer-focused presentation, and Apple's minimalist sophistication. This portfolio will showcase AI/ML expertise through purposeful animations and modern interactions that demonstrate technical proficiency.

## Layout Architecture

### Hero Section (90vh)
Full-viewport hero with gradient background treatment. Two-column layout on desktop:
- Left column (60%): Large typographic introduction with staggered fade-in animations
  - "AI/ML Developer" subtitle (text-sm, tracking-wide, uppercase)
  - Name in display font (text-6xl to text-7xl, font-bold)
  - Animated tagline describing specialization (text-xl, font-light)
  - Dual CTA buttons (View Projects, Download Resume) with blur background treatment
- Right column (40%): Animated 3D cube or geometric shape rotating slowly using CSS transforms, representing AI/ML concepts (nodes, neural networks)

### Projects Showcase (Main Focus)
Bento grid layout using 12-column system:
- Featured project cards in varied sizes (some span 2 columns, others full width)
- Each card contains:
  - Project thumbnail/icon area
  - Project title (text-2xl, font-semibold)
  - Technology tags as pills (text-xs, rounded-full badges)
  - Brief description (text-base, max 2 lines)
  - Hover interaction: Card lifts with shadow, reveals "View Details" overlay
- Stagger animation on scroll (cards appear sequentially with 100ms delay)
- 4 main projects from resume: Sign Language Classification, Voice-to-Voice AI Agent, Llama Architecture, YouTube Video AI Agent

### Experience Timeline
Horizontal timeline for desktop, vertical for mobile:
- Timeline connector line with animated progress indicator
- Experience cards with:
  - Company logo placeholder (w-16, h-16, rounded-lg)
  - Position title (text-xl, font-semibold)
  - Duration and location (text-sm)
  - Bullet points for achievements
  - Slide-in animation on scroll (from left/right alternating)
- Include both Vcodez and Freelance positions

### Skills Constellation
Interactive skills display using floating elements:
- Circular/orbital layout with "AI/ML" at center
- Skill bubbles orbit around center (Python, PyTorch, LangChain, etc.)
- Bubbles have varying sizes based on proficiency
- Subtle continuous rotation animation
- Hover on bubble: enlarges, shows proficiency level

### Contact Section
Split layout (50/50):
- Left: Contact form with modern inputs (floating labels, minimal borders)
- Right: Contact information cards with icons
  - Email, LinkedIn, GitHub, Hugging Face links as interactive cards
  - Location information
  - Availability status badge

## Typography System

**Font Stack:**
- Display: Inter or Space Grotesk (weights: 300, 400, 600, 700)
- Body: Inter (weights: 400, 500)

**Hierarchy:**
- Hero Title: text-7xl, font-bold, leading-tight
- Section Headers: text-4xl to text-5xl, font-semibold, tracking-tight
- Project Titles: text-2xl, font-semibold
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Labels/Tags: text-xs to text-sm, font-medium, uppercase, tracking-wide

## Spacing System
Use Tailwind units: **4, 8, 12, 16, 20, 24**
- Section padding: py-20 to py-24 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Element spacing: gap-8 for grids, space-y-4 for vertical stacks
- Container max-width: max-w-7xl with px-6 to px-8

## Component Library

### Navigation
Sticky header with blur backdrop:
- Logo/Name on left
- Navigation links center: Projects, Experience, Skills, Contact
- Download Resume button on right
- Smooth scroll behavior to sections
- Shrinks on scroll (py-6 to py-4 transition)

### Project Cards
- Rounded corners: rounded-xl to rounded-2xl
- Border: 1px subtle border
- Hover state: translateY(-4px), enhanced shadow
- Badge system for tech stack (rounded-full, small padding)
- Gradient overlay on hover revealing CTA

### Buttons
Primary CTA: Larger padding (px-8, py-4), rounded-lg, font-semibold
Secondary: Outline variant with same dimensions
Blur treatment when overlaying images: backdrop-blur-md, semi-transparent background

### Input Fields
- Floating label pattern
- Border: 1px, thickens on focus
- Rounded: rounded-lg
- Padding: px-4, py-3
- Focus state: ring effect

## Animation Strategy

**On Load:**
- Hero elements stagger in (opacity + translateY): 0ms, 200ms, 400ms delays
- Geometric shape fades in with rotation (600ms delay)

**On Scroll (Intersection Observer):**
- Projects: Cascade animation (stagger 100ms)
- Timeline: Slide in alternating from left/right
- Skills: Bubbles pop in with scale animation
- Sections: Fade up on entering viewport

**Continuous Animations:**
- Hero geometric shape: Slow continuous rotation (20s duration)
- Skills constellation: Gentle orbital movement
- Cursor followers on project cards (subtle parallax on mouse move)

**Interaction Animations:**
- Button hover: Scale(1.05), enhanced shadow
- Card hover: Lift effect, shadow intensifies
- Link hover: Underline slide-in from left
- Form input focus: Border glow, label float

**Performance:** Use transform and opacity only. Respect prefers-reduced-motion.

## Images

**Hero Background:** Abstract AI/neural network visualization (particles, nodes, connections) as subtle background with gradient overlay - low opacity, creates depth without distraction

**Project Cards:** Screenshot thumbnails or custom icons representing each project:
- Sign Language Classification: Hand gesture visualization
- Voice-to-Voice Agent: Waveform/voice representation
- Llama Architecture: Neural network diagram
- YouTube Video AI: Video creation pipeline visual

Images should be high-contrast, well-lit, and professionally cropped to 16:9 or 4:3 aspect ratios.

## Mobile Responsive Strategy
- Hero: Single column, text-4xl for title
- Projects: Single column grid
- Timeline: Vertical layout
- Skills: Stacked list instead of orbital
- Contact: Stacked sections
- Navigation: Hamburger menu with slide-in drawer
- Spacing: Reduce to py-8 to py-12 for sections