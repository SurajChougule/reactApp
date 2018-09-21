import React from 'react';
import ListRow from './listRow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions'; 
import propTypes from 'prop-types';

class List extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.listActions.getUsers();
  }

  // getCount (count, id){
  //   const lists = this.state && this.state.list;

  //   let items = lists && lists.map(element => {
  //     if (element.id === id) {
  //       element.count = count;
  //     }
  //     return element;
  //   });
  // }

  render() {
    let users = this.props.users;
    
    return (
      <ul>
        {users && users.map((item, index)=> {
          return <ListRow data={item} key={index} getCount={this.props.listActions.getCount} count={item.count} />
        })}
      </ul>
    );
  }
}

List.propTypes = {
  users: propTypes.array,
  listActions: propTypes.object   
};


function mapStateToProps(state){
  return {
    users: state.Users.list
  };
}

function mapDispatchToProps(dispatch){
  return {
    listActions: bindActionCreators(listActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
