import React from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (err) {
      Alert.alert(err);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {'\n'}
            suas jogatinas {'\n'}
            facilmente
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          {
            loading
              ? <ActivityIndicator color={theme.colors.primary} />
              : <ButtonIcon
                title="Entrar com Discord"
                onPress={handleSignIn}
              />
          }
        </View>
      </View>
    </Background>
  );
}