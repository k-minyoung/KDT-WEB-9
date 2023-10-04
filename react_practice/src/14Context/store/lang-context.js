import {createContext, useState} from 'react'

const MyLangContext = createContext ({
    lang : '',
    setLang : () => {},
})

export function LangProvider (props) {
    const [lang, setLang] = useState('Korean')

    return <MyLangContext.Provider value={ { lang, setLang } }>
        {props.children}
    </MyLangContext.Provider>
}

export default MyLangContext