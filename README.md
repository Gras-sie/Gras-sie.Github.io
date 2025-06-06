# Personal Website

Welcome to my personal website. This project showcases my work, interests, and achievements in a clear and visually pleasing way.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Version Control**: Git

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/Gras-sie/Personal-Website.git
    cd Personal-Website
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start development server:
    ```bash
    npm run dev
    ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Current Features

- **Homepage**: A welcoming landing page with an introduction about me.
- **Portfolio**: A curated selection of projects and professional work.
- **About**: Details about my background, experience, and skills.
- **Contact**: A form to get in touch with me.

## Visual & Design

The website embraces a minimalist design with modern aesthetics:
- **Responsive layout** for an optimal viewing experience on all devices.
- **Clean typography** and visually balanced sections.
- **High-quality imagery** and subtle animations to engage visitors.

## Project Structure

```
src/
  ├── components/    # React components
  ├── data/         # Static data and content
  ├── hooks/        # Custom React hooks
  ├── styles/       # Global styles and Tailwind config
  ├── types/        # TypeScript type definitions
  └── utils/        # Helper functions and utilities
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Continuous Integration

This project uses [GitHub Actions](https://github.com/features/actions) for continuous integration. The CI workflow is configured to trigger on pushes and pull requests to the `main` branch. It performs these steps:
- Checks out the code using `actions/checkout@v3`
- Sets up Node.js (version 16) with `actions/setup-node@v3`
- Installs dependencies with `npm ci`
- Runs tests using `npm test`
- Builds the project using `npm run build`

## Incoming Features

Ideas and recommendations for enhancing the website in the future:

- **Blog Section**: A dedicated blog to share insights, tutorials, and industry trends.
- **Interactive Portfolio**: Improvements such as filters, sorting, and project details pop-ups.
- **Enhanced Responsiveness**: Further optimizations for mobile devices and accessibility improvements.
- **SEO & Performance Optimization**: Implementing best practices for improved search ranking and load speed.
- **Social Media Integration**: Seamless connectivity to my social channels for broader audience engagement.
- **Analytics Dashboard**: Insights into visitor statistics and engagement metrics.

## Future Enhancements

- **Testing:** Automated testing using Vitest will be added in the future.

## Conclusion

I am continually working to enhance the website's usability, design, and functionality. Stay tuned for upcoming features and improvements.

Happy browsing!
