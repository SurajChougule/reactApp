import React from 'react';
import ListRow from './listRow';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      lists: []
    }
    this.getCount = this.getCount.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {
      let users = response && response.map(item => {
        item.count = 0;
        return item;
      });
      this.setState({lists: users});
    });
  }


  getCount (count, id){
    const lists = this.state && this.state.lists;

    let items = lists && lists.map(element => {
      if (element.id === id) {
        element.count = count;
      }
      return element;
    });
    this.setState({lists: items});
  }

  render() {
    let users = this.state.lists;
    
    return (
      <ul>
        {users && users.map((item, index)=> {
          return <ListRow data={item} key={index} getCount={this.getCount} count={item.count} />
        })}
      </ul>
    );
  }
}

export default List;
