import React, { useContext, useEffect, useState } from "react";
import { Text, HStack, Button, useToast, Box, VStack } from 'native-base'
import { UserContext } from "../contexts/UserContext";
interface DashboardProps {

}

export const Dashboard: React.FC<DashboardProps> = () => {

    const {goal} = useContext(UserContext)

    const [water, setWater] = useState<number>(0)
    const [cupSize,setCupSize] = useState<number>(200)

    const toast = useToast()

    const handleWater = () => {
        setWater(water + cupSize)

        toast.show({
            description: `Você bebeu ${cupSize}ml de água!`
        })
    }

    const changeCupSize = (size: number) => {
        setCupSize(size)
    }

    useEffect(()=> {
        if (water >= goal) {
            toast.show({
                description: "Você atingiu sua meta de água!",
                placement: "top"
            })
        }
    },[water])

    return (
    <VStack flex={1} width="100%" justifyContent="space-between" alignItems="center" p={4} my={30}>

<Text fontSize="sm">
                {' '} copo ded {cupSize}ml
            </Text>

            <VStack>

        <HStack alignItems="center" justifyContent="center">

            <Text fontSize="6xl">
                {water}
            </Text>

            <Text fontSize="xl">
                {' '}/ {goal} ml
            </Text>

        </HStack>

        <Button onPress={handleWater} mt={5}>
            Beber água
        </Button>

        </VStack>

        <Box mt={10}>
        <Button.Group>
            <Button onPress={()=> changeCupSize(200)} colorScheme="teal"> Copo americano </Button>
            <Button onPress={()=> changeCupSize(300)} colorScheme="teal"> Xícara </Button>
            <Button onPress={()=> changeCupSize(500)} colorScheme="teal"> Garrafa </Button>
        </Button.Group>
        </Box>

    </VStack>
    )
}
