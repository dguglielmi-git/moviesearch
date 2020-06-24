import React, {useState} from 'react'

import MyContext from './MyContext'


export default function MyProvider({children}) {
   const [num, setNum] = useState(0);
   

        return (
            <MyContext.Provider
                value={{
                   num,
                   setNum
                }}
            >
                {children}
            </MyContext.Provider>
        );
    }
