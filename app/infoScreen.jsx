import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default function InfoScreen() {
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
      colors={['#000000', '#000000']}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>BRODA</Text>
        <Text style={styles.subtitle}>Welcome to Broda</Text>
        <Text style={styles.subtext}>Please follow these rules:</Text>
        <Text style={styles.text}>Be yourself.</Text>
        <Text style={styles.subtext}>Please use your real photos and age.</Text>
        <Text style={styles.text}>Stay safe</Text>
        <Text style={styles.subtext}>Don't share personal and sensitive information.</Text>
        <Text style={styles.text}>Encourage good behaviour</Text>
        <Text style={styles.subtext}>Respect others and treat them as you would like to be treated. Report any bad behaviour.</Text>
      </View>
      <TouchableOpacity onPress={() => router.push('(tabs)/home')} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#5eddf0', '#65b6d8']}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>I Agree</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000',
    
  },
  textContainer: {
    alignItems: 'flex-start',
    
  },
  title: {
    fontSize: 40,
    color: '#5eddf0',
    fontFamily: 'CustomFont',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'CustomFont',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.85,
    borderRadius: 25,
  },
  buttonGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  subtext:{
    fontSize: 14,
    color: 'white',
    marginBottom: 30,
  }
});
