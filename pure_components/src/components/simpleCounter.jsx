import React, { Component } from "react";

class SimpleCounterCompoenent extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            toggle : false,
        }
    }
    toggle = () =>{
        this.setState((bool) => ({toggle: !bool.toggle}))   
    }

    increamentCount = () => {
        if(this.state.toggle){
            this.setState((prev) => ({count : prev.count + 1}))
        }
    }
    render(){
        let {count, toggle} = this.state
        console.log("toggle",toggle)

        var changeStyle = null;
        if(toggle){
            changeStyle= {
                backgroundColor : "green"
            }
        }else{
            changeStyle = {
                backgroundColor : "red"
            }
        }

        var changeButtonStyle = null;

        if(toggle){
            changeButtonStyle = {
                cursor : "pointer"
            }
        }else{
            changeButtonStyle = {
                cursor : "not-allowed"
            }
        }
        return (
            <div>
                <h2>Simple Component</h2>
                <p>Count:{count}</p>
                <button style={changeStyle} onClick={this.toggle}>Set Toggle</button>
                <button style={changeButtonStyle} onClick={this.increamentCount} disabled={!toggle}>Counter</button>
            </div>
        )
    }
}

export default SimpleCounterCompoenent