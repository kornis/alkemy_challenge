import React from 'react';


const ListadoRegistros = (props) => {
    return(
        <>
        <h3></h3>
            <ul>
               { props.data.data.map((value, i) => {
                   return(<li key={i+value}>{value.movement_name + ' ' + value.qty + ' ' + value.type} 
                   <form onSubmit={props.handleDelete}>
                       <input type="text" hidden value={value.id} />
                       <input type="submit" value="Eliminar" />
                   </form>
                   </li>)
               })}
            </ul>
        </>
    )
}

export default ListadoRegistros;