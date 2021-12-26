import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MokedProductos from '../../mock';
import {ItemDetail} from "../itemDetail/index"


function ItemDetailContainer() {
    const [producto, setProductos]=useState({});

    const {prodId} =useParams();
    console.log(prodId)

    useEffect(()=>{
        const getProductos= new Promise((res)=>{
            setTimeout(()=>{
                const dato= MokedProductos.find((producto)=>producto.id===prodId);

                res(dato)
            },1000)
            
            getProductos.then((res)=>{
                setProductos(res)
            })
        })
    },[prodId]);
    

    return  <ItemDetail producto={producto}/>
}

export default ItemDetailContainer;