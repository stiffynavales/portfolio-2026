export interface Project {
    slug: string;
    year: string;
    title: string;
    category: string;
    description: string;
    details: string;
    role: string;
    tools: string[];
    tags: string[];
    image: string;
    link?: string;
    linkText?: string;
}

export const projects: Project[] = [
    {
        slug: "harmony-stream",
        year: "2025",
        title: "Harmony Stream",
        category: "Landing Page",
        description: "A landing page for a music streaming service.",
        details: "Designed and developed a visually immersive landing page for Harmony Stream, a next-generation music streaming platform. The project focused on creating a bold, dark-themed interface with dynamic gradient overlays and smooth micro-interactions to capture the energy of live music. Key features include an animated hero section with a call-to-action, feature highlights grid with iconography, a pricing comparison module, and a responsive mobile-first layout. The design was prototyped in Figma, iterated through user feedback, and built pixel-perfect in WordPress using Elementor Pro with custom CSS animations.",
        role: "UI/UX Designer & Frontend Developer",
        tools: ["Figma", "WordPress", "Elementor Pro", "Custom CSS", "Adobe Photoshop"],
        tags: ["Figma", "UI/UX", "Landing Page", "Wordpress", "AI"],
        image: "/lp-harmonystream.png",
        link: "https://www.figma.com/design/WMQ7xrDW5nW8Rbc4OIYQ2r/Portfolio?node-id=1-246&t=6vBdWPdla4UjlY0Y-1",
        linkText: "View in Figma Portfolio"
    },
    {
        slug: "whey-protein",
        year: "2025",
        title: "Whey Protein",
        category: "Landing Page",
        description: "A Figma product landing page design of a whey protein product.",
        details: "Created a high-conversion product landing page for a premium whey protein brand. The design balances bold fitness-oriented imagery with clean typography and a structured layout that guides users toward purchase. Key sections include a hero with product showcase, ingredient breakdown with animated counters, testimonial carousel, comparison chart against competitors, and a sticky CTA bar. Every design decision was backed by conversion rate optimization principles — from contrast ratios on buttons to the strategic placement of trust badges and social proof elements.",
        role: "UI/UX Designer",
        tools: ["Figma", "Adobe Illustrator", "Unsplash", "Google Fonts"],
        tags: ["Figma", "UI/UX", "Landing Page", "Wordpress", "AI"],
        image: "/lp-whey.png",
        link: "https://www.figma.com/design/WMQ7xrDW5nW8Rbc4OIYQ2r/Portfolio?node-id=1-3&t=6vBdWPdla4UjlY0Y-1",
        linkText: "View in Figma Portfolio"
    },
    {
        slug: "car-variants",
        year: "2025",
        title: "Car Variants Landing Page",
        category: "Landing Page",
        description: "A landing page for Isuzu D-max variants, lets you browse through different variants/models of the product.",
        details: "Built an interactive product showcase landing page for the Isuzu D-max lineup, allowing users to browse and compare multiple vehicle variants in a clean, engaging interface. The design features a dynamic variant selector with real-time content switching, detailed spec comparison tables, a 360° image gallery concept, and a dealer locator CTA section. The prototype was built in Figma with interactive components to demonstrate variant switching behavior. Special attention was given to automotive UX conventions — users can filter by feature, compare side-by-side, and request a test drive directly from the page.",
        role: "UI/UX Designer & Prototype Developer",
        tools: ["Figma", "Figma Prototyping", "WordPress", "Elementor", "AI Image Generation"],
        tags: ["Figma", "UI/UX", "Landing Page", "Wordpress", "AI", "Prototype"],
        image: "/ptype-variants.png",
        link: "https://www.figma.com/proto/BF8xi8Zr91K1TDIoznRsZG/Isuzu-Dmax-Landing-Page?node-id=35-39&t=COyaIylTbGAEpZZC-1&starting-point-node-id=3%3A2",
        linkText: "View Figma Prototype"
    },
    {
        slug: "marc-photography",
        year: "2026",
        title: "Marc Photography",
        category: "Website Application",
        description: "A full-featured photography studio website specializing in bespoke photography and cinematic films for weddings, celebrations, and distinguished events.",
        details: "Designed and developed a sophisticated, full-featured website for Marc Photography — a professional photography and cinematic films studio. The site features an immersive scrollytelling hero with parallax animations, a dynamic portfolio gallery with category-based filtering, a membership and an interactive booking form powered by Pencil Booking, and a contact section with EmailJS integration for real-time inquiries. Built with Next.js and Tailwind CSS for performance and responsiveness, the entire design was orchestrated using AI tools including Google Stitch for UI generation and Google Whisk for asset creation. The project showcases an AI-augmented web development workflow from wireframe to production deployment on Vercel.",
        role: "Full-Stack Developer & AI Integration Specialist",
        tools: ["Next.js", "Tailwind CSS", "Google Stitch", "Google Whisk", "Vercel", "EmailJS", "Framer Motion", "Pencil Booking"],
        tags: ["Next.js", "UI/UX", "Google Stitch", "Whisk", "AI", "Vercel"],
        link: "https://marc-photography.vercel.app/",
        image: "/mp-logo-thumbnail.jpg"
    }
];
