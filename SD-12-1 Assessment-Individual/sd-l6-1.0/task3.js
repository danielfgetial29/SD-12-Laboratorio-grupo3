// Task 3: addUser(first_name, last_name, email)


import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
    const newUser = {
        id: 6,
        first_name,
        last_name,
        email
    };

    const response = await fetch(`${getServerURL()}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    if (!response.ok) {
        throw new Error("No se pudo agregar el usuario");
    }

    const createdUser = await response.json();
    console.log(createdUser);
}