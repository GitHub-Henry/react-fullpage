/**
 * @class FullpageSection
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class FullpageSection extends Component {
  static propTypes = {
    text: PropTypes.node
  }

  render() {
    const {
      children,
      height = '100vh',
      style = {},
      className = '',
      index = 0,
    } = this.props

    return (
      <section className={styles.fullpageSection} style={{ height, ...style }} __fullpagesection={index}>
        {children}
      </section>
    )
  }
}

export default FullpageSection
