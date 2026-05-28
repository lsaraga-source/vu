// Configuration de la tabbar 5 onglets de Vü
import { Tabs } from 'expo-router';
import { couleurs, typo, composants } from '../../src/theme';
import { Text, View } from 'react-native';

// Icône texte simple pour chaque onglet
function IconeOnglet({ label, actif }: { label: string; actif: boolean }) {
  return (
    <Text style={{
      fontFamily: typo.inter,
      fontSize: 10,
      color: actif ? couleurs.encre : couleurs.texteTertiaire,
      marginTop: 2,
    }}>
      {label}
    </Text>
  );
}

// Bouton + central (FAB)
function FAB({ actif }: { actif: boolean }) {
  return (
    <View style={{
      width: composants.fab.taille,
      height: composants.fab.taille,
      borderRadius: 25,
      backgroundColor: composants.fab.fond,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    }}>
      <Text style={{
        color: composants.fab.icone,
        fontSize: 24,
        lineHeight: 26,
      }}>+</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: composants.tabbar.fond,
          borderTopColor: couleurs.bordure,
          borderTopWidth: 0.5,
          height: composants.tabbar.hauteur,
        },
        tabBarActiveTintColor: couleurs.encre,
        tabBarInactiveTintColor: couleurs.texteTertiaire,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <IconeOnglet label="Accueil" actif={focused} />,
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          tabBarIcon: ({ focused }) => <IconeOnglet label="Collection" actif={focused} />,
        }}
      />
      <Tabs.Screen
        name="capture"
        options={{
          tabBarIcon: ({ focused }) => <FAB actif={focused} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ focused }) => <IconeOnglet label="Wishlist" actif={focused} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          tabBarIcon: ({ focused }) => <IconeOnglet label="Moi" actif={focused} />,
        }}
      />
    </Tabs>
  );
}