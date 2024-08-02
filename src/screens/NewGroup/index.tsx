import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  async function handleNew() {
    try {
      // trim para nao contabilizar os espaços 
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma')
      }
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch(error) {
      if (error instanceof AppError){
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.')
        console.error(error)
      }
    }
  }
  
  return (
    <Container>
      <Header showBackButton/>
      <Content>
        <Icon/>
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button 
         title="Criar"
         onPress={handleNew}
         style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}