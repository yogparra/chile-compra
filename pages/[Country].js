import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Copyright from "../src/Copyright";
import { DataGrid } from '@material-ui/data-grid';
import { buscarUnPais } from "../pages/api/pais";

const PaisItem = () => {
  const { query: { Country } } = useRouter();
  const [ unPais, setUnPais] = useState(null);
  
  useEffect(() => {
    (async () => {
      const respuesta = await buscarUnPais(Country);
      console.log(respuesta);
      setUnPais(respuesta || []);
    })();
  }, []);

  const columns = [
    { field: 'Active', headerName: 'Casos Activos', type: 'number', width: 150 },
    { field: 'Deaths', headerName: 'Muertes', type: 'number', width: 120 },
    { field: 'Recovered', headerName: 'Recuperados', type: 'number', width: 150 },
    { field: 'Date', headerName: 'Fecha', type: 'date', width: 140 },
  ];

  
  /*
  const rows = [
    { id: 1, Active: 25, Deaths: 11, Recovered: 2, Date: '2020-01-23' },
    { id: 2, Active: 100, Deaths: 20, Recovered: 8, Date: '2020-01-24' },
    { id: 3, Active: 80, Deaths: 24, Recovered: 12, Date: '2020-01-25' },
    { id: 4, Active: 35, Deaths: 25, Recovered: 20, Date: '2020-01-26' },
    { id: 5, Active: 55, Deaths: 9, Recovered: 27, Date: '2020-01-27' },
    { id: 6, Active: 60, Deaths: 17, Recovered: 32, Date: '2020-01-28' },
    { id: 7, Active: 65, Deaths: 26, Recovered: 21, Date: '2020-01-29' },
    { id: 8, Active: 75, Deaths: 85, Recovered: 14, Date: '2020-01-11' },
    { id: 9, Active: 75, Deaths: 85, Recovered: 14, Date: '2020-01-11' },
    { id: 10, Active: 75, Deaths: 85, Recovered: 14, Date: '2020-01-11' },
    { id: 11, Active: 75, Deaths: 85, Recovered: 14, Date: '2020-01-11' },
  ];
  */

 const rows = unPais;
  
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
      <br />
        Chile Compra
      <br />        
      </Typography>
      <Typography variant="h5" component="h2">
        {Country}
      <br />
      </Typography>

      { !unPais ? null :
      <div style={{ height: 700, width: '50%'}}>
        <DataGrid 
          columns={columns} 
          rows={rows} 
          pageSize={10} />
      </div>        
      }
      <Copyright />
    </Container>
  );
};

export default PaisItem;


/*
columns={[{ field: 'Active' }, { field: 'Deaths' }, { field: 'Recovered' }, { field: 'Date' }]}

 { !paises ? null : paises.map(({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
          <Grid item xs={12} sm={6} md={4}>
            <ReportCard
              ID={ID}
              Country={Country}
              TotalConfirmed={TotalConfirmed}
              TotalDeaths={TotalDeaths}
              TotalRecovered={TotalRecovered} 
            />
          </Grid>
))}

{ !paises ? null : paises.map(({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
         
))}

*/