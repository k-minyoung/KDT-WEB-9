import { useContext } from "react";
import MyLangContext from "./store/lang-context";

export default function LangSelector() {
    const value = useContext(MyLangContext)

    return(
        <div>
             <h2>현재 선택된 언어 : {value.lang}</h2>
            <select value={value.lang} onChange={(e) => value.setLang(e.target.value)}>
                <option value='Korean'>Korean</option>
                <option value='English'>English</option>
            </select>
        </div>
    )
}
