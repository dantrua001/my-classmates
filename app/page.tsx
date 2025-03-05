'use client'

import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import DataTable from 'datatables.net-dt';
import 'bootstrap/dist/css/bootstrap.min.css';



const MyClassmate = () => {
    const [people, setPeople] = useState([
        // Test data to check functionality of the components
        { name: "Susan", favoriteFood: "Pizza", favoriteColor: "Red", likes:0 },
        { name: "Bob", favoriteFood: "Sushi", favoriteColor: "Pink", likes: 0 },
        { name: "Steve", favoriteFood: "Green Beans", favoriteColor: "Chartreuse", likes:0 },
        { name: "Louis", favoriteFood: "Apples", favoriteColor: "Silver", likes:0 }
    ]);

    const [newPerson, setNewPerson] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
    const [error, setError] = useState("");
    //const [likes, setLikes] = useState(0);
    let tableInstance = null;
    const [editingIndex, setEditingIndex] = useState(null);

    
    // Allows DataTable to update in realtime
    useEffect(() => {
        if (tableInstance) {
            tableInstance.destroy();
        }
        tableInstance = new DataTable('#peopleTable');
    }, [people]);

    const handleChange = (e) => {
        setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
    };

    const handleLike = (index) => {
        setPeople(people.map((person, i) => i === index ? { ...person, likes: person.likes + 1 } : person));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newPerson.name || !newPerson.favoriteFood || !newPerson.favoriteColor) {
            setError("All fields are required.");
            return;
        }
        if (editingIndex !== null) {
            const updatedPeople = [...people];
            updatedPeople[editingIndex] = newPerson;
            setPeople(updatedPeople);
            setEditingIndex(null);
        } else {
            setPeople([...people, newPerson]);
        }
        setNewPerson({ name: "", favoriteFood: "", favoriteColor: "" });
        setError("");
    };

    const handleEdit = (index) => {
        setNewPerson(people[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        setPeople(people.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>People List</h1>
            <Form onSubmit={handleSubmit} className="m-3">
                <Form.Group className="mb-2">
                    <Form.Control type="text" name="name" placeholder="Name" value={newPerson.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="text" name="favoriteFood" placeholder="Favorite Food" value={newPerson.favoriteFood} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="text" name="favoriteColor" placeholder="Favorite Color" value={newPerson.favoriteColor} onChange={handleChange} />
                </Form.Group>
                {error && <p className="text-danger">{error}</p>}
                <Button type="submit" variant="success" size="sm">{editingIndex !== null ? "Update Person" : "Add Person"}</Button>
            </Form>

            <Table id="peopleTable" striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Favorite Food</th>
                        <th>Favorite Color</th>
                        <th>Likes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.favoriteFood}</td>
                            <td>{person.favoriteColor}</td>
                            <td>{person.likes}</td>
                            <td>
                                <Button variant="outline-primary" size="sm" onClick={() => handleLike(index)}>Like</Button>{' '}
                                <Button variant="outline-warning" size="sm" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
         
};

export default MyClassmate;

/* 
    Creates the card components. Each component has the student name, favorite food, and favorite color, listed vertically.
    Underneath the mapped information are two buttons, like and love. Each button can track its clicks individually.
    Added accordion tabs
*/

/*
const Card = ({ person }) => {
    // Sets up the likes and loves states, with zero being the default
    const [likes, setLikes] = useState(0);
    const [loves, setLoves] = useState(0);
    // Uses Stack to format the components with accordian tabs for each classmate
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>{person.name}</Accordion.Header>
                <Accordion.Body>
                    <Stack gap={2} className="border p-2 m-2 rounded">
                        <h2>{person.name}</h2>
                        <p>Favorite Food: {person.favoriteFood}</p>
                        <p>Favorite Color: {person.favoriteColor}</p>
                        <Button variant="outline-primary" size="sm" onClick={() => setLikes(likes + 1)}>Like ({likes})</Button>
                        <Button variant="outline-secondary" size="sm" onClick={() => setLoves(loves + 1)}>Love ({loves})</Button>
                    </Stack>

                </Accordion.Body>

            </Accordion.Item>
        
        </Accordion>
    );
};

/*
    Sets my classmates as a header, then maps the contents of the people array over the components
*/




