// React
import { useState } from 'react' // Can also use Redux

// Chakra UI
import { Container, Box } from '@chakra-ui/react'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'
import KeywordModal from './components/KeywordsModal'

const App = () => {
  const [ keywords, setKeywords ] = useState([])
  const [ isOpen, setIsOpen ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const extractKeywords = async (text) => {
    setLoading(true)
    setIsOpen(true)

    const options = { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` // To import VITE ENV
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate them with commas \n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
        top_p: 1.0,
        presence_penalty: 0.0,
      })
    }

    try {
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)
      const json = response.json()
      const data = json.choices[0].text.trim()
      setKeywords(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg='teal.600' color='white' height='100vh' paddingTop='130px'>
      <Container maxWidth='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  )
}

export default App
