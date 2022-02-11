import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

const ItemFormulario = ({onAdd}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [data, setData]=useState({
        nombre:"",
        apellido:""
    })
    console.log(data)

    const onSubmit=(data,e)=>{
        console.log(data)

        setData({
            ...data,
            [e.target.name]: e.target.value,
        })

    
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
            
            <input type="submit" onClick={()=>{onAdd(data)}} />
        </form>
      </>
    )}
 
export default ItemFormulario;