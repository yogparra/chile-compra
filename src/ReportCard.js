import React from "react";
import Link from "next/link";
import PaisesCard from "./PaisesCard"

const ReportCard = ({ ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }) => {
  
  const Card = React.forwardRef(
    ({ href, onClick, ID, Country, TotalConfirmed, TotalDeaths, TotalRecovered }, ref) => {
      return (
        <a onClick={onClick}>
          <PaisesCard
            ID={ID}
            Country={Country}
            TotalConfirmed={TotalConfirmed}
            TotalDeaths={TotalDeaths}
            TotalRecovered={TotalRecovered} 
          />
        </a>
      );
    }
  );

  return (
   
      <div>
          <Link key={ID} href="/[Country]" as={`/${Country}`} passHref>
            <Card
              ID={ID}
              Country={Country}
              TotalConfirmed={TotalConfirmed}
              TotalDeaths={TotalDeaths}
              TotalRecovered={TotalRecovered}
            />
          </Link>
      </div>  
  );
};

export default ReportCard;
