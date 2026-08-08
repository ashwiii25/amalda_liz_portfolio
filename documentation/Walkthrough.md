# Website Walkthrough

## 1. Landing (Hero Section)
Upon opening the website, the user is greeted with a striking, full-screen Hero image of Amalda Liz. The image is preloaded for instant display. The minimalist typography establishes an editorial, high-fashion tone immediately.

## 2. Navigation
A sticky or easily accessible Navbar allows users to jump between sections like Home, Gallery, and Contact. Smooth scroll behaviors create seamless transitions between these anchor points.

## 3. About Section
Scrolling down reveals the About section, where an image fades in alongside introductory text. The layout utilizes generous negative space to keep the focus on the content.

## 4. Work & Modelling Portfolios
The user can browse through distinct sections dedicated to "Works" (film/acting) and "Modelling". These sections use hover-triggered overlays, cinematic scroll animations, and fluid grids to present high-resolution images elegantly.

## 5. Dedicated Gallery
The Gallery features a dense grid of images. Initial images load instantly, while others are lazy-loaded to preserve bandwidth. Clicking on an image opens a focused, high-resolution full-screen view (lightbox).

## 6. Footer & Contact
At the bottom of the page, the Footer acts as the central hub for contact and external links. 
- It includes a prominent "Let's make something amazing together" call to action.
- A "Socials" module features icons for Instagram, Facebook, IMDb, and Threads.
- The social icons have interactive hover animations (`scale: 1.1`) to encourage engagement.

## Security & Performance Audit
- **Security:** The application is a static frontend deployment. It does not contain any exposed API keys, secrets, or sensitive backend logic. All external links open securely (`target="_blank" rel="noopener noreferrer"`).
- **Performance:** Image loading has been rigorously optimized with HTML5 fetch priorities (`fetchPriority="high"`, `loading="eager"` for above-the-fold, and `loading="lazy"` for below-the-fold) and asynchronous decoding to prevent main-thread blocking.
- **Functionality:** All component logic, scroll listeners, and motion animations have been linted and verified to execute without throwing unhandled exceptions.
