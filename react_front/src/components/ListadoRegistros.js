import React from 'react';


const ListadoRegistros = (props) => {
    return (
        <>
            <h3>Listado de movimientos</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Movimiento</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Entrada/salida</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.data.map((value, i) => {
                        return (<tr key={i + value}>
                            <th scope="row">{value.id}</th>
                            <td>{value.movement_name}</td>
                            <td>{value.qty}</td>
                            <td>{value.type}</td>
                            <td className="action">

                                <form onSubmit={props.handleDelete}>
                                    <input type="text" hidden defaultValue={value.id} />
                                    <button className="badge badge-danger">Eliminar</button>
                                </form>

                                <button className="badge badge-warning" onClick={props.handleEdit} data-id={value.id}>Editar</button>

                            </td>

                        </tr>)
                    })}
                </tbody>
            </table>





        </>
    )
}

export default ListadoRegistros;