import React, {useState} from 'react';
import {  View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';

import styles from '../style/mainStyle';


export default function Login({navigation}) {

  //inicia uma variável email com o state Null ou qualquer outro valor
  //e o segundo é o método que altera a variável
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //quando se utliza o navigation ele cria uma seta pra voltar uma tela
  //para isso não acontecer cria-se o código abaixo invés de se utilizar o 
  //navigation.navigate();
  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  //criação da função cadastrar
  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h3>Tela de Login</Text>
        <Input placeholder=' E-mail' 
              keyboardType='email-address'
              leftIcon={{type: 'font-awesome', name: 'envelope'}}
              onChengeText={value => setEmail(value)}
        />
        <Input placeholder=' Senha' 
              keyboardType='password'
              leftIcon={{type: 'font-awesome', name: 'lock'}}
              onChengeText={value => setPassword(value)}
              secureTextEntry={true}
        />
        <Button
                title="Login"
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                  marginTop: 10
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={() => entrar()}
        />
        <Button
                title="Cadastrar"
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                  marginTop: 5
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={() => cadastrar()}
         />
    </View>
  );
}


