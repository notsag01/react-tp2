



const Item=({item})=>{
    return(
        <>
            <div className="container" >
                <div className="row">
                    <h3> {item.nombre} </h3>
                    <h4> ${item.precio} </h4>
                    
                </div>
            </div>
        </>
    )

}


export default Item;