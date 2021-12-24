import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MokedProductos from '../../mock';
import itemDetail from "../itemDetail/index"


function ItemDetailContainer() {
    const [productos, setProductos]=useState({});

    const prodId=useParams()

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
    },[productos])

    return (
        <div>
            <itemDetail productos={productos}/>
        </div>
    );
}

export default ItemDetailContainer;