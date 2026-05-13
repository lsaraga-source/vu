// ============================================================
// THEME VÜ — Tokens de direction artistique "Carnet contemporain"
// Pour modifier une couleur : change la valeur hex ici,
// elle se répercute partout dans l'app automatiquement.
// ============================================================

// --- COULEURS ---
export const couleurs = {
  // Fonds
  fondPrincipal: '#F4EFE5',      // crème vif — fond de toutes les pages
  fondCarte: '#EDE5D5',          // crème légèrement plus sombre pour les cartes

  // Textes
  encre: '#1A1815',              // texte principal, icônes, bordures fortes
  texteSecondaire: '#5A5650',    // texte muted, sous-titres
  texteTertiaire: '#ABA89F',     // texte faint, placeholders

  // Bordures
  bordure: '#DDD2BC',            // bordures subtiles des cards

  // Wishlist
  framboise: '#B83D5E',          // couleur signature wishlist

  // Pills par type de média (fond de la pill, texte toujours crème)
  pills: {
    film:       '#C13C5A',
    livre:      '#2D5F3F',
    album:      '#1A4A8A',
    serie:      '#B8861A',
    podcast:    '#5C3FA8',
    web:        '#7A5A38',
    concert:    '#8B2C2C',
    exposition: '#3D5A3E',
    spectacle:  '#5A3F2A',
  },
};

// --- TYPOGRAPHIE ---
export const typo = {
  // Familles
  playfair: 'PlayfairDisplay_500Medium_Italic', // titres, citations
  playfairBold: 'PlayfairDisplay_700Bold_Italic', // wordmark Vü
  inter: 'Inter_400Regular',                    // body, méta
  interMedium: 'Inter_500Medium',              // titres items, boutons
  interSemiBold: 'Inter_600SemiBold',          // pills

  // Tailles
  tailles: {
    wordmark: 26,      // Vü en haut des pages
    titreMois: 36,     // "Mai 2026"
    titreSection: 11,  // "RÉCEMMENT AJOUTÉS" uppercase
    corps: 13,         // texte standard
    meta: 11,          // informations secondaires
    pill: 9,           // labels type média
    citation: 16,      // citations Playfair italic
  },
};

// --- ESPACEMENTS ---
export const espacements = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// --- BORDER RADIUS ---
export const rayons = {
  cover: 2,    // coins des couvertures
  carte: 8,    // coins des cards
  cercle: 999, // FAB, boutons icônes circulaires
};

// --- COMPOSANTS ---
export const composants = {
  fab: {
    taille: 50,          // diamètre du bouton +
    fond: '#1A1815',     // encre
    icone: '#F4EFE5',    // crème
  },
  boutonSearch: {
    taille: 34,          // diamètre de la loupe
    bordure: 1.5,        // épaisseur du cercle
  },
  tabbar: {
  fond: '#F4EFE5',     // TOUJOURS opaque, jamais transparent
  hauteur: 60,
  },
}; 