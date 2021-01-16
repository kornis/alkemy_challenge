import React from 'react';
import ListadoRegistros from './ListadoRegistros';
import MainCard from './MainCard';
import InfoCard from './InfoCard';
import Form from './Form.jsx';
class Main extends React.Component {

    state = {
        movement_name: '',
        qty: 0,
        type: '',
        data: null,
        loading: true,
        edit: false,
        dataToEdit: ""
    }


    fetchData = async () => {
        this.setState({
            loading: true
        })
        try {
            const response = await fetch('http://localhost:3000/movements');
            const data = await response.json();
            this.setState({
                data: data.data,
                loading: false,
            })
        } catch (err) {
            console.error(err);
        }
    }

    componentDidMount() {
        this.fetchData();
    }



    handleDelete = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3000/movement/' + e.target[0].value, {
            method: 'delete'
        });
        this.fetchData();
    }


    handleTotal = () => {
        if (this.state.data.length > 0) {
            return this.state.data.map(value => {
                if (value.type == 'in') {
                    return value.qty
                }
                else {
                    return value.qty * -1;
                }
            }).reduce((acc, val) => acc + val);
        }
    }

    editMovement = async (obj) => {
        this.setState({ loading: true })
        const response = await fetch('http://localhost:3000/movement/' + obj.dataset.id);
        const data = await response.json()

        this.setState({
            edit: true,
            dataToEdit: data.data,
            loading: false
        });
    }
    handleEdit = (e) => {
        this.editMovement(e.target);
    }


    formHandler = async (e) => {
        e.preventDefault();
        this.state.movement_name = e.target[0].value;
        this.state.qty = Number(e.target[1].value);
        this.state.type = e.target[2].value;
        let info = {
            ...this.state
        }
        if (this.state.edit) {
            await fetch('http://localhost:3000/movement/' + this.state.dataToEdit.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
        } else {
            await fetch('http://localhost:3000/movement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
        }
        this.fetchData();

    }

    render() {
        if (this.state.loading) {
            return null
        } else {

            return (
                <>
                    <section className="info_cards">
                        <MainCard getTotal={this.handleTotal} />
                        <InfoCard lastMovement={this.state.data[this.state.data.length - 1]} />
                    </section>

                    <div className="input_data">
                        <Form
                            title={this.state.edit ? "Editar registro" : "Nuevo Registro"}
                            movement_name={this.state.edit ? this.state.dataToEdit.movement_name : ""}
                            qty={this.state.edit ? this.state.dataToEdit.qty : ""}
                            function={this.formHandler}
                            edit={this.state.edit}
                        />

                    </div>

                    <div className="data_list">
                        <ListadoRegistros data={this.state} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                    </div>
                </>
            )
        }
    }
}

export default Main;