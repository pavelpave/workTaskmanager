import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class FlagWork extends Component {
    constructor(props){
        super(props)
        this.el = props.el
        this.classNameDiv = this.classNameDiv.bind(this)
    }
    classNameDiv(){
        if(this.el.state_verbose  === "Выполняется"){
            return 'btn  btn-outline-warning'
        }else if(this.el.state_verbose  === "Открыта для выполнения"){
            return 'btn btn-outline-primary'
        }else if(this.el.state_verbose  === "На проверке"){
            return 'btn btn-outline-info'
        }
    }
    render(){
        return(
            <div >
                    <p className={this.classNameDiv()}>{this.el.state_verbose}</p>
                    <p className="Name_organiz">Аэрофлот и так далее</p>
                    
            </div>
        )
    }
}
export default FlagWork