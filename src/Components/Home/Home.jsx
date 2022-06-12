import './Home.css'
// import Button from '../Buttons/Button';
import { Component } from 'react';

class Home extends Component {
    
    render(props) {

    return(
        <h4 className={this.props.className} >
            {this.props.text}
        </h4>
    )

}
}
export default Home;