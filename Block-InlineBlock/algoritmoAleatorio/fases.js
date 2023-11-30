const integrantes = {
    data: [
      { nombre: "Nacional", estado: "activo" },
      { nombre: "Millonarios", estado: "activo" },
      { nombre: "America", estado: "activo" },
      { nombre: "Cali", estado: "activo" },
      { nombre: "Tolima", estado: "activo" },
      { nombre: "Medellin", estado: "activo" },
      { nombre: "Santa Fe", estado: "activo" },
      { nombre: "Patriotas", estado: "activo" },
      { nombre: "Pasto", estado: "activo" }
    ]
  };
  
  function randomMatrix(array) {
    function compare() {
      return Math.random() - 0.5;
    }
    const newArray = array.slice();
    newArray.sort(compare);
    return newArray;
  }
  
  const integrantesAleatorios = randomMatrix(integrantes.data);
  console.log("Integrantes Aleatorios:");
  console.log(integrantesAleatorios);
  
  function imprimirFase(equipos) {
    for (let i = 0; i < equipos.length; i += 2) {
      const equipo1 = equipos[i];
      const equipo2 = equipos[i + 1];
  
      if (equipo2) {
        console.log(equipo1.nombre + " VS " + equipo2.nombre);
      } else {
        const equipoAleatorio = obtenerEquipoAleatorio(equipos);
        console.log(equipo1.nombre + " VS " + equipoAleatorio.nombre);
      }
  
      console.log("------------------");
    }
  }
  
  function obtenerEquipoAleatorio(equipos) {
    const equiposActivos = equipos.filter(equipo => equipo.estado === "activo");
    const equipoAleatorio = equiposActivos[Math.floor(Math.random() * equiposActivos.length)];
    return equipoAleatorio;
  }
  
  console.log("PRIMERA FASE");
  imprimirFase(integrantesAleatorios);
  
  for (let i = 0; i < integrantesAleatorios.length; i += 2) {
    integrantesAleatorios[i].estado = "perdio";
  }
  
  console.log("SEGUNDA FASE");
  const equiposActivos = integrantesAleatorios.filter(equipo => equipo.estado === "activo");
  
  
  if (equiposActivos.length % 2 !== 0) {
    const equipoEnEspera = { nombre: "En Espera", estado: "activo" };
    equiposActivos.push(equipoEnEspera);
  }
  
  const equiposConEsperaAleatorios = randomMatrix(equiposActivos);
  imprimirFase(equiposConEsperaAleatorios);
  
  for (let i = 0; i < equiposActivos.length; i += 2) {
    equiposActivos[i].estado = "perdio";
  }
  
  const equiposActivosF = equiposActivos.filter(equipo => equipo.estado === "activo");
  console.log("FINAL");
  
  imprimirFase(equiposActivosF.slice(0, 2));
  