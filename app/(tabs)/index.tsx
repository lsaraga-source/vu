// Écran Accueil — DA C "Carnet contemporain"
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { couleurs, typo, espacements, rayons, composants } from '../../src/theme';

// Données factices pour tester le rendu
const itemsFactices = [
  {
    id: '1',
    titre: 'Anora',
    createur: 'Sean Baker',
    type: 'film' as const,
    statut: 'wishlist',
    annee: 2024,
  },
  {
    id: '2',
    titre: 'La Volonté',
    createur: 'Mathieu Vadepied',
    type: 'livre' as const,
    statut: 'consumed',
    note: 4.5,
    annee: 2024,
  },
  {
    id: '3',
    titre: 'Brat',
    createur: 'Charli XCX',
    type: 'album' as const,
    statut: 'consumed',
    note: 5,
    annee: 2024,
  },
];

// Affiche les étoiles de notation
function Etoiles({ note }: { note: number }) {
  const etoiles = [];
  for (let i = 1; i <= 5; i++) {
    etoiles.push(
      <Text key={i} style={{
        fontSize: 14,
        color: couleurs.encre,
        letterSpacing: 2,
      }}>
        {i <= note ? '★' : '☆'}
      </Text>
    );
  }
  return <View style={{ flexDirection: 'row' }}>{etoiles}</View>;
}

// Pill colorée selon le type de média
function PillType({ type }: { type: keyof typeof couleurs.pills }) {
  return (
    <View style={{
      backgroundColor: couleurs.pills[type],
      borderRadius: 4,
      paddingHorizontal: 6,
      paddingVertical: 2,
      alignSelf: 'flex-start',
    }}>
      <Text style={{
        fontFamily: typo.interSemiBold,
        fontSize: typo.tailles.pill,
        color: couleurs.fondPrincipal,
        textTransform: 'uppercase',
        letterSpacing: 0.06 * 9,
      }}>
        {type}
      </Text>
    </View>
  );
}

// Carte d'un item dans la section "Récemment ajoutés"
function CarteItem({ item }: { item: typeof itemsFactices[0] }) {
  return (
    <View style={{
      backgroundColor: couleurs.fondCarte,
      borderRadius: rayons.carte,
      borderWidth: 0.5,
      borderColor: `rgba(26,24,21,0.15)`,
      padding: espacements.md,
      marginBottom: espacements.sm,
      flexDirection: 'row',
      alignItems: 'center',
      gap: espacements.md,
    }}>
      {/* Cover placeholder avec gradient simulé */}
      <View style={{
        width: 48,
        height: 64,
        borderRadius: rayons.cover,
        backgroundColor: couleurs.pills[item.type as keyof typeof couleurs.pills],
        opacity: 0.7,
      }} />

      {/* Infos */}
      <View style={{ flex: 1, gap: espacements.xs }}>
        <PillType type={item.type as keyof typeof couleurs.pills} />
        <Text style={{
          fontFamily: typo.interMedium,
          fontSize: 15,
          color: couleurs.encre,
        }}>
          {item.titre}
        </Text>
        <Text style={{
          fontFamily: typo.inter,
          fontSize: 12,
          color: couleurs.texteSecondaire,
        }}>
          {item.createur} · {item.annee}
        </Text>

        {/* Note ou Wishlist selon statut */}
        {item.statut === 'wishlist' ? (
          <Text style={{
            fontFamily: typo.playfair,
            fontSize: 15,
            color: couleurs.framboise,
            textDecorationLine: 'underline',
          }}>
            Wishlist
          </Text>
        ) : item.note ? (
          <Etoiles note={item.note} />
        ) : null}
      </View>
    </View>
  );
}

export default function Accueil() {
  const maintenant = new Date();
  const mois = maintenant.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const moisAffiche = mois.charAt(0).toUpperCase() + mois.slice(1);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: couleurs.fondPrincipal }}
      contentContainerStyle={{ paddingBottom: espacements.xxl }}
    >
      {/* Header : Wordmark + Loupe */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: espacements.lg,
        paddingTop: 56,
        paddingBottom: espacements.md,
      }}>
        {/* Wordmark Vü */}
        <Text style={{
          fontFamily: typo.playfairBold,
          fontSize: typo.tailles.wordmark,
          color: couleurs.encre,
          fontStyle: 'italic',
        }}>
          Vü
        </Text>

        {/* Bouton search circulaire 34px */}
        <TouchableOpacity style={{
          width: composants.boutonSearch.taille,
          height: composants.boutonSearch.taille,
          borderRadius: composants.boutonSearch.taille / 2,
          borderWidth: composants.boutonSearch.bordure,
          borderColor: couleurs.encre,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 16 }}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Titre mois */}
      <View style={{ paddingHorizontal: espacements.lg, marginBottom: espacements.lg }}>
        <Text style={{
          fontFamily: typo.playfair,
          fontSize: typo.tailles.titreMois,
          color: couleurs.encre,
          fontStyle: 'italic',
        }}>
          {moisAffiche}
        </Text>
        <Text style={{
          fontFamily: typo.interMedium,
          fontSize: typo.tailles.titreSection,
          color: couleurs.texteSecondaire,
          textTransform: 'uppercase',
          letterSpacing: 0.1 * 11,
          marginTop: espacements.xs,
        }}>
          Votre journal culturel
        </Text>
      </View>

      {/* Section Récemment ajoutés */}
      <View style={{ paddingHorizontal: espacements.lg }}>
        <Text style={{
          fontFamily: typo.interMedium,
          fontSize: typo.tailles.titreSection,
          color: couleurs.texteSecondaire,
          textTransform: 'uppercase',
          letterSpacing: 0.1 * 11,
          marginBottom: espacements.md,
        }}>
          Récemment ajoutés
        </Text>

        {itemsFactices.map((item) => (
          <CarteItem key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
