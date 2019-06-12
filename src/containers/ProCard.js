import { connect } from "react-redux";
import ProfileCard from "./ProfileCard";
import { fetchUsers } from "../actions";

class ProCard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchUsers())
    }

    render() {
        const{
            username,
            name,
            profilepic,
            tweetcount,
            likes
        } = this.props;
        return <ProfileCard 
    }
}