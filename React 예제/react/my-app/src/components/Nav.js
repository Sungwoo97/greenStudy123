import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    let list = [];
    let data = this.props.data;
    let i = 0;
    while(i<data.length){
      list.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>);
      i++;
    }  
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }
}
