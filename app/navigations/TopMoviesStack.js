import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopMovies from '../screens/TopMovies'

const Stack = createStackNavigator();

export default function TopMoviesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="top-movies"
                component={TopMovies}
                options={{title:"Las Mejores Peliculas"}}
            />
        </Stack.Navigator>
    )
}