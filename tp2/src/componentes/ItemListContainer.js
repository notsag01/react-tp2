import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import data from "../data/data"


function ItemListContainer() {
    const [items, setItems]=useState([])

    return (
        <div>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;