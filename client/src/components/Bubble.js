import React, { Component } from 'react'

class Bubble extends Component {
  render() {
    return (
        <div>
            <h2>Bubble</h2>
            <div class="wrapper">
  
  <span class="instructions">The progress bubble below can transition between red, orange, and green depending on the current percentage.</span>
   <span class="instructions">Go ahead and try it out by using the text box below.</span>
  
  <div class="green">
    <div class="progress">
      <div class="inner">
        <div class="percent"><span>67</span>%</div>
        <div class="water"></div>
        <div class="glare"></div>
      </div>
    </div>
  </div>
  
  <span>Enter Percentage: <input type="text" placeholder="67" id="percent-box"/>%</span>
  
  <section id="copyright">
    <div>(c) 2015 June Hanabi - <a href="https://opensource.org/licenses/MIT">License MIT</a> </div>
    
     <div>Work is modified and inspired from <a href="https://codepen.io/JamieDixon/pen/Pqrjvv">Jamie Dixon's pen</a></div>
  </section>
</div>
        </div>
    )
  }
}

export default Bubble