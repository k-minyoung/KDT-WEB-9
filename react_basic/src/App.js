import LanguageSelector from "./14Context/LangSelector";
import MyContext, { LanguageProvider } from "./14Context/store/lang-context";
import { useState } from 'react'

function App() {

  // const [language,setLanguage] = useState('ko')
  return (
    <>
    <LanguageProvider>
      <LanguageSelector />
    </LanguageProvider>


        {/* <MyContext.Provider value={ {language : language, setLanguage : setLanguage} }> */}
            {/* <MyContext.Consumer>
                {value => {
                  return(
                    <div>
                        <h2>현재 선택된 언어 : {value.language}</h2>
                        <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                            <option value='ko'>한국어</option>
                            <option value='en'>영어</option>
                            <option value='jp'>일본어</option>
                        </select>
                    </div>
                  )
                }}
            </MyContext.Consumer> */}
            {/* <LanguageSelector /> */}
        {/* </MyContext.Provider> */}
    </>
  )
}

export default App;
