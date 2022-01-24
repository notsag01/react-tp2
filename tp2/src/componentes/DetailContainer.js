import React, {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail"
//import data from "../mock/Mock"
import {useParams} from "react-router-dom"
import {getFirestore} from"../firebase/index"


//console.log(data)

function ItemDetailContainer() {
    const [producto, setProducto]= useState({})
    const [loading, setLoading]= useState(true)

    const {itemId}=useParams();
    //console.log(itemId)

    /* useEffect(()=>{
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
    },[itemId]) */
    //console.log(producto)

    useEffect(()=>{
        const bd= getFirestore()
        const itemCollection= bd.collection('data');
        itemCollection.get().then(value=>{
            let datos= value.docs.map(e=>{
               return{...e.data(), id:e.id}
            });

            const auxDatos=datos.find((producto)=>producto.id===itemId)
            //console.log(auxDatos)
            
            setProducto(auxDatos)
            
        }).finally(()=>setLoading(false))
    },[itemId])
    
    return loading ? (<h2> CARGANDO </h2>) : (
        <div>
            <ItemDetail {...producto}/>
        </div>
    );    
}

export default ItemDetailContainer;