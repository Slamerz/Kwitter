import { connect } from "react-redux";
import UserList from "../components/UserList";
import React from "react";
import ProfileCard from "../components/ProfileCard";

class VisibleProfileCard extends React.Component {
  render() {
    const {
      users,
      usersLoading,
      usersError,
      login,
      loginLoading,
      loginError
    } = this.props;

    if (usersError || loginError) {
      return <div> Error! {users.message}</div>;
    }
    if (usersLoading || loginLoading) {
      return <div>Loading...</div>;
    } else {
      let id = this.props.id || login.id;
      return (
        <ProfileCard user={this.props.users.find(item => item.id === +id)} />
      );
    }
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error,
  login: state.auth.login,
  loginLoading: state.auth.loginLoading,
  loginError: state.auth.loginError
});

export default connect(mapStateToProps)(VisibleProfileCard);
