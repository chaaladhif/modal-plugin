import { defineConfig } from "vite"; // Fonction principale pour configurer Vite
import { resolve } from "path"; // Utilitaire pour résoudre les chemins de fichiers
import react from "@vitejs/plugin-react";// Plugin pour le support de React
import { libInjectCss } from "vite-plugin-lib-inject-css";// Plugin pour injecter le CSS dans les bibliothèques

export default defineConfig({
  plugins: [  // Configuration des plugins
      react(), // Activation du support React
      libInjectCss() // Activation de l'injection CSS pour les bibliothèques
    ],
  build: {// Configuration de la build
    copyPublicDir: false,// Ne pas copier le répertoire public lors de la build
     // Configuration de la bibliothèque
      lib: {
      entry: resolve(__dirname, "src/main.js"), // Point d'entrée de la bibliothèque
      formats: ["es"], // Format de sortie (ES modules)
      name: "Modal", // Nom de la bibliothèque
      fileName: "modal", // Nom du fichier de sortie
    },
    rollupOptions: { // Options de Rollup pour la build
      external: ["react", "react/jsx-runtime"],// Exclure React des dépendances bundlées
      output: { // Définition des variables globales pour les dépendances externes
        globals: {
          react: "React",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});