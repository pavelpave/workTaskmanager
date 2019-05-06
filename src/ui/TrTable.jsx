import React , {Component} from 'react'
import FlagWork from './FlagWork'
import GroupButton from './GroupButton'
import OpisTask from './OpisTask'
import Podrob from './Podrob'
import './styles/style.css'
class TrTable extends Component {
    constructor(props){
        super(props)
        console.log(props);
        
        this.state = props.state
        this.cklicked = this.cklicked.bind(this)
    }
    cklicked(){
        if(this.state.opis){
        this.state.opis = false
        }else{
            this.state.opis = true   
        }
        this.setState(this.state)
    }
    render(){
        return(
            
            <tr className='row_style'>
                <th scope="row">1</th>
                <td >
                    <FlagWork />
                </td>
                <td>
                    <GroupButton />
                </td>
                <td  onClick={this.cklicked}>
                    <OpisTask />
                </td>
                 {this.state.opis ? <Podrob />: console.log('1')}
            </tr>
           
           
        )
    }
}
export default TrTable