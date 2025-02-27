'use client'

import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const People = [
    // Test data to check functionality of the components
    { name: "Susan", favoriteFood: "Pizza", favoriteColor: "Red" },
    { name: "Bob", favoriteFood: "Sushi", favoriteColor: "Pink" },
    { name: "Steve", favoriteFood: "Green Beans", favoriteColor: "Chartreuse" }
];


/* 
    Creates the card components. Each component has the student name, favorite food, and favorite color, listed vertically.
    Underneath the mapped information are two buttons, like and love. Each button can track its clicks individually.
    Added accordion tabs
*/
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
                        <Button variant="outline-danger" size="sm" onClick={() => setLoves(loves + 1)}>Love ({loves})</Button>
                    </Stack>

                </Accordion.Body>

            </Accordion.Item>
        
        </Accordion>
    );
};

/*
    Sets my classmates as a header, then maps the contents of the people array over the components
*/
const MyClassmate = () => {
    return (
        <div>
            <h1>My Classmates</h1>
            {People.map((person, index) => (
                <Card key={index} person={person} />
            ))}
        </div>
    );
};

export default MyClassmate;

