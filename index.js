// Add your code here
const formData = {
    name: "Steve",
    email: "steve@steve.com"
}

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
        document.body.innerHTML = object["id"];


})


    .catch(function (error) {
      alert("Did not work!");
      console.log(error.message);
      document.body.innerHTML = error.message;
      
    

    });

   
    
}
submitData();