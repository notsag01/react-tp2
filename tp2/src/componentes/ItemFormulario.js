import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

const ItemFormulario = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit=(data)=>{
        console.log(data)
    }
  
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            {...register("nombre",
                { required: true })} />
                {errors.nombre?.type === 'required' && "First name is required"}
            
            <input 
            {...register("apellido", 
                { required: true })} />
                {errors.apellido && "Last name is required"}
            
            <input type="submit" />
        </form>
      </>
    )}
 
export default ItemFormulario;