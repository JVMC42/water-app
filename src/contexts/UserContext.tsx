import React,{ createContext,useState } from 'react';
import { IUser } from '../types/UserInterface';

interface IUserContext {
    user?: IUser;
    goal: number;
    setGoal: React.Dispatch<React.SetStateAction<number>>
}

const GOAL = 2000
const USER = {
    name: "Mario Rodriguez",
    photo: "https://avatars.githubusercontent.com/u/101017414?v=4"
}

export const UserContext = createContext<IUserContext>({
goal: GOAL,
setGoal: () => {},
user: USER
})

interface IUserProvider {
    children: React.ReactNode
}

export const UserProvider: React.FC<IUserProvider> = ({children}) => {

    const [user,setUser] = useState<IUser>(USER)
    const [goal,setGoal] = useState<number>(GOAL)

    return(
        <UserContext.Provider value={{goal,setGoal,user}}>
            {children}
        </UserContext.Provider>
    )
}