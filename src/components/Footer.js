import React, { Component, Fragment } from "react";
import {Grid, Cell} from 'react-foundation'
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
                  <span>Solving hard problems</span>
                  <p>
                    We do hard things. As we grow, we do so in fits and starts,
                    lurching forward then back, sometimes looking more like
                    clowns than seekers.
                  </p>
                  <hr className="width-50"/>
                </Cell>
                
              </Grid>
              <Grid>
                <Cell className="medium-offset-4" medium={2} small={6}>
                  <span>Office</span>
                  <hr/>
                  <li>2nd Floor, Bishop Magua Center,</li>
                  <li>George Padmore Lane</li>
                  <li>Nairobi, Kenya</li>
                </Cell>
                <Cell medium={2} small={6}>
                  <span>talk to us</span>
                  <hr/>
                  <li>
                    General:{" "}
                    <a href="mailto:" className="">
                      info@brck.com
                    </a>
                  </li>
                  <li>
                    Media:{" "}
                    <a href="mailto:" class="white-text">
                      press@brck.com
                    </a>
                  </li>
                  <li>Tel: +254 718 272 887</li>
                  <li>P.O Box 27178-00100</li>
                  <li>Nairobi, Kenya</li>
                </Cell>
                <Cell medium={2} small={6}>
                  <span>other sites</span>
                  <hr/>
                  <li>brck.com</li>
                  <li>magma.com</li>
                </Cell>
                <Cell medium={2} small={6}>
                  <span>social</span>
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
                  <a href="#!">Warranty | Terms of Use & Privacy Policy</a>
                </Cell>
                <Cell medium={2}>Made in Kenya</Cell>
              </Grid>
            </footer>
          </Fragment>
        );
    }
}

export default footer;