import React, { Component } from 'react';
import AdminService from '../services/AdminService';

class addAdminComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            contact_no: '',
            address: '',
            password:''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveAdmin = this.saveAdmin.bind(this);
        this.cancelAdmin = this.cancelAdmin.bind(this);
    }

    saveAdmin = (e) => {
        e.preventDefault();
        let admin = {name: this.state.name, email: this.state.email, contact_no: this.state.contact_no,
        address: this.state.address, password: this.state.password};
        console.log('admin => ' + JSON.stringify(admin));

        AdminService.createAdmin(admin).then(res =>{
            this.props.history.push('/admins');
        });
    }

    changeNameHandler =(event)=>{
        this.setState({name: event.target.value});
    }

    changeEmailHandler =(event)=>{
        this.setState({email: event.target.value});
    }

    changeContactNoHandler =(event)=>{
        this.setState({contact_no: event.target.value});
    }

    changeAddressHandler =(event)=>{
        this.setState({address: event.target.value});
    }

    changePasswordHandler =(event)=>{
        this.setState({password: event.target.value});
    }

    cancelAdmin(){
        this.props.history.push("/admins");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Admin</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Contact No: </label>
                                        <input placeholder="contactno" name="contactno" className="form-control"
                                        value={this.state.contact_no} onChange={this.changeContactNoHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="address" name="address" className="form-control"
                                        value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input placeholder="password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <br/>
                                    <button className="btn btn-success" onClick={this.saveAdmin}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancelAdmin} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default addAdminComponent;