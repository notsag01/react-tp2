



const Item=({item})=>{
    return(
        <>
            <div className="container" >
                <div className="row">
                    <h3> {item.nombre} </h3>
                    <p> {item.precio} </p>

                </div>
            </div>
        </>
    )

}


export default Item;