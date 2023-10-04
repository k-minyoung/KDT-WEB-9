import { createContext,useState } from 'react'

//Context생성
//createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
    language : '', //타입 선언, language의 타입은 문자열이란 뜻
    setLanguage: () => {}, //setLanguage는 함수 형태에요
});

//Provider
export function LanguageProvider ({children}) {
    const [ language, setLanguage] = useState('jp');

    return <MyContext.Provider value={{ language, setLanguage }}>
        {children}
    </MyContext.Provider>
}

export default MyContext