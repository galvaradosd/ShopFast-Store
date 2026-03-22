# ShopFast Store – E-commerce SPA (Coderhouse React JS Final Project)

This is the final project for the React JS course at Coderhouse. It’s a modern e-commerce Single Page Application (SPA) built with React, Vite, and Firebase Firestore, demonstrating componentization, state management, routing, and real-world integrations.

---

## Features

- **SPA Navigation:** Fast, client-side routing with React Router.
- **Product Catalog & Details:** Dynamic product listing and detail views from Firestore.
- **Shopping Cart:** Global state with React Context, persisted in localStorage.
- **Checkout Flow:** Complete purchase process with order confirmation (orders saved in Firestore).
- **Conditional Rendering:** Handles loading, out-of-stock, empty cart, and purchase confirmation states.
- **Responsive Design:** Optimized for desktop and mobile.
- **Theme Support:** Light/dark mode toggle, preference saved in localStorage.
- **Internationalization:** English/Spanish support with i18next.

---

## Technologies

- React (with Hooks)
- React Router
- React Context API
- Firebase Firestore
- i18next
- Vite
- ESLint
- Bun (as package manager and script runner)

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended)
- [Node.js](https://nodejs.org/) (for compatibility)

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   bun install
   ```

3. **Environment variables:**
   - Copy `.env.example` to `.env` in the project root.
   - The `.env.example` file already contains demo Firebase credentials for this project.  
     No further setup is needed for educational/demo use.

### Running the App

```sh
bun run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
bun run build
```
Preview the production build:
```sh
bun run preview
```

### Linting

```sh
bun run lint
```

---

## Project Structure

```
src/
  assets/         # Images and static assets
  components/     # React components
  context/        # React Context providers (Cart, Theme, etc.)
  firebase/       # Firebase config and Firestore services
  i18n/           # Internationalization setup and translations
  App.jsx         # Main app component
  main.jsx        # Entry point
```

---

## Notes

- The cart state is managed globally with React Context and persisted in localStorage.
- Product data and orders are stored in Firebase Firestore.
- The app is for educational/demo purposes only.
- **Bun** is used as the package manager. See [Bun docs](https://bun.sh/docs/cli/install) if you’re new to it.
- If you want to use npm or yarn, you must generate the appropriate lockfile and ensure compatibility.

---

## License

This project is for educational use and is not intended for commercial deployment.

---

**Developed as the Final Project for the React JS Course at [Coderhouse](https://www.coderhouse.com/).**

---

> **Best Practice Reminder:**  
> Never commit your `.env` file with real credentials to any public repository.  
> Always use `.env.example` to share environment variable templates or demo credentials.  
> This keeps your project secure, professional, and easy for others to set up.