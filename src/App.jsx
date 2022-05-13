const App= () => {
  const persona={
    nombre:"Thor",
    Raza:"Asgardiano",
    Apellido:"Odinson",
    Edad:1500,
    
    direccion:{
      Calle:"Asgar",
      numExt:618,
      numIn:"",
      ciudad:"Asgar",
    }
  };

const contactoPersona={
  telefono:"24232425",
  email:"noobmaster69@gmail.com",
  web:"stormbreaker.com",
};

const infoPersona = {...persona, ...contactoPersona, empresa: "Marvel"};
infoPersona.apodo="Dios del Trueno"

  const {Edad, nombre, Apellido}= persona;
  const {Calle, numExt, ciudad}= persona.direccion;
  const humanos=["Odin", "Gea", "Balder", "Loki"];
  const [padre, madre, hermano, hermana]=humanos;
  const mascotas = ["Tanngnjóstr", "Tanngrisnir"];

  const familia =[...humanos, ...mascotas, "Sturluson"];
  console.log(familia)


  return(
  <div className="App">
    {}
    <h3>{`Mi nombre es ${nombre} ${Apellido}, tengo ${Edad} años y vivo en ${Calle} numero ${numExt}, ${ciudad}`}</h3>
   <br />
   {"Mi familia lo conforman: "}
   <ul>
     <li>{`Mi padre: ${padre}`}</li>
     <li>{`Mi madre: ${madre}`}</li>
     <li>{`Mi hermanos: ${hermano} y ${hermana}`}</li>

   </ul>
  </div>
);

}

export default App;
