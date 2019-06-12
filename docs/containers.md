# Creating and connecting a container


### What is a container?
A container component is a component that is responsible for retrieving data, and in order to get that data, the component needs to use Redux's connect and mapStateToProps functions.\
A container component will grab data from state via mapStateToProps. The component will then pass necessary portions of that data down to its children as props.\
A container component is also responsible for dispatching actions that make changes to application state.

## [Click the link for a full breakdown of containers in redux](https://www.thegreatcodeadventure.com/the-react-plus-redux-container-pattern/)


### Breakdown of our current container, and it's dependencies.

[container](#container)

#### <a name="container"></a>Container
```javascript
//connect is a part of redux which lets you hook the state of the react app into a component as props so that you don't have to touch the state inside of actual components.
import { connect } from "react-redux";
//Feed is our component which takes in an array of tweets, and an array of users.
import Feed from "../components/Feed";

import React from "react";
//fetchTweets, and fetchUsers actions that fetch and set the users, and messages portion of the state.
import { fetchTweets, fetchUsers } from "../actions";

//Create a component, this component just like our other components only uses props.
class VisibleFeed extends React.Component {
    //since this component is guaranteed to be both the profile, and home page it runs the fetch actions to set the state for us.
    //just like in our klack assignment we run the fetch requests in a special function called componentDidMount() which runs before the component renders
  componentDidMount() {
      //since this component is hooked into redux using {connect} we can use it's props to actually call dispatch to run our actions.
    this.props.dispatch(fetchTweets());
    this.props.dispatch(fetchUsers());
  }

  render() {
      //We deconstruct parts from our props to user them a bit easier
    const {
      tweetsError,
      tweetsLoading,
      tweets,
      users,
      usersLoading,
      usersError
    } = this.props;
    
    //To make sure that our state has fully loaded to avoid undefined errors we check the boilerplate variables I created which keep track of if the fetch requests have finished
    
    //check to see if there was an error
    if (usersError || tweetsError) {
      return <div> Error! {users.message}</div>;
    }
    //check to see if it's still loading
    if (usersLoading || tweetsLoading) {
      return <div>Loading...</div>;
    }
    
    
    //if it's no longer loading it loads the actual component so we now return the page/components and pass in the data they need.
    return <Feed tweets={tweets} users={users} />;
  }
}


//Redux uses the connect function to set data from the state into props for the object
//here we name all of the props we want in our container component, and then set it to the data we want from the state.
const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error,
  tweets: state.messages.tweets,
  tweetsLoading: state.messages.loading,
  tweetsError: state.messages.error
});

//Lastly we implement the connect function, here we export the componenet, and call connect, in side of the first () we put our mapStateToProps object, and in the 2nd () we give it our component that we built above.
//This sets all of the this.props in VisibleFeed to what we told it to in matStateToProps.
export default connect(mapStateToProps)(VisibleFeed);

```
