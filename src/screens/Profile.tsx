import React, { useContext, useState } from "react";
import { Box, Divider, Text } from "native-base";
import { SafeAreaView } from "react-native";
import { Avatar,Slider } from 'native-base';
import { UserContext } from "../contexts/UserContext";

interface IProfile {

}

export const Profile: React.FC<IProfile> = () => {

const {goal,setGoal,user} = useContext(UserContext)

    return (
        <SafeAreaView style={{ flex: 1 }}>
           
           <Avatar bg="purple.500" alignSelf="center" size="2xl" source={{
        uri: user?.photo || undefined
      }}>
            {user?.name.substring(0,1)}
        </Avatar>

      <Text fontSize="xl" textAlign="center" >
        {user?.name}
        </Text>

      <Divider my={10}/>

        <Box mx={20}>
      <Text fontSize='xl' textAlign='center' mt={4}>Meta de água</Text>
      <Text fontSize='xl' textAlign='center' mt={4}>{goal}ml</Text>

        <Slider defaultValue={goal}
                minValue={0}
                maxValue={4000}
                value={goal}
                accessibilityLabel="hello world"
                onChange={(value) => setGoal(value)}
                step={100}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
        </Box>

        </SafeAreaView>

    )
}
