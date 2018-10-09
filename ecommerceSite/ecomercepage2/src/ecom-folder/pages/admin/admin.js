import React from 'react';
import AdminCard from "./adminCard.js";

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: props.products

        }
    }

    MakeAdminCard = () => {
        var AdminArray = []
        this.state.products.forEach(p=> {
            AdminArray.push(
                <AdminCard info = {p}/>
            )   
        });
        return AdminArray
}

    render(){
        return(<div>{this.MakeAdminCard()}</div>)
            
    }   
}

export default Admin;