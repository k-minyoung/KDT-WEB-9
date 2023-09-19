import book from './XL.jpg'

function FunctionPr (props) {

    return<>
        <div className='box'>
            <div className='title'>이번주 베스트셀러</div>
            <div className='img'>
                <img src={book} width={200} alt="책사진"></img>
            </div>    
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
            <h4>{props.price}</h4>
            <h4>{props.type}</h4>
        </div>
    </>
}
export default FunctionPr;