import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import  '../components/style.css';

class Home extends React.Component {
    render(){
        return(
            <>
            <Header />
            <div className="container">
                <Main />
            </div>

            <footer>
                Federico Garcia
            </footer>
            </>
        )
    }
}

export default Home;