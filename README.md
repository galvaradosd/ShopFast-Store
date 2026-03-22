# ShopFast Store – E-commerce SPA (Coderhouse React JS Final Project)

This repository contains the final integrative project for the React JS course at Coderhouse. The goal is to develop the front-end of a modern e-commerce web application using React, applying all the core concepts and best practices learned throughout the course.

---

## Project Overview

ShopFast Store is a Single Page Application (SPA) that allows users to browse a product catalog, view product details, manage their shopping cart, and complete purchases—all without reloading the browser. The project demonstrates advanced React techniques, modular architecture, and real-world integrations.

---

## Objectives

- Build a complete e-commerce front-end using React.
- Implement SPA navigation with React Router.
- Apply componentization and modular interface architecture.
- Manage global state (cart, theme, etc.) using React Hooks and Context API.
- Integrate Firestore (Firebase) as the database for products and orders.
- Implement dynamic rendering and conditional UI states.
- Provide a seamless and interactive user experience.
- Support internationalization (English/Spanish).
- Support light and dark themes with persistent user preference.

---

## Key Features

- **SPA Navigation:** Fast, client-side routing with React Router.
- **Product Catalog:** Dynamic product listing fetched from Firestore.
- **Product Details:** Detailed view for each product, including stock status.
- **Shopping Cart:** Add, remove, and update products in the cart; cart state managed globally with React Context and persisted in localStorage.
- **Checkout Flow:** Complete purchase process with order confirmation.
- **Conditional Rendering:** UI adapts to loading states, out-of-stock products, empty cart, and purchase confirmation.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Theme Support:** Light and dark mode toggle, with preference saved in localStorage.
- **Internationalization:** Language switching (English/Spanish) with i18next.

---

## Technologies Used

- **React** (with Hooks)
- **React Router**
- **React Context API**
- **Firebase Firestore**
- **i18next** (for internationalization)
- **Vite** (for fast development and build)
- **ESLint** (for code quality)
- **Bun** (as the package manager and script runner)

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (version 1.0 or higher recommended)
- [Node.js](https://nodejs.org/) (for compatibility, but Bun is required for scripts)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies with Bun:**
   ```sh
   bun install
   ```

3. **Configure Firebase:**
   - Create a Firebase project and Firestore database.
   - Update `/src/firebase/config.js` with your Firebase configuration.
   - **Important:** Never commit your private Firebase credentials to a public repository.

### Running the Application

Start the development server with Bun:

```sh
bun run dev
```

Open your browser at the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### Building for Production

To create an optimized production build:

```sh
bun run build
```

Preview the production build locally:

```sh
bun run preview
```

### Linting

To check code quality with ESLint:

```sh
bun run lint
```

---

## Project Structure

```
src/
  assets/         # Images and static assets
  components/     # React components (NavBar, Cart, ProductList, etc.)
  context/        # React Context providers (Cart, Theme, etc.)
  firebase/       # Firebase configuration and Firestore services
  i18n/           # Internationalization setup and translations
  App.jsx         # Main application component
  main.jsx        # Entry point
```

---

## Notes

- The cart state is managed globally using React Context, allowing access from any component without prop drilling, and is persisted in localStorage.
- Product data and orders are stored and retrieved from Firebase Firestore.
- The UI responds to various states: loading, out of stock, empty cart, and purchase confirmation.
- The project is for educational purposes as part of the Coderhouse React JS course.
- **Bun** is used as the package manager and script runner. If you are unfamiliar with Bun, see [the official documentation](https://bun.sh/docs/cli/install) for installation instructions.
- If you wish to use npm or yarn instead, you must manually generate the appropriate lockfile and ensure compatibility.

---

## License

This project is for educational use and is not intended for commercial deployment.

---

**Developed as the Final Project for the React JS Course at [Coderhouse](https://www.coderhouse.com/).**
