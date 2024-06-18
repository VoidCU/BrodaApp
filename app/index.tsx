import React ,{ useEffect, useState } from 'react';
import { Text,View, StyleSheet, Dimensions, Image ,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import * as Font from 'expo-font';

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();


  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'CustomFont': require('../assets/fonts/PlaywritePT-VariableFont_wght.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <LinearGradient
      colors={['#5eddf0', '#65b6d8']}
      style={styles.container}
    >
      <View>
        <Text style={styles.welcomeText}>BRODA</Text>
      </View>
      <View style={styles.loginOptions}>
      <Button
        title="Login with Google"
        buttonStyle={styles.myButton}
        icon={
          <Image
          source={require('../assets/images/google.png')}
          style={styles.buttonImage}
        />
        }
        iconContainerStyle={styles.iconContainer}
        onPress={() => router.push('/infoScreen')}
      />
      <Button
        title="Login with Facebook"
        buttonStyle={styles.myButton}
        icon={
          <Image
          source={require('../assets/images/facebook.png')}
          style={styles.buttonImage}
        />
        }
        iconContainerStyle={styles.iconContainer}
        onPress={() => router.push('/infoScreen')}
      />
      <Button
        title="Login with Number"
        buttonStyle={styles.myButton}
        icon={
          <Icon
            name="phone"
            type="font-awesome"
            size={24}
            color="white"
            style={styles.myIcon}
          />
        }
        iconContainerStyle={styles.iconContainer}
        onPress={() => router.push('/infoScreen')}
      />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 180,
    fontFamily: 'CustomFont',
  },
  welcomeText: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'CustomFont',
  },
  myButton: {
    backgroundColor: 'black',
    width: Dimensions.get('window').width * 0.85,
    height: 50,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 30,
  },
  myIcon: {
    marginRight: 10,
  },
  loginOptions: {
    gap: 20,
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    marginRight: 10,
  },
});
