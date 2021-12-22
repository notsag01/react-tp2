import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import data from "../data/data"


function ItemListContainer() {
    const [items, setItems]=useState([])

    useEffect(()=>{
        const promesaData= new Promise((resolve)=>{
            resolve(data)
        })

        promesaData.then((res)=>setItems(res))
    },[])
    return (
        <div>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;