import React,{useState,useRef} from 'react'


interface Props {
    name: string;
}
//컴포넌트 제작 방법2
const Types:React.FC<Props> = ({name}) => {//props , props.name
    const [count,setCount] = useState<number | string>(0)

    const myInput = useRef<HTMLInputElement>(null)

    return <>
        <h2>Hi {name}</h2>
        <input ref={myInput} />
    </>;
}

export default Types;


/*
//컴포넌트 제작 방법1
export default function Types({ name }: Props) {
    return (
        <>
            <h2>Hello {name}</h2>
        </>
    );
}
*/