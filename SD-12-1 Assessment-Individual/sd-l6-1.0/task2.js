/* Task 2: listUsers()

const URL_API = "localhost:3000/users"

export async function listUsers () {
    try {
        const respuesta = await fetch (URL_API);
        if (!respuesta.ok) {
            throw new Error(`${respuesta.status}`);
        }
            const users = await respuesta.json();
            users.forEach((usuario,id) => console.log(`${users.first_name} ${users.last_name} - ${users.email}`));

        } catch (error) {
            console.error(error);
        }
}

listUsers();

*/

//Task 2: listUsers()


import { getServerURL } from "./task1.js";


export async function listUsers() {
    const response = await fetch(`${getServerURL()}/users`);
    if (!response.ok) {
        throw new Error("No se pudo obtener la lista de usuarios");
    }
    const users = await response.json();
    console.log("[");
    users.forEach((user, index) => {
        console.log("{");
        console.log(`  id: ${user.id},`);
        console.log(`  first_name: '${user.first_name}',`);
        console.log(`  last_name: '${user.last_name}',`);
        console.log(`  email: '${user.email}'`);
        console.log(index < users.length - 1 ? "}," : "}");
    });
    console.log("]");
}

