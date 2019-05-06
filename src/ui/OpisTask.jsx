import React , {Component} from 'react'

class OpisTask extends Component {
    render(){
        return(
            <div className="container_opis_task">
                <span title='Затраченное / Планируемое время' className='time_work'> 0 / 0 ч.</span>
                <span>
                    <strong> Test </strong>
                    <p className='task_table__contractor'>Исполнитель: Алексей Титов</p>

                </span>
            </div>
        )
    }
}
export default OpisTask