import React from 'react';
import ListadoRegistros from './ListadoRegistros';

class Main extends React.Component{

    state = {
        movement_name: '',
        qty: 0,
        type: '',
        data: "",
        loading: true
    }


fetchData = async () => {
    this.setState({
        loading: true
    }) 
    try{
        const response = await fetch('http://localhost:3000/movements');
        const data = await response.json();
        this.setState({
            data: data.data,
            loading: false,
        })
        console.log('llega la data', this.state.data)
    }catch(err){
        console.error(err);
    }
}

componentDidMount(){
    this.fetchData();
}
 

    
    handleDelete = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3000/movement/'+e.target[0].value, {
            method: 'delete'
        });
        this.fetchData();
     }
      


    formHandler = async (e) => {
        e.preventDefault();
        this.state.movement_name = e.target[0].value;
        this.state.qty = Number(e.target[1].value);
        this.state.type = e.target[2].value;
        let info = {
            ...this.state
        }
       await fetch('http://localhost:3000/movement',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(info)
        });
        this.fetchData();
        
    }

    render(){
        console.log('loading', this.state)
        if(this.state.loading){
            return null
        }else{

    return(
        <>
            <div className="input_data">
                <form onSubmit={this.formHandler}>
                    <input type="text" placeholder="Nombre del movimiento" name="movement_name" />
                    <input type="number" name="qty" />
                    <select name="type">
                        <option value="in">Ingreso</option>
                        <option value="out">Egreso</option>
                    </select>
                    <input type="submit" value="Guardar" />
                </form>
            </div>

            <div className="data_list">
               <ListadoRegistros data={ this.state } handleDelete={this.handleDelete} />
            </div>
        </>
    )}}
}

export default Main;