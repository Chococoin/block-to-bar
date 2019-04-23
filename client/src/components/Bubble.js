import React, { Component } from 'react'
import Axios from 'axios';

class Bubble extends Component {
  constructor(){
    super()
    this.state = {
      percentage : 1,
      data: 'Aspettando data da Exchange',
      color: 'red',
      tree_level: 0,
      tree_number: 0
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Axios.get('/data')
      .then(response => response.data )
      .then(data => this.setState({ data }))
      .then(() => {
        const goal = 25000;
        const stock_tree = 9000;
        let percentage = Math.floor(this.state.data / 25000 * 1000) / 10;
        let tree_level = (Math.floor(this.state.data / 18) / stock_tree * 100).toFixed(1);
        let tree_number = Math.floor(this.state.data / 18);
        this.setState({ percentage, tree_level, tree_number })

        if (this.state.data >= goal) {
          this.setState({color: 'green'})
        }
        else if (this.state.data >= goal / 4) {
          this.setState({color: 'orange'})
        } else {
          this.setState({color: 'red'})
        }
      })      
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      percentage: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <span className="instructions">
            {"Numero d'alberi adottati " +  Math.floor(this.state.tree_number)} 
          </span>
    
          <div className={this.state.color}>
            <div className="progress">
              <div className="inner">
                <div className="percent"><span>{this.state.tree_level}</span>%</div>
                <div className="water" style={{"top": 100 - this.state.tree_level +"%"}}></div>
                <div className="glare"></div>
              </div>
            </div>
          </div>
            <span>{this.state.data}</span>
        </div>
      </div>

    )
  }
}

export default Bubble;
