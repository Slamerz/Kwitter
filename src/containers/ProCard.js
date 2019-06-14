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
      usersError
    } = this.props;
    return (
      <ProfileCard
        user={users.find(user => +user.id === 5)}
        tweets={tweets.filter(tweet => +tweet.userId === 5)}
      />
    );
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
