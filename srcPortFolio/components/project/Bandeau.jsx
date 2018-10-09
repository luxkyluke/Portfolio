import React from "react";

import BandeauBloc  from "./BandeauTxtBloc.jsx";

export default class Bandeau extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'role':'role',
            'nbRole' : 1
        };
    }

    componentDidMount(){
        this.initRole();    
    }

    initRole = () => {
        const nbRole = this.props.role.split('br').length;
        if(nbRole > 1){
            this.setState({
                'role':'roles',
                'nbRole' : nbRole
            });
        }
    }

    componentWillReceiveProps(newProps){
        const nbRole = this.props.role.split('br').length;
        if(this.state.nbRole !== nbRole){
            this.initRole();
        }
    }

    render() {
        this.style = {backgroundColor : this.props.color}
        return(
            <div className="bandeau" style={this.style}>
                <div className="bandeau__wrapper">
                    <BandeauBloc color={this.props.txtcolor} title={this.state.role} label={this.props.role}/>
                    <BandeauBloc color={this.props.txtcolor} title="context" label={this.props.context}/>
                    <BandeauBloc color={this.props.txtcolor} title="year" label={this.props.year}/>
                </div>
            </div>
        );
    }
}
