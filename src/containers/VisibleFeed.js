import { connect } from "react-redux";
import Feed from "../components/Feed";
import React from "react";
import { fetchTweets, fetchUsers } from "../actions";

class VisibleFeed extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTweets());
    this.props.dispatch(fetchUsers());
  }

  render() {
    const {
      tweetsError,
      tweetsLoading,
      tweets,
      users,
      usersLoading,
      usersError
    } = this.props;
    if (usersError || tweetsError) {
      return <div> Error! {users.message}</div>;
    }
    if (usersLoading || tweetsLoading) {
      return <div>Loading...</div>;
    }

    return <Feed tweets={tweets} users={users} filterId={this.props.id} />;
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

export default connect(mapStateToProps)(VisibleFeed);
