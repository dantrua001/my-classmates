'use client'
import Image from "next/image";

import React, { useState } from "react";

const People = [
    { name: "Sue", favoriteFood: "Pizza", favoriteColor: "Blue" },
    { name: "Bob", favoriteFood: "Sushi", favoriteColor: "Green" },
    { name: "Charlie", favoriteFood: "Burgers", favoriteColor: "Red" }
];

const Card = ({ person }) => {
    const [likes, setLikes] = useState(0);

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
            <h2>{person.name}</h2>
            <p>Favorite Food: {person.favoriteFood}</p>
            <p>Favorite Color: {person.favoriteColor}</p>
            <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <h1>People List</h1>
            {People.map((person, index) => (
                <Card key={index} person={person} />
            ))}
        </div>
    );
};

export default App;

