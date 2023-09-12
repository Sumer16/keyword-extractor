// Chakra UI
import { Container, Box } from '@chakra-ui/react'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'

const App = () => {

  const extractKeywords = (text) => {
    console.log(text)
  }

  return (
    <Box bg='teal.600' color='white' height='100vh' paddingTop='130px'>
      <Container maxWidth='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
