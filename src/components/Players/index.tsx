import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separa os times"
      />
    </Container>
  )
}