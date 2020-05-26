import React, {Component} from 'react'
import { Grid, Cell } from "react-foundation";
import CountTo from 'react-count-to'
import styled from 'styled-components'
import {partnersItem} from './data'
import {ProductConsumer} from './context'
import PartnersList from './PartnersList';

export default class Partners extends Component {
  //  state = {
  //    products : partnersItem
  //  };
   render(){ 

    return (
      <section className="layout-pad partners grid-padding-x ">
        <Grid>
          <h2>
            <strong>moja</strong> <br></br> statistics
          </h2>
          {/* const fn = value => <span>{value}</span> */}
        </Grid>
        <Grid className="stats">
          <Cell medium={4}>
            <CountTo to={560000} speed={3600}></CountTo>
            <hr />
            <p>acive users</p>
          </Cell>
          <Cell medium={3}>
            <CountTo to={148} speed={3600}></CountTo>
            <hr />
            <p>routes covered</p>
          </Cell>
          <Cell medium={3}>
            <CountTo to={2700} speed={3600}></CountTo>
            <hr />
            <p>hotspots</p>
          </Cell>
          <Cell medium={2}>
            <CountTo to={865} speed={3600}></CountTo>
            <hr />
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



