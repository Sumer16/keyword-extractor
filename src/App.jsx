// Chakra UI
import { Container, Box } from '@chakra-ui/react'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box bg='teal.600' color='white' height='100vh' paddingTop='130px'>
      <Container maxWidth='3xl' centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
