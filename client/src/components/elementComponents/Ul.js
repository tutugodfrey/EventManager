import React from 'react';

class Li extends React.Component {
  render () {
    let items;
    items = this.props.listItems.map(item => <li>{item}</li>)
    return (
      items
    )
  }
}
class Ul extends React.Component {
  render () {
    return (
      <ul id = {this.props.ulId} className = {this.props.ulClass} >
        <Li listItems = {this.props.listItems} />
      </ul>
    )
  }
}

export default Ul;