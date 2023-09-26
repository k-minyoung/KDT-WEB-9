import { useState } from 'react'
import styled from 'styled-components'




export default function StyledComponentPr1() {
    const [bcolor, setBcolor] = useState ('blue')
    const [color, setColor] = useState ('white')

    const _Btn = styled.button`
    background-color: ${bcolor};
    color: ${color};
`

    function onclick () {
        bcolor === "blue" ? setBcolor('red') : setBcolor('blue')
        color === "white" ? setColor('black') : setColor('white')
    }

    return(
        <div>   
            <_Btn onClick={onclick}>색상변경!</_Btn>
        </div>
    )
}
