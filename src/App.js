import React, { Component } from 'react';
import logo from './logo.svg';
import { Container } from "./style-js/grid";

class App extends Component {
    render() {
        return (
            <Container onClick={() => alert("OK")}>
                Hello
            </Container>
        )
    }
}

export default App;
