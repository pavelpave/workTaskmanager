import React , {Component} from 'react';
import TableHead from './TableHead'
import Tbody from './Tbody'
import state from '../state/state' 

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
class Table extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <table className="table ">
                <TableHead />
                <Tbody state={state}/>     
            </table>
        )
    }
}
export default Table