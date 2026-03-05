# Umar Khan - Software Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase projects, skills, and professional experience.

## Live Demo

🔗 **Live Site**: [umarahmedkhan.vercel.app](https://umarahmedkhan.vercel.app/)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Runtime**: React 19

## Features

- **Home/About** - Personal introduction and overview
- **Projects** - Showcase of 12+ projects with descriptions, technologies, and links
- **Experience** - Professional work history and academic roles
- **Skills** - Categorized skills (Languages, Frameworks, Developer Tools)
- **Resume** - Downloadable resume with PDF export
- **Contact** - Contact information and links
- **Responsive Design** - Fully optimized for all screen sizes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/umar-dim/portfolio-nextjs.git

# Navigate to project directory
cd portfolio-nextjs

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── components/       # Reusable React components
│   ├── data/             # Static data (projects, skills, experience)
│   ├── experiences/      # Experience detail pages
│   ├── projects/         # Project detail pages
│   ├── resume/           # Resume page
│   ├── page.tsx          # Home page
│   └── layout.tsx        # Root layout
├── public/               # Static assets
├── package.json          # Dependencies
└── next.config.ts        # Next.js configuration
```

## Customization

To customize the portfolio content, edit the files in `app/data/`:

- `app/data/projects.ts` - Add or modify projects
- `app/data/experiences.ts` - Add or modify experience entries
- `app/data/skills.ts` - Update skills and proficiency levels

## License

MIT License - Created by Umar Khan
