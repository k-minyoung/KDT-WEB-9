import { useOutletContext } from "react-router-dom"

export default function Comment() {

    const ctx = useOutletContext();
    console.log(ctx.comment);


    return (
        <div>
            {ctx.comment.map( (value,index)=> {
                return (
                    <div key={index}>{value.text}</div>
                )
            })}
        </div>
    )
}