import React, { Component } from 'react'
import {Grid, Cell} from 'react-foundation'

class Discover extends Component {
    render() {
        return (
          <section className="layout-pad discover-section">
            <Grid className="discover-section-intro">
              <Cell medium={3}>
                <h2>
                  <strong>Discover</strong> <br></br> Moja
                </h2>
              </Cell>
              <Cell medium={4}>
                <p>
                  How many people will be asking questions? From experience I
                  can tell you there’s nothing like walking into a room and
                  seeing nine people on the other side of the table.Second, what
                  will you be asked.
                </p>
              </Cell>
            </Grid>
            <Grid className = "grid-margin-x">
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
            <Grid className = "grid-margin-x">
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
            <Grid className = "grid-margin-x">
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
