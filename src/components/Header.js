import React, { Component, Fragment } from "react";
// import { Accordion } from "react-foundation-sites-6/lib/accordion/Accordion";
import {Grid, Cell} from 'react-foundation'

class header extends Component {
    render() {
        return (
          <Fragment>
            <Grid>
              <Cell medium={6}>Medium 6</Cell>
              <Cell medium={6}>Medium 6</Cell>
            </Grid>
          </Fragment>
        );
    }
}

export default header;