
import {useState} from 'react';


import { Form, Button } from "react-bootstrap"


const Addform = () =>{


    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", phone:"", address:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {name, email} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

     return (

        
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Add New Employee
            </Button>
        </Form>

     )
}

export default Addform;