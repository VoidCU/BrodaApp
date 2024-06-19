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
      colors={['#00FFFF', '#00BFFF']}
      className="flex flex-1 justify-center items-center gap-[180] "
    >
      <View>
        <Text className="text-[40px] color-white mb-20 font-['CustomFont']">BRODA</Text>
      </View>
      <View className="gap-y-[20]">
        <View>
        <Button
          title="Login with Google"
          buttonStyle={styles.myButton}
          className='bg-red-500'
          icon={
            <Image
              source={require('../assets/images/google.png')}
              className="w-[24px] h-[24px]"
            />
          }
          onPress={() => router.push('/infoScreen')}
        />
        </View>
        <View>
        <Button
          title="Login with Facebook"
          buttonStyle={styles.myButton}
          icon={
            <Image
              source={require('../assets/images/facebook.png')}
              className="w-[24px] h-[24px]"
            />
          }
          onPress={() => router.push('/infoScreen')}
        />
        </View>
        <View>
        <Button
          title="Login with Number"
          buttonStyle={styles.myButton}
          icon={
          <Icon
            name="phone"
            type="font-awesome"
            size={24}
            color="white"
            className="mr-2"
          />
          }
          onPress={() => router.push('/infoScreen')}
        />
        </View>
        
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
});
