import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MainContentContainer from '../../../ui/MainContentContainer'
import PriceBar from '../../PriceBar'
import NatcomSummary from './NatcomSummary'
import NatcomCards from './NatcomCards'

const useStyles = makeStyles({
  
  root:
  {
    marginTop: '20px',
    backgroundColor: '#f8f8f8',
  },
  
});

const NatComCardData = [
  {
    name: "UNICEF France",
    amtETH: 50
  }, 
  {
    name: "UNICEF Australia",
    amtETH: 50
  },
  {
    name: "UNICEF USA",
    amtBTC: 5
  }
]


export default function Natcoms() {
  const classes = useStyles();
  return (
    <MainContentContainer className={classes.root}>
      <PriceBar />
      <NatcomSummary />
      <NatcomCards ncomdata={NatComCardData}/>
    </MainContentContainer>
        )
}