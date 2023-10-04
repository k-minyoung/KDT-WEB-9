import {createContext, useState} from 'react'

const MyContext = createContext ({
    theme : '',
    setTheme : () => {},
})

export function ThemeProvider (props) {
    const [theme, setTheme] = useState('light')

    return <MyContext.Provider value={ { theme, setTheme } }>
        {props.children}
    </MyContext.Provider>
}

export default MyContext