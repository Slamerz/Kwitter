import { connect } from "react-redux";
import Feed from "../components/Feed";
import React from "react";
import {
  deleteLike,
  fetchLikes,
  fetchTweets,
  fetchUsers,
  postLike,
  deleteTweet
} from "../actions";

class VisibleFeed extends React.Component {
  componentDidMount() {
    this.props.fetchTweets();
    this.props.fetchUsers();
    this.props.fetchLikes();
  }

  render() {
    const {
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
      deleteLike,
      deleteTweet
    } = this.props;
    if (usersError || tweetsError || likesError || loginError) {
      return <div> Error! </div>;
    }
    if (usersLoading || tweetsLoading || loginLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Feed
        tweets={tweets}
        users={users}
        likes={likes}
        login={login}
        likeActions={{ delete: deleteLike, post: postLike }}
        deleteTweetAction={ deleteTweet }
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
  fetchUsers,
  deleteTweet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleFeed);
