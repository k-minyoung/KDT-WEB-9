import { useForm } from 'react-hook-form'
import './HookFormPr.css'

export default function HookFormPr() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const onValid = (data) => {
        console.log('onValid', data);
    }

    console.log('errors',errors)


    return(
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type='text' {...register('name',{ 
                    required : '이름은 필수항목입니다'})}/>
                {errors.name?.message}
                <br />
                <input type='number' {...register('age', {
                    min : {message : '1이상의 숫자만 가능합니다' ,value : 1}
                })} />
                {errors.age?.message}
                <br />
                <button>submit</button>
            </form>
        </>
    )
}