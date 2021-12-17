import MokedItems from "../mock/index";
import {useState, useEffect} from "react"
import ItemsLista from "../itemLista/index";

const ItemContainer=()=>{
    const [items, setitem] = useState([])
    useEffect(() => {
        const itemPromesa=new Promise((res, rej)=>{
            res(MokedItems)
        })
        itemPromesa.then((res)=>{
            setitem(res)
        })
    }, [items])

    return <ItemsLista items={items}/>
}

export default ItemContainer;