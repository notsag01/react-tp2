import MokedProductos from "../mock/index";
import {useState, useEffect} from "react"
import ItemsLista from "../itemLista/index";
import styles from "./styles"
import {useParams} from "react-router-dom"

const ItemContainer=()=>{
    const [items, setitem] = useState([])
    //console.log(useParams())
    const {catId}=useParams();
    console.log(catId)

    useEffect(() => {
        const itemPromesa=new Promise((res, rej)=>{
            
            setTimeout(() => {
                const datos=catId ? MokedProductos.filter((item)=> item.cat2===catId):MokedProductos

                res(datos)                
            },1000);
        })
        itemPromesa.then((res)=>{
            setitem(res)
        })
    }, [items])

    return <ItemsLista items={items} styles={styles}/>
}

export default ItemContainer;