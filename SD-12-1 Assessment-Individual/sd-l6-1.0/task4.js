// Task 4: delUser(number)


import { getServerURL } from "./task1.js";


export async function delUser(id) {
    const response = await fetch(${getServerURL()}/users/${id}, {
        method: "DELETE"
    });

    if (!response.ok) {
        console.error(No se pudo eliminar el usuario ${id});
    }
}





/* python -m pytest test.py */