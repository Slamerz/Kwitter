import React from "react";
import { connect } from "react-redux";
import ProfileCard from "../components/ProfileCard";

class ProCard extends React.Component {
  render() {
    const {
      tweetsError,
      tweetsLoading,
      tweets,
      users,
      usersLoading,
      usersError,
      login,
      loginLoading,
      loginError
    } = this.props;

    if (usersError || loginError || tweetsError) {
      return <div>Error! {users.message}</div>;
    }
    if (usersLoading || loginLoading || tweetsLoading) {
      return <div>Loading...</div>;
    } 
    if(this.props) {
      const id = this.props.id || login.id;
      return (
        <ProfileCard
          user={users.find(user => +user.id === +id)}
          tweets={tweets.filter(tweet => +tweet.userId === +id)}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error,
  tweets: state.messages.tweets,
  tweetsLoading: state.messages.loading,
  tweetsError: state.messages.error
});

export default connect(mapStateToProps)(ProCard);
