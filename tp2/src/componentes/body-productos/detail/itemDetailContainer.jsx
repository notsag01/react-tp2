import { useEffect, useState  } from "react";
import MokedProductos from "../mock/index"
import {useParams} from "react-router-dom"
import ItemDetail from "./itemDetail"


const ItemDetailContainer=()=>{
    const [productos, setProductos]=useState([])

    const {itemId}=useParams()
    console.log(itemId)

    useEffect(()=>{
        const getProductos=new Promise((res)=>{
            setTimeout(()=>{
                const datos= MokedProductos.find((item)=>item.id===itemId);
                    res(datos)
            },1000);            
        })

        getProductos.them((res)=>setProductos(res))
    },[itemId]);

    return <ItemDetail {...productos}/>

}





export default ItemDetailContainer