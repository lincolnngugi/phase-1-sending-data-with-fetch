// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    const newId = document.createElement("p");
    newId.textContent = `ID: ${data.id}`;
    document.body.appendChild(newId);
  })
  .catch(error => {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMsg);
  });
}