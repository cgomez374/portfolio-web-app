# Frontend Engineering Standards

This document defines the frontend architecture, UI standards, and component expectations for this project.

---

# UI Philosophy

The UI should feel:

- modern
- clean
- responsive
- minimal
- professional
- polished

Favor simplicity and clarity over flashy effects.

---

# Responsive Design Standards

- Use mobile-first responsive design.
- Ensure layouts adapt cleanly across desktop, tablet, and mobile devices.
- Avoid fixed-width layouts when possible.
- Prevent overflow and layout shifting.

---

# Component Design Standards

Each component should:

- Have a single responsibility.
- Be reusable and composable.
- Avoid excessive internal state.
- Remain visually consistent with the rest of the application.

Preferred component structure:

- component logic
- derived values
- event handlers
- JSX rendering
- export

---

# JSX Standards

- Keep JSX readable and properly formatted.
- Avoid deeply nested JSX structures.
- Extract repeated markup into reusable components.
- Prefer mapping arrays over manually duplicated JSX.
- Use meaningful prop names.

---

# Styling Standards

- Use CSS Modules only.
- Keep styles scoped to their component.
- Avoid unnecessary specificity.
- Maintain consistent spacing scale throughout the application.
- Use flexbox and grid appropriately.
- Prefer reusable utility patterns over duplicated styling.

---

# Animation Standards

- Keep animations subtle and professional.
- Avoid excessive motion effects.
- Prefer performant CSS transitions and transforms.
- Do not introduce animation libraries unless requested.

---

# Portfolio Project Standards

This project represents a professional engineering portfolio.

Generated code should:

- demonstrate strong frontend engineering practices
- appear production-ready
- maintain clean organization
- emphasize readability and maintainability
- avoid beginner-level coding patterns

---

# Accessibility Standards

- Maintain keyboard accessibility.
- Ensure readable text contrast.
- Use semantic sectioning elements.
- Ensure links and buttons are accessible.
- Avoid relying solely on color for communication.

---

# Performance Standards

- Optimize images and static assets.
- Avoid unnecessary renders.
- Keep DOM structure efficient.
- Avoid unnecessary dependencies and large libraries.

---

# Preferred Engineering Behaviors

- Prefer composition over duplication.
- Reuse existing UI patterns before creating new ones.
- Match existing design language and spacing conventions.
- Keep logic predictable and easy to debug.
- Generate code that another engineer could immediately maintain.

---

# Anti-Patterns to Avoid

- Massive JSX files
- Repeated hardcoded sections
- Overengineered abstractions
- Inline style objects
- Magic numbers without explanation
- Inconsistent spacing or typography
- Excessive animation or visual clutter
- Unnecessary wrapper divs
