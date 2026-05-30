# Portfolio Application

A modern, responsive single-page portfolio application showcasing professional and personal web development projects. Built with React 17 and designed to highlight technical skills, project experience, and professional background.

## Features

- **Navigation** - Fixed navigation bar with anchor links to all main sections (Home, Meet Me, Projects, Contact)
- **About/Meet Me Section** - Professional bio with profile image and comprehensive tech stack display
- **Projects Gallery** - Organized project showcase with categorized projects (Personal & Internship)
- **Contact Links** - Direct access to social profiles (GitHub, LinkedIn) and resume download, plus email contact button
- **Responsive Design** - Mobile-first approach with optimized layouts for all screen sizes
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation support
- **Modern Styling** - CSS variable system for consistent design tokens and easy theme management

## Technology Stack

### Frontend

- **React 17** - Component-based UI library
- **React Router DOM v5** - Anchor-based routing for single-page navigation
- **CSS Modules** - Scoped styling for component isolation
- **Font Awesome** - Icon library for tech stack and social links

### Design System

- **CSS Variables** - Centralized color, typography, and spacing tokens
- **Mobile-First Approach** - Responsive breakpoints for tablet and desktop
- **Semantic HTML** - Proper heading hierarchy and semantic elements

## Project Structure

```
src/
├── App.js                 # Main application component with routing
├── index.css             # Global styles and CSS variable definitions
├── Links.js              # Project data source
├── components/
│   ├── About/            # About/Meet Me section with tech stack
│   ├── Header/           # Header component
│   ├── Icons/            # Contact links and social media
│   ├── Nav/              # Navigation bar
│   ├── ProjectList/      # Project card grid component
│   ├── Projects/         # Projects section container
│   └── TechStack/        # Reusable tech stack category component
└── assets/               # Static images (profile photo, showcase)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio-web-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Styling & Design Tokens

### CSS Variables (src/index.css)

**Colors**

- `--color-primary`: #651c29 (burgundy accent)
- `--color-background`: #f9f9f6 (light background)
- `--color-text-dark`: #000 (dark text)
- `--color-text-light`: #FFFAFA (light text)

**Spacing Scale**

- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem

**Typography**

- `--font-base`: 1rem
- `--font-sm`: 0.9rem
- `--font-lg`: 2rem
- `--font-xl`: 2.8rem

## License

This project is personal portfolio work. Rights reserved by Carlos Gomez.
