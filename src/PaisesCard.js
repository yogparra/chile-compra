import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({     
    title: {
        fontSize: 14
    }   
});

export default function PaisesCard({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Nombre del pais
        </Typography>
        <Typography variant="h5" component="h2">
          {Country}
        </Typography>        
        <Typography variant="body2" component="p">
          <br />
          Total de casos confirmado: {TotalConfirmed}.
          <br />
          Total de casos muertes {TotalDeaths}.
          <br />
          Total de casos recuperados {TotalRecovered}.
          <br />
        </Typography>
      </CardContent>      
    </Card>
  );
}

/*
<CardActions>
    <Button size="small">Learn More</Button>
</CardActions>
*/