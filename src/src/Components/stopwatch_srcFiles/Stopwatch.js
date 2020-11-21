import React from "react";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayData = [];
        this.state = {
            timeRunning: false,
            timeAtual: { hour: 0, minute: 0, second: 0, milisecond: 0 },
            lap: [],
            timer: null,
        };
    }

    lapTimer = () => {
        if (this.state.timeRunning) {
            this.state.lap.push(this.state.timeAtual);
            this.displayData.push(
                <div>
                    <h2>
                        {this.state.lap[this.state.lap.length - 1].hour}:
                        {this.state.lap[this.state.lap.length - 1].minute}:
                        {this.state.lap[this.state.lap.length - 1].second}:
                        {this.state.lap[this.state.lap.length - 1].milisecond}
                    </h2>
                </div>
            );
        }
    };

    stopTimer = () => {
        clearInterval(this.state.timer);
        this.setState({ timeRunning: false });
    };

    restartTimer = () => {
        this.stopTimer();
        this.setState({
            timeAtual: { hour: 0, minute: 0, second: 0, milisecond: 0 },
        });
        this.displayData.length = 0;
    };

    startTimer = () => {
        if (!this.state.timeRunning) {
            this.setState({ timeRunning: true });
            var a = setInterval(() => {
                this.setState({
                    timeAtual: {
                        ...this.state.timeAtual,
                        milisecond: this.state.timeAtual.milisecond + 1,
                    },
                });
                if (this.state.timeAtual.milisecond >= 100) {
                    this.setState({
                        timeAtual: {
                            ...this.state.timeAtual,
                            second: this.state.timeAtual.second + 1,
                            milisecond: 0,
                        },
                    });
                }

                if (this.state.timeAtual.second >= 60) {
                    this.setState({
                        timeAtual: {
                            ...this.state.timeAtual,
                            minute: this.state.timeAtual.minute + 1,
                            second: 0,
                        },
                    });
                }

                if (this.state.timeAtual.minute >= 60) {
                    this.setState({
                        timeAtual: {
                            ...this.state.timeAtual,
                            hour: this.state.timeAtual.hour,
                            minute: 0,
                        },
                    });
                }
            }, 10);
            //EndInterval
            this.setState({ timer: a });
        }
    };

    render() {
        return (
            <div className="page_stopwatch">
                <div className="block">
                    <div className="clockProperties">
                        <button onClick={this.startTimer}>Start!</button>
                        <button onClick={this.stopTimer}>Stop!</button>
                        <button onClick={this.lapTimer}>Lap!</button>
                        <button onClick={this.restartTimer}>Restart!</button>
                    </div>
                    <div className="clock">
                        <h1>
                            {this.state.timeAtual.hour} : {this.state.timeAtual.minute} : {this.state.timeAtual.second}{" "}
                            : {this.state.timeAtual.milisecond}
                        </h1>
                    </div>
                    <div id="laps">{this.displayData}</div>
                </div>
            </div>
        );
    }
}

export default App;
