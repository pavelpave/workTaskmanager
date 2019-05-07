import React, { Component } from 'react';
import Table from './ui/index'
import * as axios from 'axios';
// import api from './ui/api_Task/todo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.state
    this.axioTaskList = this.axioTaskList.bind(this)
    this.renderArrTask= this.renderArrTask.bind(this)
    this.rerenderer = props.rerenderer
  }
  axioTaskList() {
    // const apiTodo = api.todo
    let mass = []
    const headers = {
      'Authorization': 'Token 6668b8cfdf927ba7710a9b0890de66c12d0b69fa'
    }    
    axios.get(`http://garpixcms.staging.garpix.com/garpix_workflow/api/v1/task/`, { headers })
      .then(res => {
        this.data = res.data;
        console.log(this.data.results)


        for (let i = 0; i < this.data.results.length; i++) {

          if (this.data.results[i].owner_object.id === this.state.owner_object.id) {
            mass.push(this.data.results[i])
          }
          this.state.buttonCliked[this.data.results[i].id] = null
        }
        
       
        this.state.opisTask = this.data.results
        
      
        this.setState(this.state.opisTask )
      })
  }
  renderArrTask(data){
    let newstate = {...this.state};
    let opisTask = newstate.opisTask;
    data.map(newtask => {
      opisTask = opisTask.map(oldtask => {
        if(newtask.id === oldtask.id) {
          console.log(newtask, 'newtask')
          console.log(oldtask, 'oldtask')
          return {...newtask};
        }
        return oldtask;
      })
    });
    newstate.opisTask = opisTask;
    console.log(newstate.opisTask);
    this.setState(newstate.opisTask);
  }
  componentDidMount() {
    this.axioTaskList()
  }
  render() {
    return (
      <Table state={this.state} rerenderTask={this.renderArrTask} />
    )
  }
}

export default App;
