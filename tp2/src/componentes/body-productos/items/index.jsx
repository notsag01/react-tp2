import React from "react"
import styles from "./styles";





const Item=({item})=>{
    return(
        <>
            <div className="contendor" style={styles} >
                <div>
                    <div style={{textAlign:"center"}}>
                        <img style={{ width:150, height:150, borderRadius:50, objectFit:"cover"} } src={item.imagen} alt=""/>
                    </div>
                    <h3> {item.nombre} </h3>
                    <h4> ${item.precio} </h4>                                  
                </div>
            </div>
        </>
    )

}


export default Item;