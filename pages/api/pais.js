export async function buscarPaises() {
  try {

    //const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_HOST_1}`, {
      
    const response = await fetch(`https://api.covid19api.com/summary`, {  
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await response.json();
    return respuesta.Countries;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function buscarUnPais( pais ) {
  try {

    //console.log("ruta: "+`${process.env.NEXT_PUBLIC_ENV_HOST_2}/${pais}`);
    //const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_HOST_2}/${pais}`, {

    const response = await fetch(`https://api.covid19api.com/country/${pais}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await response.json();
    console.log(respuesta)

    const nuevaRespuesta = await mappedPaisDetalle(respuesta);
    return nuevaRespuesta

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function mappedPaisDetalle(respuesta) {
  let paisMapperArray = respuesta;
  let pais = [];

  //Active
  //Deaths
  //Recovered
  //Date

  paisMapperArray.forEach((paisMapperArray,i) => {
    pais.push({
      id: i,
      Active: paisMapperArray.Active,
      Deaths: paisMapperArray.Deaths,
      Recovered: paisMapperArray.Recovered,
      Date: paisMapperArray.Date
    });
  });

  //console.log(pais);
  return pais;
}
