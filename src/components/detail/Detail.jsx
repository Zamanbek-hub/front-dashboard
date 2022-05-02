import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import DoughnutChart from './doughnut_report/DoughnutChart';
import LineChart from "./line_report/LineChart";
import TableReport from "./table_report/TableReport";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Detail() {
  return (
      <div className="container-fluid">
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid item xs={4}>
                      <Item><DoughnutChart style={{height: 515}}/></Item>
                  </Grid>
                  <Grid item xs={8}>
                      <Item><LineChart/></Item>
                  </Grid>
                  <Grid item xs={12}>
                      <Item><TableReport /></Item>
                  </Grid>
              </Grid>
          </Box>
      </div>
      // <div className="container-fluid">
      //     <div className="row" >
      //         <div className="col-4">
      //           <DoughnutChart style={{height: 500}}/>
      //         </div>
      //         <div  className="col-8">
      //             <LineChart/>
      //         </div>
      //     </div>
      //     <br/>
      //     <div className="row">
      //         <div className="col-12" style={{height: 400}}>
      //
      //             <TableReport />
      //         </div>
      //     </div>
      // </div>
  )
}