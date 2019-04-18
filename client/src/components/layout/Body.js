import React, { Component } from 'react'
import Bubble from '../Bubble';

class Body extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Block-to-Bar Monitor</h1>
                <p className="lead">
                  {' '}
                  Numero d'alberi adottati. 
                </p>
                <hr />
                <Bubble />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
