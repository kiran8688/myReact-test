import { render } from "@testing-library/react";
import { Component } from "react";

class Button extends Component{

    render( props ) {
        const contextClassBtn = `btn btn-${this.props.color}`
        return(
            <button className={contextClassBtn}> Click me </button>
        )
    }
}

Button.defaultProps = {
    color: 'info'
}

export default Button;