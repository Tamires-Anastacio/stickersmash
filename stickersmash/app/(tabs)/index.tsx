import React from 'react';
import { Button, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Correção aqui
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0]); // Mostra a imagem selecionada
    } else {
      Alert.alert('Você não selecionou nenhuma imagem.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Selecionar Imagem" onPress={pickImageAsync} />
    </View>
  );
}
