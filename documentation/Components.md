# Component Architecture

The application is structured into reusable React components to maintain clean and modular code. Each major section of the portfolio is encapsulated within its own component.

## Core Components

### `Hero.tsx`
- **Purpose:** The landing section of the website.
- **Key Features:** Full-screen optimized imagery (`fetchPriority="high"`, `loading="eager"`), subtle overlays for text readability, and large cinematic typography.

### `About.tsx`
- **Purpose:** Introduces Amalda Liz.
- **Key Features:** Split-layout design with an image on one side and a biographical description on the other. Uses `motion` for staggered entry animations.

### `Works.tsx`
- **Purpose:** Showcases key projects (e.g., film features).
- **Key Features:** A horizontal scrolling or grid layout of project cards with hover-triggered overlays.

### `Modelling.tsx`
- **Purpose:** Highlights editorial and modeling achievements.
- **Key Features:** Immersive imagery, elegant typography, and scroll-linked parallax effects using `motion`.

### `Gallery.tsx`
- **Purpose:** A comprehensive grid showcasing various photoshoots and looks.
- **Key Features:** Dynamic image grid, interactive hover states (scaling images), full-screen image viewer (lightbox functionality), and optimized loading based on index (initial images are eager, the rest are lazy).

### `Articles.tsx` & `Testimonial.tsx`
- **Purpose:** Displays press features, articles, and quotes from collaborators.
- **Key Features:** Clean typography-focused cards and carousel/list formats for readability.

### `Navbar.tsx` & `Footer.tsx`
- **Purpose:** Global navigation and site footer.
- **Key Features:** Sticky navigation, smooth scrolling anchor links, and a comprehensive footer containing social links (Instagram, Facebook, IMDb, Threads) with animated hover states.

### `SectionHeader.tsx`
- **Purpose:** A reusable typography component for consistent section titles across the application.
