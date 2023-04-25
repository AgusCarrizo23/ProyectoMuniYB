import React from 'react'
import List from './componentes/taskList'
import { ChakraProvider } from '@chakra-ui/react'

import './App.css'

function App() {
 

  return (
    <ChakraProvider>
    <List></List>


    
    </ChakraProvider>
  )
}

export default App
