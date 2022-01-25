import React, {useState, useEffect} from 'react';
import ItemLista from "./ItemLista"
/* import data from "../mock/Mock" */
import {useParams} from "react-router-dom" 
import {getFirestore} from"../firebase/index"

//console.log(data)

function ItemContainer() {
    const [productos, setProductos]= useState({})
    const [loading, setLoading]= useState(true)

     const {catId}=useParams();
    

    /* useEffect(()=>{
        setLoading(true);
        const getProductos= new Promise((res)=>{
            setTimeout(()=>{
                const dato= catId ?
                 data.filter((producto) => producto.cat2 === catId)                 
                :data; 
                res(dato)
                //console.log(data)
            },1000)
        })
        getProductos.then((res)=>{
            setProductos(res);
        })
        .finally(()=>setLoading(false))
    },[catId]) */
    //console.log(productos)

    useEffect(()=>{
        const bd= getFirestore()
        const itemCollection= bd.collection('data');
        itemCollection.get().then(value=>{
            let datos= value.docs.map(e=>{
               return{...e.data(), id:e.id}
            });            
                const auxDatos= catId?
                datos.filter((producto)=>producto.cat2===catId)
                :datos;
                setProductos(auxDatos)                            
        }).finally(()=>setLoading(false))
    },[catId])
    
    return loading ? (
        <div className="row justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>) : (
        <div>
            <ItemLista productos={productos}/>
        </div>
    );    
}

export default ItemContainer;