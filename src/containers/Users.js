import { connect } from "react-redux";
import UserList from "../components/UserList";
import React from "react";
import { fetchUsers } from "../actions";

class List extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const {
      users,
      usersLoading,
      usersError
    } = this.props;
    if (usersError) {
      return <div> Error! {users.message}</div>;
    }
    if (usersLoading) {
      return <div>Loading...</div>;
    }

    return <UserList users={users} />;
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error,
});

export default connect(mapStateToProps)(List);
