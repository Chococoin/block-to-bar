import React, { Component } from 'react'

class Bubble extends Component {
  constructor(){
    super()
    this.state = {
      percentage : 10,
      data: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => this.setState({ data }));
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
        <h2>Bubble</h2>
        <div class="wrapper">
          <span class="instructions">
            The progress bubble below can transition between red, orange, and green depending on the current percentage.
          </span>
          <span class="instructions">
            Go ahead and try it out by using the text box below.
          </span>
    
          <div class="green">
            <div class="progress">
            <div class="inner">
            <div class="percent"><span>{this.state.percentage}</span>%</div>
            <div class="water"></div>
            <div class="glare"></div>
          </div>
        </div>
      </div>
  
  <span>Enter Percentage: <input type="text" 
                                 name="percentage" 
                                 value={this.state.percentage} 
                                 id="percent-box" 
                                 onChange={this.onChange}/>%</span>
                                 <span>{this.state.data}</span>
</div>
        </div>

    )
  }
}

export default Bubble;
