import { View, Image } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputsTexto from '../components/inputsTexto';
import { useState} from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) => {
    console.log(newText);
  };
  <Image
  style={{width: '80%', height:80, marginBottom:30}}
  resizeMode ="contain"
  source={require('../../assets/facebook.png')}
  />

  return (
    <View style={styles.container}>
      <InputsTexto label='Digite seu nome' dica="Digite seu nome" />
      <InputsTexto valor={atualizaTexto} label='Digite seu CPF' dica="Digite seu CPF" />
      <InputsTexto label='Digite sua senha' dica="Digite sua senha" seguranca={true} />

      <Botao btn="entrar" cor='#000' src='home' />
      <Botao btn="excluir" cor='#f00' src='excluido' />
      <Botao btn="cadastrar" cor='#0f0' src='cadastrar' />
    </View>

  )};

