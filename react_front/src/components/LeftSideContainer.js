import React from 'react';

function LeftSideContainer(){
    return(
        <>
            <div className="leftSide">
                <form>
                    <input type="text" placeholder="Nombre del movimiento" name="movement_name" />
                    <input type="number" name="qty" />
                    <select name="type">
                        <option value="in">Ingreso</option>
                        <option value="out">Egreso</option>
                    </select>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </>
    )
}

export default LeftSideContainer;