import { connect } from "react-redux";
import React from "react";
import LoginUser from "../login/loginComponent";
import { loadNewsThunkCreator } from "../../reducers/auth-reducer";

class MiddleNewsComponent extends React.Component{
    componentDidMount(){
        this.props.authUserThunkCreator();
    }
    render(){
        return (<LoginUser {...this.props}/>)
    }
}
function mapStateToProps(state){
    return {authPage : state.authPage}; 
}

const NewsContainer =  connect(mapStateToProps, {authUserThunkCreator})(MiddleNewsComponent)

export default  LoginContainer;