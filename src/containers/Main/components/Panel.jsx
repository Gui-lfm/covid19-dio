import React, { memo } from "react";
import RefreshIcon from "../../../assets/img/refresh.svg";
import {
  Typography,
  Card,
  Button,
  Select,
  MenuItem,
} from "../../../components";
import COUNTRIES from "../../../commons/constants/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";


const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, todayDeaths, recovered } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        {country.flag}
      </ItemStyled>
      
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - 
    total de casos: ${cases} 
    recuperados: ${recovered} 
    mortes ocorridas hoje: ${todayDeaths}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do covid-19 - ${country}`,
      text: textCovid19,
      url: "https://covid19-dio-pwa.vercel.app/",
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  let listaOrdernada = COUNTRIES.sort((a, b)=> {

    return (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)
  })

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="p">
            Painel Coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="secondary">
            Atualizado em: {updateAt}
          </Typography>
          <img src={RefreshIcon} alt="Atualizar dados" onClick={()=>getCovidData(country)} style={{cursor: "pointer", paddingLeft: '5px'}}/>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {listaOrdernada.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
