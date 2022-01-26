import React, {useState} from 'react';



function ItemsSearch() {
    
    const [search, setSearch]=useState("")
    console.log(search)

    const handleChangeInput=(e)=>{
        //console.log(e.target.value)

        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
        
    }

    const sendSearch=(e)=>{
        e.preventDefault()     
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <form onSubmit={sendSearch} className="d-flex justify-content-end mx-0 px-0">
                        <input className="d-block input-busqueda" type="text" placeholder="Buscar" name="busqueda" onChange={handleChangeInput}></input>
                    </form>
                </div>
                <div className="col-2">
                    <div className="d-flex justify-content-center">
                       <i className="fas fa-search fa-2x "></i>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default ItemsSearch;