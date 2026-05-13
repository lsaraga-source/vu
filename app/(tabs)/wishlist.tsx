// Onglet Wishlist — à développer en Session 3
import { View, Text } from 'react-native';
import { couleurs, typo } from '../../src/theme';

export default function Wishlist() {
  return (
    <View style={{ flex: 1, backgroundColor: couleurs.fondPrincipal, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: typo.playfair, fontSize: 24, color: couleurs.framboise }}>
        Wishlist
      </Text>
    </View>
  );
}
