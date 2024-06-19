import React,{useEffect,useState} from 'react';
import { Text, View, TouchableOpacity,ActivityIndicator } from 'react-native';
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
    <View
      className="flex flex-1 justify-center items-center p-[20] bg-black "
    >
      <View  className='align-start'>
        <Text className='text-[40px] color-[#5eddf0] font-["CustomFont"]'>BRODA</Text>
        <Text className='text-[24px] color-white font-["CustomFont"]'>Welcome to Broda</Text>
        <Text className='text-[14px] color-white mb-[30]'>Please follow these rules:</Text>
        <Text className='text-[20px] color-white font-bold'>Be yourself.</Text>
        <Text className='text-[14px] color-white mb-[30]'>Please use your real photos and age.</Text>
        <Text className='text-[20px] color-white font-bold'>Stay safe</Text>
        <Text className='text-[14px] color-white mb-[30]'>Don't share personal and sensitive information.</Text>
        <Text className='text-[20px] color-white font-bold'>Encourage good behaviour</Text>
        <Text className='text-[14px] color-white mb-[30]'>Respect others and treat them as you would like to be treated. Report any bad behaviour.</Text>
      </View>
      <TouchableOpacity onPress={() => router.push('(tabs)/home')} className="mt-[20] w-[80%]" >
        <LinearGradient
          colors={['#5eddf0', '#65b6d8']}
          className="p-[15] rounded-[25px] items-center justify-center"
        >
          <Text className="text-[18] color-white font-bold">I Agree</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}


