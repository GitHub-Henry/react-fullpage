import React, { Component } from 'react'
import Fullpage, { FullpageSection } from '@ap.cx/react-fullpage'

export default class App extends Component {


  onChange(state) {
    //console.log(state);
  }

  render () {
    return (
      <Fullpage onChange={this.onChange}>
        <FullpageSection name={'intro'} style={{
          backgroundColor: 'lime',
          color: 'darkGreen',
          height: '80vh',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div>
            <h1 style={{fontSize: '4em'}}>React Fullpage</h1>
            <h2 style={{fontSize: '2em'}}>Create Fullscreen Scrolling Websites or Webapp</h2>
          </div>
        </FullpageSection>
        <FullpageSection name={'simple'} style={{
          backgroundColor: 'coral',
          color: 'white',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div>
            <h1 style={{
            fontSize: '8em',
            }}>Simple</h1>
            <p>React-Fullpage is designed to be simple to use and customize.</p>
          </div>
        </FullpageSection>
        <FullpageSection onActive={console.log} name={'responsive'} style={{
          backgroundColor: 'firebrick',
          color: 'white',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1 style={{fontSize: '4em'}}>Responsive</h1>
        </FullpageSection>
        <FullpageSection name={'last'} style={{
          backgroundColor: 'darkGreen',
          color: 'white',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1 style={{fontSize: '4em'}}>MIT</h1>
        </FullpageSection>
        <FullpageSection name={'last'} style={{
          backgroundColor: 'darkGreen',
          color: 'white',
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1 style={{fontSize: '4em'}}>5</h1>
        </FullpageSection>
      </Fullpage>
    )
  }
}
