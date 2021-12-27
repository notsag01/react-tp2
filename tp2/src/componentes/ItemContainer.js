import React, {useState, useEffect} from 'react';
import ItemLista from "./ItemLista"
import {data} from "../mock/Mock"
import {useParams} from "react-router-dom"

function ItemContainer() {
    const [productos, setProductos]= useState({})
    const [loading, setLoading]= useState(true)

    const {catId}=useParams();

    useEffect(()=>{
        setLoading(true);
        const getProducto= new Promise((res)=>{
            setTimeout(()=>{
                const dato= catId ?
                 data.filter((item)=>item.cat2===catId)
                :data 
                res(dato)
            },1000)
        })
        getProducto.then((res)=>{
            setProductos(res);
        })
        .finally(()=>setLoading(false))
    },[catId])
    //console.log(productos)
    
    return loading ? (<h2> CARGANDO </h2>) : (
        <div>
            <ItemLista productos={productos}/>
        </div>
    );
    
}

export default ItemContainer;