import React from 'react';
import DoughnutChart from './doughnut_report/DoughnutChart';
import LineChart from "./line_report/LineChart";
import TableReport from "./table_report/TableReport";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Detail() {
  return (
      <div className="container-fluid">
          <div className="row" >
              <div className="col-4">
                <DoughnutChart style={{height: 500}}/>
              </div>
              <div  className="col-8">
                  <LineChart/>
              </div>
          </div>
          <br/>
          <div className="row">
              <div className="col-12" style={{height: 400}}>

                  <TableReport />
              </div>
          </div>
      </div>
  )
}