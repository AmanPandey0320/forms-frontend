import { Component } from "react";
import ReactDom from "react-dom";

class Portal extends Component{
    constructor(props){
        super(props);
        this.portalRoot = document.getElementById(this.props.eid);
        this.el = document.createElement("div");
    }
    componentDidMount(){
        this.portalRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        this.portalRoot.removeChild(this.el);
    }

    render(){
        return ReactDom.createPortal(this.props.children,this.el);
    }
}


export default Portal;