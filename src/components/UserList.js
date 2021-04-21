import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);
    // console.log(users);
    return (
        <ListGroup className="container mt-4">
        {users.length > 0 ? (
            <>
            {users.map(user => (
                <ListGroupItem className="" key={user.id}>
                    <span className="float-left mt-1"><strong>{user.name}</strong></span>
                    <div className="float-right">
                        <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm">Edit</Link>
                        <Button onClick={() => removeUser(user.id)} className="btn btn-danger btn-sm ml-2">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
            </>
        ) : (
            <h2 className="text-center">No Users</h2>
        )}
        </ListGroup>
    )
}
