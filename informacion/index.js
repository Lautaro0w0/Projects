// const getUsuarios = () =>{
//     const data = fetch('https://jsonplaceholder.typicode.com/users').then(=>)
// };

// getUsuarios();

const user = document.querySelector("#name");
const email = document.querySelector("#email");
const website = document.querySelector("#webstie");
const address = document.querySelector("#address");
const zip = document.querySelector("#zip");

const getUsuarios = async () =>{
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(data[0]);

    username.innerHTML = data[0].name;
    email.innerHTML = data[0].email;
    website.innerHTML = data[0].website;

    address.innerHTML = data[0].address.street;
    zip.innerHTML = data[0].address.zipcode;
};

getUsuarios();