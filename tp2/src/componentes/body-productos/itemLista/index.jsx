import Item from "../items/index";



const ItemsLista=({items})=>(
    <>

        {items.map((item)=>{
            return <Item key={item.id} item={item}/>
        })}
    </>
    
    
    
)

    


export default ItemsLista;