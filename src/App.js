import './App.css';
// import H1Tag from './Components/H1/H1Tag';
import Home from './Components/Home/Home';
import Button from './Components/Buttons/Button';
import Employees from './Components/Employees/Employees';
import { Component} from 'react';
// import Home from './Components/home/home';
class App extends Component{ 

  

    state = {
       employees :
        [
            {id: 1, name: 'Emp-1', DOB: 1999, designation: 'Software', exp: 2},
            {id: 2, name: 'Emp-2', DOB: 1991, designation: 'Engineer', exp: 5},
            {id: 3, name: 'Emp-3', DOB: 1993, designation: 'Manager', exp: 10},
            {id: 4, name: 'Emp-4', DOB: 1989, designation: 'Servent', exp: 7},
            {id: 5, name: 'Emp-5', DOB: 1970, designation: 'Driver', exp: 11},
            {id: 6, name: 'Emp-6', DOB: 1978, designation: 'Coder', exp: 15},
            {id: 7, name: 'Emp-7', DOB: 1996, designation: 'Analyst', exp: 20},
            {id: 8, name: 'Emp-8', DOB: 1985, designation: 'Security', exp: 12},
            {id: 9, name: 'Emp-9', DOB: 1975, designation: 'Software', exp: 18},
            {id: 10, name: 'Emp-10', DOB: 1990, designation: 'Coder', exp: 10},
            {id: 11, name: 'Emp-11', DOB: 1971, designation: 'Plumber', exp: 14},
            {id: 12, name: 'Emp-12', DOB: 1961, designation: 'Contractor', exp: 17},
            {id: 13, name: 'Emp-13', DOB: 1983, designation: 'Tester', exp: 4},
            {id: 14, name: 'Emp-14', DOB: 1994, designation: 'Developer', exp: 22},
            {id: 15, name: 'Emp-15', DOB: 1974, designation: 'Software', exp: 11},

          ],
          employeesSwitch: false,
          login : false,
          owner : `kiran`
        }
        
        
        
        dispOwnerTitle =  `Hello ${this.state.owner} this is your First React Test App`
        dispNotOwner = "Hello guys this is my First React Test App"


        loginEventHandler = () => {
           
           console.log("first")
          
            const loginSwitch = this.state.login
             
            this.setState({login:!loginSwitch})
            this.setState({employeesSwitch:false})

            

           
            }

            revelemployeesEventHandler=() =>{
              console.log("second")

              if(this.state.login){

              // const revealEmployeeSwitch = this.state.employeesSwitch
              this.setState({employeesSwitch:true})

              }else{

                this.setState({employeesSwitch:false})
                

              }

            }

        
        render(props) {
          
          

    // if(this.state.employeesSwitch){
      // console.log(this.state.employeesSwitch)

      
      // this.state.employees.map((employee, index ) => {
  
        
  
      // })


    // }
    var emp = (
      <center className="fs-1" >currently no employees at the company </center>
    )
    if (this.state.employeesSwitch) {
     console.log(this.state.employeesSwitch); 
     
      emp =( <div id='emp-card' className='col'>
        {this.state.employees.map((employee, index) =>{

          return(
            
            
            <Employees
              
              className=" mb-5 rounded-4 text-black table  ms-5 card p-3 text-dark shadow-lg hover mb-3 bg-transparent "
              key={this.state.employees[index].id}
              name={this.state.employees[index].name}
              Dob={this.state.employees[index].DOB}
              designation={this.state.employees[index].designation}
              experience={this.state.employees[index].exp}>
                
            </Employees>
            

            )
          })}
        </div>

      )

     
    }




    return (
      
      <div className="App"  ><br /><br />
       <Button color="dark" onClick={this.loginEventHandler}> </Button>

      <h1 className=''>{this.state.login ? this.dispOwnerTitle : this.dispNotOwner }<Button color="primary" onClick={this.revelemployeesEventHandler}  /></h1>
      <Home  className="card container mb-5 bg-warning p-3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic mollitia nostrum illum nam! Cumque cupiditate doloribus architecto accusantium quod ea, explicabo sint rem autem nemo fuga rerum molestias asperiores maxime." />
       <div className="row">

       
        {emp}
      
      
        </div>
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
