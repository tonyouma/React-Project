import React, { Component, Fragment } from "react";
import {Grid, Cell} from 'react-foundation'
import { Link } from "react-router-dom";
// import {Grid} from 'react-foundation'

export class footer extends Component {
    render() {
        return (
          <Fragment>
            <footer className="layout-pad">
              <Grid>
                <Cell medium={4}>
                  <img
                    src={process.env.PUBLIC_URL + "/graphics/Moja-black.png"}
                    alt=""
                  />
                  <p>CONNECTING EMERGING MARKETS<br></br> TO THE MARKETS</p>
                </Cell>
                <Cell medium={4}>
                  <h4>Solving hard problems</h4>
                  <p>
                    We do hard things. As we grow, we do so in fits and starts,
                    lurching forward then back, sometimes looking more like
                    clowns than seekers.
                  </p>
                  <hr className="width-50"/>
                </Cell>
                
              </Grid>
              <Grid>
                <Cell medium={2}>
                  <img src={process.env.PUBLIC_URL + "/graphics/logo.svg"} alt="logo"/>
                </Cell>
                <Cell className="medium-offset-2" medium={2} small={6}>
                  <h5>Office</h5>
                  <hr/>
                  <li>2nd Floor, Bishop Magua Center,</li>
                  <li>George Padmore Lane</li>
                  <li>Nairobi, Kenya</li>
                </Cell>
                <Cell medium={2} small={6}>
                  <h5>talk to us</h5>
                  <hr/>
                  <li>
                    General:{" "}
                    <Link to="mailto:" className="">
                      info@brck.com 
                      </Link>
                  </li>
                  <li>
                    Media:
                    <Link to="mailto:">
                      press@brck.com
                    </Link>
                  </li>
                  <li>Tel: +254 718 272 887</li>
                  <li>P.O Box 27178-00100</li>
                  <li>Nairobi, Kenya</li>
                </Cell>
                <Cell medium={2} small={6}>
                  <h5>other sites</h5>
                  <hr/>
                  <li>brck.com</li>
                  <li>magma.com</li>
                </Cell>
                <Cell medium={2} small={6}>
                  <h5>social</h5>
                  <hr/>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </Cell>
              </Grid>

              <Grid className="pad-copyright">
                <Cell medium={4} small={12}>
                  Copyright © 2019 BRCK inc. All rights reserved
                </Cell>
                <Cell medium={4}>
                  <Link to="#!">Warranty | Terms of Use & Privacy Policy</Link>
                </Cell>
                <Cell medium={2}>Made in Kenya</Cell>
              </Grid>
            </footer>
          </Fragment>
        );
    }
}

export default footer;