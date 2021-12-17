import Item from "../items/index";
import sytles from "./styles";



const ItemsLista=({items})=>(
    <>

        {items.map((item)=>{
            return <Item key={item.id} item={item} style={sytles}/>
        })}
    </>
    
    
    
)

    


export default ItemsLista;