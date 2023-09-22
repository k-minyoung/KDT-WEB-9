import {useState} from 'react'

export default function ToggleFunc () {

    const [visible, setVisible] = useState(true)
    const [text , setText] = useState('사라져라')

    const Toggle = () => {
        if(visible) {
            setText("보여라")
            setVisible(false)
        }else {
            setText("사라져라")
            setVisible(true)
        }
    }

    return <>
        <button onClick={Toggle}>{text}</button>
        <h1>{visible && "안녕하세요"}</h1>
    </>
}