import React from "react"
import styles from "../items/styles";



const Item=({item})=>{
    return(
        <>
            <div className="container" style={styles} >
                <div>
                    <h3> {item.nombre} </h3>
                    <h4> ${item.precio} </h4>                    
                </div>
            </div>
        </>
    )

}


export default Item;