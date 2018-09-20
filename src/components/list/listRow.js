import React from 'react';

class ListRow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const data = this.props.data;
    let count = data && data.count;

    return (
      <li style={{border: '2px solid', 
        width: '300px', 
        padding: '5px 5px', 
        cursor: 'pointer'}} 
        onClick={() => this.props.getCount(count + 1, data.id)}>
        {data.name} count => {count}
      </li>
    );
  }
}

export default ListRow;