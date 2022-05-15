import React, { Component } from 'react';
import AdminService from '../services/AdminService';

class ListAdmin extends Component {
    constructor(props){
        super(props)

        this.state = {
            admins: []
        }
        this.addAdmin = this.addAdmin.bind(this);
        this.editAdmin =this.editAdmin.bind(this);
    }

    editAdmin(id){
        this.props.history.push(`/update-admin/${id}`);
    }

    componentDidMount(){
        AdminService.getAdmins().then((res) => {
            this.setState({admins: res.data});
        });
    }

    addAdmin(){
        this.props.history.push("/add-admin");
    }
    render() {
        return (
            
            <div>
                <h2 className="text-center">Admin List</h2>
                <div className= "row">
                    <button className= "btn btn-primary" onClick={this.addAdmin}>Add Admin</button>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            
                                <th>Admin's Name</th>
                                <th>Email Address</th>
                                <th>Actions</th>
                            
                        </thead>
                        <tbody>
                            {
                                this.state.admins.map(
                                    admin =>
                                    <tr key = {admin.id}>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>
                                            <button onClick={() => this.editAdmin(admin.id)} className="btn btn-info">
                                            Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListAdmin;