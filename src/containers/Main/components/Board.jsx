import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, critical } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card 
          value={getValue(cases)} 
          label="Total de casos" 
          color="#5d78ff" 
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          value={getValue(todayDeaths)}
          label="Mortes ocorridas hoje"
          color="#E95078"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          value={getValue(recovered)}
          label="casos recuperados"
          color="#67C887"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          value={getValue(deaths)}
          label="Total de mortes"
          color="#F7B829"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          value={getValue(todayCases)}
          label="casos ocorridos hoje"
          color="#000"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          value={getValue(critical)}
          label="Em estado critico"
          color="#dc6134"
        />
      </Grid>
    </Grid>
  )
}

export default memo(Board)