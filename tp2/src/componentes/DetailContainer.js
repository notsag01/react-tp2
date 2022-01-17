import React, {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail"
import data from "../mock/Mock"
import {useParams} from "react-router-dom"

//console.log(data)

function ItemDetailContainer() {
    const [producto, setProducto]= useState({})
    const [loading, setLoading]= useState(true)

    const {itemId}=useParams();
    //console.log(itemId)

    useEffect(()=>{
        setLoading(true);
        const getProducto= new Promise((res)=>{
            setTimeout(()=>{
                const dato =data.find((producto) => producto.id === itemId);                                 
                res(dato)
                //console.log(dato)
            },1000)
        })
        getProducto.then((res)=>{
            setProducto(res);
        })
        .finally(()=>setLoading(false))
    },[itemId])
    //console.log(producto)
    
    return loading ? (<h2> CARGANDO </h2>) : (
        <div>
            <ItemDetail {...producto}/>
        </div>
    );    
}

export default ItemDetailContainer;