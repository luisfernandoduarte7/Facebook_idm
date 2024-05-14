import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
// importando o css de outro arquivo
import { styles } from '../css/botaoStyle';
// importando a biblioteca de rotas
import { router } from 'expo-router';

export default function Botao({ btn, cor, src }) {
    //verifica se o botão foi presionado
    const [isPressed, setIsPressed] = useState(false);

    //Função para criar o efeito de ckick e navegar para outra tela
    const handlePress = () => {
        setIsPressed(!isPressed);
        router.navigate(src);
    };


    return (
        //estrutura para criar o objeto botão
        <TouchableOpacity
            style={[styles.button, { backgroundColor: cor }, isPressed ? styles.buttonPressed : null]}
            onPress={handlePress}
        >
            {/* texto do botão {btn} atributo que receberá o valor do botão*/}
            <Text style={styles.buttonText}>{btn}</Text>
        </TouchableOpacity>
    );
}