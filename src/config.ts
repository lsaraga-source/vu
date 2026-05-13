// ============================================================
// CONFIG VÜ — Constantes produit centralisées
// Pour modifier une valeur produit : change-la ici uniquement.
// ============================================================

// --- LIMITES FREEMIUM ---
export const freemium = {
  limiteItemsGratuit: 300,       // items max en version gratuite
  limiteTopGratuit: 4,           // tops par catégorie en gratuit
  limiteTopPro: 10,              // tops par catégorie en Pro
  limiteMoodSearch: 20,          // recherches mood par mois en Pro
  seuilTrialAuto: 50,            // items importés pour déclencher trial Pro
  dureeTrial: 30,                // jours de trial Pro offerts
};

// --- PRICING ---
export const pricing = {
  mensuel: 4.99,                 // € / mois
  annuel: 34.99,                 // € / an
  economieAnnuel: 24.89,         // économie vs mensuel
  moisOfferts: 7,                // mois offerts avec l'annuel
};

// --- APIs EXTERNES ---
export const apis = {
  tmdb: {
    baseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
    cle: process.env.EXPO_PUBLIC_TMDB_KEY ?? '',
  },
  googleBooks: {
    baseUrl: 'https://www.googleapis.com/books/v1',
    cle: process.env.EXPO_PUBLIC_GOOGLE_BOOKS_KEY ?? '',
  },
  spotify: {
    baseUrl: 'https://api.spotify.com/v1',
    clientId: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID ?? '',
  },
  itunes: {
    baseUrl: 'https://itunes.apple.com/search',
  },
};

// --- SUPABASE ---
export const supabase = {
  url: process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
  clePublique: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',
};

// --- IA ---
export const ia = {
  anthropic: {
    modele: 'claude-haiku-4-5-20251001',
    maxTokens: 1000,
    cle: process.env.EXPO_PUBLIC_ANTHROPIC_KEY ?? '',
  },
};

// --- PERFORMANCES ---
export const performances = {
  timeoutApi: 5000,              // ms avant abandon d'un appel API
  splashDuree: 1800,             // ms durée du splash screen
  animationAjout: 350,           // ms scale pop ajout item
  animationBasculement: 900,     // ms shared element wishlist → vu
};

// --- APP ---
export const app = {
  nom: 'Vü',
  version: '1.0.0',
  locale: 'fr-FR',
};
