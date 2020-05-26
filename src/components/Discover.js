import React, { Component } from 'react'
import {Grid, Cell} from 'react-foundation'
import styled from 'styled-components'

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

            <Grid className="grid-padding-x ">
              <Cell medium={4}>
                <div className="container pad-top12">
                  <ul>
                    <div className="container-item">
                      <div className="card">
                        <li>
                          <h5>Earn Points</h5>
                          <p>
                            How many people will be asking questons? From
                            experience I can tell you there is nothing like
                            waliking into a room seeing nine people on the other
                            side of
                          </p>
                        </li>
                        <div>
                          <img
                            className="img-big"
                            src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                            alt=""
                          />
                          <img
                            className="img-small"
                            src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <li>
                        <h5>News</h5>
                        <p>
                          How many people will be asking questons? From
                          experience I can tell you there is nothing like
                          waliking into a room seeing nine people on the other
                          side of
                        </p>
                      </li>
                    </div>
                    <div className="container-item">
                      <div className="card pad-top12">
                        <li>
                          <h5>Jobs</h5>
                          <p>
                            How many people will be asking questons? From
                            experience I can tell you there is nothing like
                            waliking into a room seeing nine people on the other
                            side of
                          </p>
                        </li>
                        <div>
                          <img
                            className="img-big"
                            src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                            alt=""
                          />
                          <div className="small-box"></div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </Cell>
              <Cell medium={5}>
                <div className="container">
                  <ul>
                    <div className="container-item">
                      <div className="card">
                        <li className="pad-top12">
                          <h5>Music</h5>
                          <p>How many people will be asking questons? From</p>
                        </li>
                        <div>
                          <img
                            className="img-big"
                            src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                            alt=""
                          />
                          <img
                            className="img-small"
                            src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
<div className="container-item">
                    <div className="card pad-top12">
                      <li>
                        <h5>Videos</h5>
                        <p>
                          How many people will be asking questons? From
                          experience I can tell you there is nothing like
                          waliking into a room seeing nine people on the other
                          side of
                        </p>
                      </li>

                      {/* <div className="asset-img">
                        <img
                          className=" pad-4"
                          src={process.env.PUBLIC_URL + "/graphics/img-asset1.jpg"}
                          alt=""
                        />
                      </div> */}
                    </div>
                    </div>
                    <div className="container-item">
                      <div className="card pad-top12">
                        <li>
                          <h5>Weather</h5>
                          <p>
                            How many people will be asking questons? From
                            experience I can tell you there is nothing like
                            waliking into a room seeing nine people on the other
                            side of
                          </p>
                        </li>
                        <div>
                          <img
                            className="img-big pad-4"
                            src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </Cell>
              <Cell medium={3}>
                <div className="container pad-top12">
                  <ul>
                    <div className="container-item">
                      <div>
                        <img
                          className=""
                          src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                          alt=""
                        />
                        <div className="small-box-5"></div>
                      </div>
                    </div>
                  </ul>
                </div>
              </Cell>
            </Grid>
          </section>
        );
    }
}

export default Discover

// const StyledCard = styled.div`
// height: 63px;
// width: 63px;
// float: right;
// margin-top: 50%;
// `;