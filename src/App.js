import './App.css';
import { VISUAL_LIST } from './config'
import { Grid, Box, Container, ChakraProvider, Input, Button, Center } from "@chakra-ui/react"
import VisualReport from './VisualReport';
import { useState } from 'react';

function App() {  
  const [ token, setToken ] = useState('')
  const [ isSubmitted, setSubmitted ] = useState(false)
  return (
    <ChakraProvider>
      <Container mt={5} alignItems='center' justifyContent='center'  maxW="md" minHeight='100vh' centerContent>
        {
          !isSubmitted ? (
            <Center>
              <Input mr={3} placeholder="Input Token" size="md" onChange={(e) => setToken(e.target.value)} />
              <Button onClick={() => setSubmitted(true)}>Submit</Button>
            </Center>
          ) : (
            <Grid mt={3} justifyContent='center' templateColumns="repeat(4, 1fr)" gap={6}>
              {
                VISUAL_LIST.map((visual) => (
                  <Box bg="gray.500" back w={300} h={300} key={visual.name}>
                    <VisualReport token={token} {...visual} />
                  </Box>
                ))
              }       
            </Grid>  
          )
        }
        
      </Container>
    </ChakraProvider>
  );
}

export default App;
