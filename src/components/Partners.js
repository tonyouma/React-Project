import React, {Component} from 'react'
import { Grid, Cell } from "react-foundation";
import CountUp from 'react-countup'
import {ProductConsumer} from './context'
import PartnersList from './PartnersList';

export default class Partners extends Component {
   render(){ 

    return (
      <section className="layout-pad partners grid-padding-x ">
        <Grid>
          <h2>
            <strong>moja</strong> <br></br> statistics
          </h2>
        </Grid>
        <Grid className="stats">
          <Cell medium={4}>
            <CountUp end={560000} duration={2.75} separator=","></CountUp>
            <hr/>
            <p>acive users</p>
          </Cell>
          <Cell medium={3}>
            <CountUp end={148} duration={2.75} separator=","></CountUp>
            <hr/>
            <p>routes covered</p>
          </Cell>
          <Cell medium={3}>
            <CountUp end={2700} duration={2.75} separator=","></CountUp>
            <hr/>
            <p>hotspots</p>
          </Cell>
          <Cell medium={2}>
            <CountUp end={865} duration={2.75} separator=","></CountUp>
            <hr/>
            <p>number of fixed hotspots</p>
          </Cell>
        </Grid>
        <Grid>
          <Cell>
            <h2>
              <strong>our</strong> <br></br> partners
            </h2>
          </Cell>
          <Cell medium={6} className="text-capitalize">
            <p className="p-text">
              How many people will be asking questions? From experience I can
              tell you there’s nothing like walking into a room and seeing nine
              people on the other side of the table.Second, what will you be
              asked.
            </p>
          </Cell>
        </Grid>

        <Grid className="grid-padding-x">
          <ProductConsumer>
            {(value) => {
              return value.partnersItem.map((item) => {
                return <PartnersList key={item.id} item={item} />;
              });
            }}
          </ProductConsumer>
        </Grid>
      </section>
    );
            }
}



