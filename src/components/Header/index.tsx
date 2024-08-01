import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Logo } from './styles'
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}
export function Header({ showBackButton = false}: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    // voltando para tela inicial
    navigation.navigate('groups')
  }
  return (
    <Container>
      { 
        showBackButton &&
        <BackButton onPress={handleGoBack}>
        <BackIcon/>
        </BackButton>
      }
     

      <Logo source={logoImg} />
    </Container>
  )
}