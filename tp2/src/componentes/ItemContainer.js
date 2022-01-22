import React, {useState, useEffect} from 'react';
import ItemLista from "./ItemLista"
/* import data from "../mock/Mock" */
/* import {useParams} from "react-router-dom" */
import {getFirestore} from"../firebase/index"

//console.log(data)

function ItemContainer() {
    const [productos, setProductos]= useState({})
    const [loading, setLoading]= useState(true)

    /* const {catId}=useParams(); */
    //console.log(catId)

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
        const db= getFirestore()
        const dataColletion=db.collection('data')
        dataColletion.get().then(value=>{
            let datos=value.docs.map((e)=> {
                 return{...e.data, id: e.id};
                });
                //console.log(datos)
                setProductos(datos)
            })
            .finally(()=>setLoading(false))
            
    })
    
    return loading ? (<h2> CARGANDO </h2>) : (
        <div>
            <ItemLista productos={productos}/>
        </div>
    );    
}

export default ItemContainer;