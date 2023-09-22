import axios from "axios";
import { useState, useEffect } from "react";

export default function UserList () {
    const [users , setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
 
   useEffect( () => {
        //useEffect는 비동기함수를 직접적으로 지원하지 않음
        //비동기함수를 사용하려면 내부에 비동기함수를 정의하고 바로 호출
        const axiosUser = async () => {
            const result = await axios ({
                method: 'get',
                url : 'https://jsonplaceholder.typicode.com/users',
            })
            setUsers(result.data);
            setLoading(true)
        }
        axiosUser(); //이렇게 바로 실행

        return () => {
            console.log('연결 해제 완료')
        }
   },[])

   useEffect(() => {
    console.log('유저정보 업데이트',users.length)
   },[users])


    return( 
        <div>
            {loading ?  <ul>
                {users.map((user) => {
                    return <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                })}
            </ul> : <div>loading</div>}
           
        </div>
    )
}