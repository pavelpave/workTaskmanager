import React , {Component} from 'react'
import './styles/style.css'

class GroupButton extends Component {
    render(){
        return(
            <div>
                <button className='btn btn-primary'>Взять задачу</button>
                <div className="Burger_button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#" className="link_task">перейти</a>
            </div>
        )
    }
}
export default GroupButton