// import { render } from "@testing-library/react";
import { Component } from "react";
// import H1Tag from "../H1/H1Tag";
import Home from "../Home/Home";

class Button extends Component{

    //  login = true
    //  owner = `kiran`
     
    //  displayH1Handler = (props) =>{
    //    const ownerDisp = `Hello ${this.owner} this is your First React Test App`
    //    const notOwnerDisp = "Hello guys this is my First React Test App"
    //     console.log("clicked!");
    //     return  (
    //     <H1Tag text={this.login ? ownerDisp : notOwnerDisp }/>
    //     )
    // }
    
    
    
    render( props ) {
        const contextClassBtn = `btn btn-${this.props.color}`
        
    //    const switchTextHandler = (props) =>{
    //         console.log("clicked!");
            
    //         return( <Home>{this.props.text}</Home>)
    //     }
        

        return(
            <div className="container">

            <button className={contextClassBtn} onClick={this.props.onClick} > Click me </button>
            
            </div>
        )
    }
}


 Button.defaultProps = {
    color: 'info',
    
}

export default Button;