import React, {Component} from 'react'
import { Grid, Cell } from "react-foundation";
import {partnersItem} from './data'
import {ProductConsumer} from './context'
import PartnersList from './PartnersList';

export default class Partners extends Component {
   state = {
     products : partnersItem
   };
   render(){ 

    return (
      <section className="layout-pad partners grid-padding-x ">
        <Grid>
          <h2>
            <strong>moja</strong> <br></br> statistics
          </h2>
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
                return <PartnersList key = {item.id} item={item} />;
              });
            }}
          </ProductConsumer>
        </Grid>
      </section>
    );
            }
}

