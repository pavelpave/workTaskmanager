import React , {Component} from 'react';
import TrTable from './TrTable'



class Tbody extends Component{
  constructor(props) {
    super(props);
    this.state = props.state
    console.log(this.state);
    
  }
  
    render(){
        return(
              <tbody>
                  <TrTable state={ this.state}/>
                  <TrTable state={ this.state}/>
                  <TrTable state={ this.state}/>
            </tbody>
        )
    }
}
export default Tbody