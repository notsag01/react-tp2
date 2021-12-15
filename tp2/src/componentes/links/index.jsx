import React, {useEffect, useState} from 'react';


const Categorias=[
    {id:1, nombre:"Oro", ruta:"/"},
    {id:2, nombre:"Plata", ruta:"/"},
    {id:3, nombre:"Acero", ruta:"/"},
    

];


const Links= () =>{
    const [categorias, setCategorias]=useState([]);
    useEffect(()=>{
        const promesaCat = new Promise((respuesta, rechazo)=>{
            respuesta(Categorias);
        });

        promesaCat.then((respuesta)=>{
            setCategorias(respuesta)
        },[]);
        console.log(categorias);
        return(
            <>
                {categorias.map((categorias)=>{
                    return(
                        <a href="{categorias.ruta}" key="{catergorias.id}"> <li> {categorias.nombre} </li> </a>
                    )
                })}
            </>
        )

        

    })
    return (
        <>
           
        </>
    )
}


export default Links





