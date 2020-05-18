import React, { Component } from 'react'
import {Grid, Cell} from 'react-foundation'

class Discover extends Component {
    render() {
        return (
          <section className="layout-pad discover-section">
            <Grid>
              <Cell medium={3}>Introduction</Cell>
              <Cell medium={4}>Introduction</Cell>
            </Grid>
            <Grid>
              <Cell medium={4}>
                <ul>
                  <li>
                    <h5>Earn points</h5>
                    <p>
                      How many people will be asking questons? From experience I
                      can tell you there is nothing like waliking into a room
                      seeing nine people on the other side of
                    </p>
                  </li>
                </ul>
              </Cell>
              <Cell medium={4}>
                <ul>
                  <li>
                    <h5>Music</h5>
                    <p>How many people will be asking questons? From</p>
                  </li>
                </ul>
              </Cell>
            </Grid>
            <Grid>
              <Cell medium={4}>
                <ul>
                  <li>
                    <h5>News</h5>
                    <p>
                      How many people will be asking questons? From experience I
                      can tell you there is nothing like waliking into a room
                      seeing nine people on the other side of
                    </p>
                  </li>
                </ul>
              </Cell>
              <Cell medium={4}>
                <ul>
                  <li>
                    <h5>Videos</h5>
                    <p>
                      How many people will be asking questons? From experience I
                      can tell you there is nothing like waliking
                    </p>
                  </li>
                </ul>
              </Cell>
            </Grid>
            <Grid>
              <Cell medium={4}>
                <ul>
                  <li>
                    <h5>Jobs</h5>
                    <p>
                      How many people will be asking questons? From experience I
                      can tell you there is nothing like waliking 
                    </p>
                  </li>
                </ul>
              </Cell>
              <Cell medium={4}>
                <ul>
                  <li>
                    <h5>Weather</h5>
                    <p>
                      How many people will be asking questons? From experience I
                      can tell you there is nothing like waliking into a room
                      seeing nine people on the other side of
                    </p>
                  </li>
                </ul>
              </Cell>
              <Cell medium={4} className="text-right">
               image goes here
              </Cell>
            </Grid>
          </section>
        );
    }
}

export default Discover
