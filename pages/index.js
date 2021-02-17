import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReportCard from "../src/ReportCard";
import Copyright from "../src/Copyright";
import { buscarPaises } from "../pages/api/pais";

export default function Index() {
  const [paises, setPaises] = useState(null);

  useEffect(() => {
    (async () => {
      const respuesta = await buscarPaises();
      console.log(respuesta);
      setPaises(respuesta || []);
    })();
  }, []);

  const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  });

  const classes = useStyles();

  return (
    <Container maxWidth="lg">      
      <Typography variant="h4" component="h1" component="p" colorPrimary>
      <br />
        Chile Compra
      <br />
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
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
      </Grid>
      <br />      
      <Copyright />
    </Container>
  );
}

/*
{paises ? paises[1].Country : 'Loading...'}

paises && (
        <span>
          Ess {paises[0].ID}
        </span>
      )  


{paises.length === 0
        ? `Rol: Sin Identificar`
        : `Rol: Con Identificar`
      }


 <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chile Compra
        </Typography>        
        <Copyright />
      </Box>
    </Container>

import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Box from "@material-ui/core/Box";
<Link href="/about" color="secondary">
  Go to the about page
</Link>
<ProTip />

        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>

*/

/*
{paises.Countries.map(({ ID, Country, NewConfirmed, NewDeaths, NewRecovered }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card
              ID={ID}
              Country={Country}
              NewConfirmed={NewConfirmed}
              NewDeaths={NewDeaths}
              NewRecovered={NewRecovered} 
            />
          </Grid>
        ))}
*/
