import React, { Component } from 'react'
import Fullpage, { FullpageSection } from '@ap.cx/react-fullpage'
import "babel-polyfill"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor1: 'coral',
      backgroundColor2: 'lime'
    }
  }

  onChange() {}

  render () {

    return (
      <Fullpage onChange={this.onChange}>
        <FullpageSection style={{
          backgroundColor: 'lime',
          color: 'darkGreen',
          height: '80vh',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div>
            <h1 style={{fontSize: '4em'}}>React Fullpage Experiment</h1>
            <h2 style={{fontSize: '2em'}}>Create Fullscreen Scrolling Websites</h2>
          </div>
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: this.state.backgroundColor1,
          color: 'white',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 1000ms linear',
        }}
        onShow={() => {
          this.setState({
            backgroundColor1: 'teal'
          })
        }}
        onHide={() => {
          this.setState({
            backgroundColor1: 'coral'
          })
        }}>
        <h1 style={{fontSize: '4em'}}>2</h1>
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: this.state.backgroundColor2,
          color: 'white',
          height: 'auto',
          padding: '1em',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
          <div>
            <h1 style={{fontSize: '4em'}}>Height Auto</h1>
            {
              Array.from(Array(30).keys()).map( index =>(
                <p style={{fontSize: '2em'}} ref={`index_${index}`}>{index}</p>
              ))
            }
          </div>
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: 'firebrick',
          color: 'white',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1 style={{fontSize: '4em'}}>4</h1>
        </FullpageSection>
      </Fullpage>
    )
  }
}
