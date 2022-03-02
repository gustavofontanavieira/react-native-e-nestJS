import React, {useState} from 'react';
import {  View, KeyboardAvoidingView, Platform, StyleSheet  } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Input } from 'react-native-elements/dist/input/Input';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';


import styles from '../style/mainStyle';


export default function Cadastro({navigation}) {

    
  //inicia uma variável email com o state Null ou qualquer outro valor
  //e o segundo é o método que altera a variável
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [numero, setNumero] = useState(null);
  const [isSelected, setSelected] = useState(false)

  //criação da validação
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorNumero, setErrorNumero] = useState(null);


  //salvar dados colocados no INPUT
  let cpfField = null
  let telefoneField = null

    const validar = () => {
        let error = false;
    
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ( !re.test(String(email).toLowerCase()) ) {
            setErrorEmail('Preencha seu Email corretamente')
            error = true;
        }
        if ( !cpfField.isValid() ) {
            setErrorCpf('Preencha seu CPF Corretamente')
            error = true;
        }
        if (  !telefoneField.isValid() ){
            setErrorNumero('Preencha seu telefone corretamente')
            error = true;
        }
        return !error;
    }

    /* criação da função salvar */
    const salvar = () => {
        if(validar()) {
            console.log('salvou');
        }
    }

  return (
    <KeyboardAvoidingView 
      keyboardVerticalOffset={90}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer] } >
      <ScrollView style={{width: "100%"}}>
      <Text h3>Cadastre-se</Text>
        <Input placeholder=' E-mail' 
              keyboardType='email-address'
              onChangeText={value => { 
                  setEmail(value),
                  setErrorEmail(null)
                }}
        />
        <Text style={styles.errorMessage}>{errorEmail}</Text>

        <Input placeholder=' Nome' 
              keyboardType='name'
              onChangeText={value => setNome(value)}
        />
        <Text style={styles.errorMessage}>{errorNome}</Text>

       {/*  <Input placeholder=' CPF' 
              keyboardType='number-pad'
              onChangeText={value => {
                  setCpf(value),
                  setErrorCpf(null)
                }}
              errorMessage={errorCpf}
        /> */}

      <View style={styles.containerMask}>
        <TextInputMask
             placeholder="CPF"
             type={'cpf'}
             value={cpf}
             onChangeText={value => {
               setCpf(value)
               setErrorCpf(null)
             }}
             keyboardType="number-pad"
             returnKeyType="done"      
             style={styles.maskedInput}
             ref={(ref) => cpfField = ref} 
        />
      </View>
      <Text style={styles.errorMessage}>{errorCpf}</Text>
        
{/* 
        <Input placeholder=' Telefone' 
              keyboardType='number-pad'
              onChangeText={value => setNumero(value)}
              errorMessage={errorNumero}
        />
 */}
        <View style={styles.containerMask}>
            <TextInputMask
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}
                style={styles.maskedInput}
                placeholder="(DDD) Telefone"
                value={numero}
                onChangeText={value => {
                    setNumero(value),
                    setErrorNumero(null)
                }}
                returnKeyType='done'
                keyboardType='number-pad'
                ref={(ref) => telefoneField = ref} 
            />
        </View>
        <Text style={styles.errorMessage}>{errorNumero}</Text>

        <CheckBox
            title="Eu aceito os termos de uso"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="red"   
            checked={isSelected}        
            onPress={() => { setSelected(!isSelected)}}
            />


        <Button
                title="Salvar"
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: "25%",
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={() => salvar()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    width: "100%",
    marginTop: 10
  }
})


