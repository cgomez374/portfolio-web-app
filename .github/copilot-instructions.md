# AI Engineering Instructions

You are working in a production-style frontend portfolio application built with React 17 and `react-router-dom` v5.

Your goal is to generate clean, maintainable, scalable, and production-quality frontend code that follows modern software engineering best practices.

---

# Core Engineering Principles

- Prioritize readability and maintainability over cleverness.
- Write code as if it will be maintained by a professional engineering team.
- Prefer simple and explicit implementations.
- Avoid unnecessary abstractions.
- Keep components focused and modular.
- Eliminate duplicated logic whenever possible.
- Match existing repository patterns before introducing new approaches.
- Do not introduce new libraries unless explicitly requested.

---

# Repository Architecture

- The application is currently a small single-page portfolio site.
- `src/App.js` renders the main sections of the page.
- Navigation uses anchor links rather than a multi-page routing architecture.
- `src/Links.js` is the primary data source for project cards.
- Static assets are stored in `src/assets/`.

---

# Component Standards

- Use functional React components only.
- Keep components small and single-purpose.
- Avoid excessively large JSX blocks.
- Extract repeated UI patterns into reusable components.
- Separate rendering logic from data transformation logic.
- Avoid deeply nested conditionals in JSX.
- Prefer early returns for conditional rendering.

---

# Styling Standards

- CSS Modules are the required styling approach.
- Each component should maintain scoped styling through matching `*.module.css` files.
- Do not introduce global CSS unless explicitly necessary.
- Maintain consistent spacing, typography, and layout patterns.
- Prefer responsive layouts by default.

---

# React Standards

- Use hooks appropriately and avoid unnecessary state.
- Derive values instead of duplicating state.
- Avoid prop drilling when possible.
- Prefer declarative rendering patterns.
- Avoid unnecessary re-renders.

---

# Accessibility Requirements

- Use semantic HTML elements.
- Ensure all interactive elements are keyboard accessible.
- Buttons and links must have accessible labels.
- Maintain proper heading hierarchy.
- Avoid accessibility regressions when modifying components.

---

# Performance Expectations

- Avoid unnecessary computations during rendering.
- Keep bundle size minimal.
- Avoid unnecessary dependencies.
- Optimize asset usage when possible.

---

# Code Quality Requirements

- Use descriptive variable and function names.
- Avoid vague names like `data`, `item`, `temp`, or `stuff`.
- Keep functions focused on one responsibility.
- Avoid duplicated business logic.
- Refactor repeated patterns into reusable utilities or components.

---

# Anti-Patterns to Avoid

- Do not introduce overly generic abstractions.
- Do not create large monolithic components.
- Do not add unnecessary state management complexity.
- Do not hardcode repeated UI structures.
- Do not use inline styles unless absolutely necessary.
- Do not introduce premature optimization.
- Do not generate placeholder code or fake implementations.
- Do not rewrite existing architecture unless requested.

---

# Existing Repository Constraints

- The repository currently has no backend or API integration.
- The project is frontend-only and primarily renders static content and external links.
- Maintain compatibility with React 17 and `react-router-dom` v5.
- If routing is modified, use proper `path="/"` syntax for routes.

---

# Expectations Before Generating Code

Before writing code:

- Analyze surrounding files and repository patterns.
- Reuse existing architectural conventions.
- Maintain visual and structural consistency.
- Prefer extending existing components over introducing new architecture.
- Generate production-quality code suitable for a professional portfolio project.
