import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CarritoContext } from "../context/CarritoContext";
import ItemFormulario from './ItemFormulario';
import {getFirestore} from"../firebase/index";




function ItemWidgetContainer() {
    const {carrito, removeProducto, precioTotal}=useContext(CarritoContext)
    
     const[form, setform]=useState(false)
     

     const onAdd=(datos)=>{
         const db= getFirestore();
         const orederCollection=db.collection("order") 
        
         let detalleCompra={
            comprador: datos,
            items: carrito,
            date: Date.now(),
            total: precioTotal()
        }
         orederCollection.add(detalleCompra).then(({id})=>{
            alert(`Tu pedido tiene el código ${id}`);
         }).catch(err=>{
             alert(err)
         })
        console.log(detalleCompra)
        
     }
    
     
        return (
          <table>
            <caption>Our products</caption>
            <thead>
              <tr>
                <th> Nombre </th>
                <th> Precio </th>
                <th> Cantidad</th>
                <th></th>
              </tr>
              
            </thead>
            <tbody>
              {carrito.map(productos => (
                <tr key={productos.id}>
                  <td>{productos.nombre}</td>
                  <td></td>
                  <td><button id={productos.id} onClick={()=>removeProducto(productos.id)} >ELIMINAR</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )
    
}

export default ItemWidgetContainer;