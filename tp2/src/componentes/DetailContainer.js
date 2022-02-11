import React, {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {getFirestore} from"../firebase/index"


function ItemDetailContainer() {
    const [producto, setProducto]= useState({})
    const [loading, setLoading]= useState(true)

    const {itemId}=useParams();

    useEffect(()=>{
        const bd= getFirestore()
        const itemCollection= bd.collection('data');
        itemCollection.get().then(value=>{
            let datos= value.docs.map(e=>{
               return{...e.data(), id:e.id}
            });

            const auxDatos=datos.find((producto)=>producto.id===itemId)
            
            setProducto(auxDatos)
            
        }).finally(()=>setLoading(false))
    },[itemId])
    
    return loading ? (
    <div className="row justify-content-center">
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div>
    </div>) : (
        <div>
            <ItemDetail {...producto}/>
        </div>
    );    
}

export default ItemDetailContainer;