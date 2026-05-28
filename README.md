# Vü — Journal culturel intime

## Comment lancer l'app

1. Ouvre PowerShell
2. Navigue dans le projet :
   cd C:\Users\laura\OneDrive\Documents\Vu\code\vu
3. Lance le serveur :
   npx expo start --host lan --clear
4. Appuie sur "w" pour ouvrir dans le navigateur
5. Ou scanne le QR code avec Expo Go sur ton téléphone

---

## Comment modifier une couleur

Fichier : src/theme.ts
Section : "COULEURS"
Change la valeur hex, elle se répercute partout automatiquement.

---

## Comment modifier un texte

- Textes de l'écran Accueil : app/(tabs)/index.tsx
- Labels des onglets : app/(tabs)/_layout.tsx
- Constantes produit (prix, limites) : src/config.ts

---

## Comment ajouter une page

1. Crée un fichier dans app/(tabs)/mapage.tsx
2. Copie ce modèle minimal :

   import { View, Text } from 'react-native';
   import { couleurs, typo } from '../../src/theme';

   export default function MaPage() {
     return (
       <View style={{ flex: 1, backgroundColor: couleurs.fondPrincipal }}>
         <Text style={{ fontFamily: typo.playfair, color: couleurs.encre }}>
           Ma page
         </Text>
       </View>
     );
   }

3. Ajoute l'onglet dans app/(tabs)/_layout.tsx

---

## Que faire en cas d'erreur

| Erreur | Solution |
|--------|----------|
| "Unable to resolve" | Vérifie le chemin d'import dans le fichier concerné |
| Page blanche | Ouvre F12 dans le navigateur, lis la console |
| Erreur rouge terminal | Copie-colle le message et demande à Claude |
| Fonts qui ne chargent pas | Arrête le serveur, relance avec --clear |
| Expo Go "something went wrong" | Vérifie que PC et téléphone sont sur le même Wi-Fi |

---

## Structure du projet

src/
  theme.ts        → couleurs, fonts, espacements
  config.ts       → constantes produit et APIs
  lib/
    supabase.ts   → connexion base de données cloud
    database.ts   → base de données locale SQLite
  features/       → un dossier par fonctionnalité (Session 3+)

app/
  _layout.tsx           → point d'entrée, chargement fonts
  (tabs)/
    _layout.tsx         → configuration tabbar
    index.tsx           → écran Accueil
    collection.tsx      → écran Collection (Session 3)
    capture.tsx         → écran Capture (Session 3)
    wishlist.tsx        → écran Wishlist (Session 3)
    profil.tsx          → écran Profil (Session 3)