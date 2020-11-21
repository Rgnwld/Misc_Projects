import React, { Component } from "react";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        //Definindo variaveis utilizadas
        this.state = { responseValue: 0, result: "" };
    }

    calcResult = (e) => {
        var value = e.target.value;
        var result = "";

        if (value == 0) result = "0";

        while (value != 0) {
            if (isNaN(value)) {
                console.log(value);
                this.setState({ result: "Not a Number" });
                return;
            }

            if (value % 2) {
                result = "1" + result;
            } else {
                result = "0" + result;
            }

            value = Math.floor(value / 2);
        }
        this.setState({ result: result });
    };

    render() {
        return (
            <div className="page_decToBin">
                <div className="box">
                    <div>
                        <h3>Digite um numero em Decimal: </h3>
                        <input placeholder="Digite aqui!" type="text" onChange={this.calcResult} />
                    </div>
                    <div>
                        <h3>Resultado: </h3>
                        <div className="resultado">
                            <strong>{this.state.result}</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
