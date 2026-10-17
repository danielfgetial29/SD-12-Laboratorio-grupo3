// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

// Agrega un usuario nuevo con un id secuencial (el id más alto + 1).
export function addUser(first_name, last_name, email) {
  // 1. Pedir la lista actual para saber cuál es el id más alto.
  return fetch(getServerURL() + "/users")
    .then(response => response.json())
    .then(users => {
      const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);

      // 2. Envia el usuario nuevo con POST.
      return fetch(getServerURL() + "/users", {
        method: "POST",
        body: JSON.stringify({
          id: maxId + 1,
          first_name: first_name,
          last_name: last_name,
          email: email
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });
    });
}