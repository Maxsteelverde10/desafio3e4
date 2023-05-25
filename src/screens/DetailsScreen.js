
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text>APERTE PARA VOLTAR</Text>
<Button
title="VOLTAR"
onPress={() => navigation.goBack()}
/>
</View>
);
};

export default DetailsScreen;