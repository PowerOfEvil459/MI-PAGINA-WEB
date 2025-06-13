* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
}

header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 40px;
}

form input, form textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

button {
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: darkslategray;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
}
const boton = document.getElementById("botonCambiar");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
  texto.style.color = "red";
  texto.style.fontSize = "24px";
  texto.style.fontWeight = "bold";
});
