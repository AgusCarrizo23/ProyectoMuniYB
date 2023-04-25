import React from "react"
import { Box, Container, FormControl, Button, Flex, Text } from '@chakra-ui/react'




const List = () => {
    return (
        <Flex flexDirection="column" >
            <Box>
                <FormControl>
                    <input type="text" placeholder="Tarea"></input>
                    <input type="text" placeholder="Descripcion"></input>
                    <Button type="submit"> agregar todo</Button>
                </FormControl>
            </Box>
            <Flex display="flex" alignItems="center" justifyContent="between" flexDirection="row">
                <Box>
                    <Text> lista de tareas</Text>
                    <Button>Desechar</Button>
                </Box>
            </Flex>
        </Flex>
    )
}

export default List