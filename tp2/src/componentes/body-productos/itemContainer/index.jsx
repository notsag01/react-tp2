import MokedProductos from "../mock/index";
import {useState, useEffect} from "react"
import ItemsLista from "../itemLista/index";
import styles from "./styles"

const ItemContainer=()=>{
    const [items, setitem] = useState([])
    useEffect(() => {
        const itemPromesa=new Promise((res, rej)=>{
            
            setTimeout(() => {
                res(MokedProductos)                
            },3000);
        })
        itemPromesa.then((res)=>{
            setitem(res)
        })
    }, [items])

    return <ItemsLista items={items} styles={styles}/>
}

export default ItemContainer;