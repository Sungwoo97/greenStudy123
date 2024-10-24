import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
      <section>
          <article>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p>
          </article>
      </section> 
    )
  }
}
