import { connect } from "react-redux";
import Feed from "../components/Feed";
import React from "react";
import {
  deleteLike,
  fetchLikes,
  fetchTweets,
  fetchUsers,
  postLike
} from "../actions";

class VisibleFeed extends React.Component {
  componentDidMount() {
    this.props.fetchTweets();
    this.props.fetchUsers();
    this.props.fetchLikes();
  }

  render() {
    const {
      filterId,
      filterString,
      tweetsError,
      tweetsLoading,
      tweets,
      users,
      usersLoading,
      usersError,
      likes,
      likesError,
      loginError,
      loginLoading,
      login,
      postLike,
      deleteLike
    } = this.props;
    let filteredTweets = tweets;
    if (usersError || tweetsError || likesError || loginError) {
      return <div> Error! </div>;
    }
    if (usersLoading || tweetsLoading || loginLoading) {
      return <div>Loading...</div>;
    }
    if (filterId || filterString) {
      if (filterId)
        filteredTweets = filteredTweets.filter(
          tweet => +tweet.userId === +filterId
        );
      if (filterString)
        filteredTweets = filteredTweets.filter(tweet =>
          tweet.text.includes(filterString)
        );
    }

    return (
      <Feed
        tweets={filteredTweets}
        users={users}
        likes={likes}
        login={login}
        likeActions={{ delete: deleteLike, post: postLike }}
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
  tweetsError: state.messages.error,
  likes: state.likes.likes,
  likesLoading: state.likes.loading,
  likesError: state.likes.error,
  login: state.auth.login,
  loginLoading: state.auth.loginLoading,
  loginError: state.auth.loginError
});

const mapDispatchToProps = {
  postLike,
  deleteLike,
  fetchTweets,
  fetchLikes,
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleFeed);
