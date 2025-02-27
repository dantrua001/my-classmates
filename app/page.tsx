'use client'

import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const People = [
    { name: "Sue", favoriteFood: "Pizza", favoriteColor: "Blue" },
    { name: "Bob", favoriteFood: "Sushi", favoriteColor: "Green" },
    { name: "Charlie", favoriteFood: "Burgers", favoriteColor: "Red" }
];

const Card = ({ person }) => {
    const [likes, setLikes] = useState(0);
    
    return (
        <Stack gap={2} className="border p-2 m-2 rounded">
            <h2>{person.name}</h2>
            <p>Favorite Food: {person.favoriteFood}</p>
            <p>Favorite Color: {person.favoriteColor}</p>
            <Button  variant="outline-primary" onClick={() => setLikes(likes + 1)}>Like ({likes})</Button>
        </Stack>
    );
};

const App = () => {
    return (
        <div>
            <h1>My Classmates</h1>
            {People.map((person, index) => (
                <Card key={index} person={person} />
            ))}
        </div>
    );
};

export default App;

