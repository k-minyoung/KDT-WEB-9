import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, handleSubmit, formState: {errors}, watch } = useForm();
    
    //handleSubmit() : 두개의 함수를 받음, 하나는 유효할때 실행되는 함수(필수)
    //하나는 유효하지 않을때 실행되는 함수(선택)
    const onValid = (data) => {
        console.log('onValid', data);
    }

    // const onInValid = (err) => {
    //     console.log('onInValid', err);
    // }

    console.log('errors',errors)
    // console.log('watch',watch('username'))

    return(
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type='text' {...register('username' , {
                    required : '이름을 입력하세요',
                    minLength: { message : '최소 두글자 이상 입력하세요' , value : 2}})} />
                <span style={{color: 'red'}}>{errors.username?.message}</span>
                <br />
                <input type='text' {...register('email', {
                    required : '이메일을 입력하십쇼',validate : { useGmail : (v) => v.includes('gmail.com') || 'gmail로만 가입됩니다' }
                })}/>
                {errors.email?.message}
                <br />
                <input type='text' {...register('pw')}/>
                <br />
                <button>submit</button>
            </form>
        </>
    )
}