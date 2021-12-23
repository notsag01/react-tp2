import React, {useEffect, useState} from 'react';
import {styles} from "./estilos";
import { Link } from "react-router-dom";


const Categorias=[
    {id:1, nombre:"ORO", ruta:"/categoria/ORO"},
    {id:2, nombre:"PLATA", ruta:"/categoria/PLATA"},
    {id:3, nombre:"ACERO", ruta:"/categoria/ACERO"},    
];


const Navegador= () =>{
    const [categorias, setCategorias]=useState([]);
    useEffect(()=>{
        const promesaCat = new Promise((respuesta, rechazo)=>{
            respuesta(Categorias);
        });

        promesaCat.then((respuesta)=>{
            setCategorias(respuesta)
        },[]);
        //console.log(categorias);

    })
    return(
        <>
            {categorias.map((categorias)=>{
                return(
                    <Link to={categorias.ruta} key="{catergorias.id}"> <li style={styles.li}> {categorias.nombre} </li> </Link>
                )
            })}
        </>
    )
}


export default Navegador





