import React, { useState } from 'react';


const Form = (props) => {

    const [movement_name, setMovement_name] = useState(props.movement_name);
    const [qty, setQty] = useState(props.qty);
    return (
        <>
            <h3>{props.title}</h3>
            <form onSubmit={props.function}>
                <input type="text" placeholder="Nombre del movimiento" name="movement_name" value={movement_name} onChange={e => setMovement_name(e.target.value)} />
                <input type="number" name="qty" placeholder="Monto $" value={qty} onChange={e => setQty(e.target.value)} />
                <select name="type">
                    <option value="in">Ingreso</option>
                    <option value="out" >Egreso</option>
                </select>
                <input type="submit" defaultValue="Guardar" />
            </form>
        </>
    )

}

export default Form;