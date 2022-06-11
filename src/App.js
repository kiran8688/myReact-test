import './App.css';
// import H1Tag from './Components/H1/H1Tag';
import Home from './Components/Home/Home';
import Button from './Components/Buttons/Button';
import { Component} from 'react';
// import Home from './Components/home/home';
class App extends Component{ 

  constructor(props){
    super(props)

    this.state = {
       employees :
        [
            {id: 1, name: 'emp-1', DOB: 1999, designation: 'software', exp: 2},
            {id: 2, name: 'emp-2', DOB: 1991, designation: 'engineer', exp: 5},
            {id: 3, name: 'emp-3', DOB: 1993, designation: 'manager', exp: 10},
            {id: 4, name: 'emp-4', DOB: 1989, designation: 'servent', exp: 7},
            {id: 5, name: 'emp-5', DOB: 1970, designation: 'driver', exp: 11},
            {id: 6, name: 'emp-6', DOB: 1978, designation: 'coder', exp: 15},
            {id: 7, name: 'emp-7', DOB: 1996, designation: 'analyst', exp: 20},
            {id: 8, name: 'emp-8', DOB: 1985, designation: 'security', exp: 12},
            {id: 9, name: 'emp-9', DOB: 1975, designation: 'software', exp: 18},
            {id: 10, name: 'emp-10', DOB: 1990, designation: 'coder', exp: 10},
            {id: 11, name: 'emp-11', DOB: 1971, designation: 'plumber', exp: 14},
            {id: 12, name: 'emp-12', DOB: 1961, designation: 'contractor', exp: 17},
            {id: 13, name: 'emp-13', DOB: 1983, designation: 'tester', exp: 4},
            {id: 14, name: 'emp-14', DOB: 1994, designation: 'developer', exp: 22},
            {id: 15, name: 'emp-15', DOB: 1974, designation: 'software', exp: 11},

        ],
        employees: true
    }
}

  
       login = true
       owner = `kiran`
       dispOwnerTitle =  `Hello ${this.owner} this is your First React Test App`
       dispNotOwner = "Hello guys this is my First React Test App"
      
  render(props) {

    // this.state.employees.map((employee, index ) => {

    //   return(
    //     <employee 
    //     key={employee.id}
    //     name={employee.name}
    //     designation={employee.designation}/>
    //   )

    // })


    return (
      
      <div className="App container-fluid"  ><br /><br />
       
       <div className="container-fluid">


       </div>
      
      
      <h1 className='container-fluid'>{this.login ? this.dispOwnerTitle : this.dispNotOwner }<Button color="primary" onclick={this.props.onclick}  /></h1>
      <Home text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic mollitia nostrum illum nam! Cumque cupiditate doloribus architecto accusantium quod ea, explicabo sint rem autem nemo fuga rerum molestias asperiores maxime." />
    </div>
  );
}
}
export default  App; 


// {/* <Button  /><H1Tag text={this.props.text}/> */}




// onclick = {this.props.onclick}


// {/* <Home /> */}
// {/* <Home />
// <Button /><br /><br />
// <Button color="danger"/>
// <Button color="primary"/>
// <Button color="secondary"/> */}
