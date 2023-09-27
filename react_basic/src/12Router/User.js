import { Link,useSearchParams } from 'react-router-dom'

//가상의 데이터 (홍길동 이몽룡 임꺽정)
export const users = [
    {
        id : 1,
        name : '홍길동',
        comment : [
            {
                text : '안녕하세요'
            }
        ]
    },
    {
        id : 2,
        name : '이몽룡',
        comment : [
            {
                text : '반갑습니다'
            },
            {
                text : '반갑다고요'
            }
        ]
    },
    {
        id : 3,
        name : '임꺽정',
        comment : [
            {
                text : '집에가고싶습니다',
            }
        ]
    }
];

export default function User () {
    //searchParams는 쿼리스트링 값을 가져오는것
    //setSearchParams는 쿼리스트링 값을 할당하는 것
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('mode'))
    // setTimeout(()=> {
    //     setSearchParams({ mode : 'Light'})
    // },2000)

    return(
     <div>
        <ul>
            {users.map((value)=> {
                return(
                    <li key={value.id}>
                       <Link to={`/user/${value.id}`}>
                        {value.name}
                        </Link>
                    </li>
                )
            }   )}
        </ul>
    </div>
    )
};