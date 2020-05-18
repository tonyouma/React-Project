import React, { Component, Fragment } from "react";
import {Grid, Cell} from 'react-foundation';
import Partners from "./Partners";
import styled from "styled-components";
import Discover from "./Discover";

export class MainContent extends Component {
  
    render() {
         const partnersItem = [
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
           }
           
         ];
        return (
          <Fragment>
            {/* Homepage */}
            <Grid></Grid>
            <section className="home layout-pad">
              <Cell medium={3}>
                <a>
                  <img
                    src={process.env.PUBLIC_URL + "/graphics/Moja-black.png"}
                    alt="logo"
                  ></img>
                </a>
              </Cell>
              <Cell medium={10} small={12} className="home-content">
                <h1>
                  we're the ones
                  <span> connecting everyone to the internet</span>
                  <hr></hr>
                </h1>
              </Cell>
              <Grid>
                <Cell medium={5} small={12}>
                  <p>
                    How many people will be asking questions? From experience I
                    can tell you there’s nothing like walking into a room and
                    seeing nine people on the other side of the table.Second,
                    what will you be asked.
                  </p>
                </Cell>
              </Grid>
              <Grid>
                <Cell medium={4} className="align-justify" small={6}>
                  <a href="https://play.google.com/store/apps/details?id=com.brck.moja&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <img
                      src={process.env.PUBLIC_URL + "/graphics/Group 3.jpg"}
                      alt="google-logo"
                    />
                  </a>
                </Cell>
                <Cell medium={4} className="medium-offset-4" small={6} >
                  <ul className="menu float-right social-icons align-self-bottom">
                    <a href="https://www.facebook.com/brcknet">
                      <i class="fas fa-facebook-square"></i>
                    </a>{" "}
                    <a href="https://www.instagram.com/brcknet/">
                      <i class="fas fa-instagram"></i>
                    </a>{" "}
                    <a href="https://twitter.com/brcknet">
                      <i class="fas fa-twitter"></i>
                    </a>
                  </ul>
                </Cell>
              </Grid>
            </section>
            {/* End of Homepage */}

            {/* Discover Moja */}
            <Discover/>
            {/* end of Discover Moja */}

            {/* Connect to Moja */}
            <div className="connect layout-pad">
              <Grid>
                <Cell small={12} className="connect-content text-center">
                  <h2>how to connect to moja</h2>
                  <hr></hr>
                  <p>
                    How many people will be asking questions? From experience I
                    can tell you there’s nothing like walking into a room and
                    seeing nine people on the other side of thetable.Second,
                    what will you be asked.
                  </p>
                </Cell>
              </Grid>
              <Grid className="grid-padding-x">
                <Cell medium={7} small={12} columns>
                  <div className="card">
                    <img
                      src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                      alt=""
                    />
                  </div>
                </Cell>
                <Cell medium={5} small={12}>
                  <div className="card">
                    <div className="card-body">
                      {" "}
                      <span class="connect-0">02</span>
                      <p class="connect-steps">
                        Connect To Moja Free WiFi
                        <span class="connect-steps-02">
                          How many people will be asking questions? From
                          experience I tell you there’s nothing like walking
                          into a room and seeing people on the other side of the
                          table. Second, what will you be asked.
                        </span>
                      </p>
                    </div>
                  </div>
                </Cell>
              </Grid>
              <Grid className="connect grid-padding-x ">
                <Cell medium={5} small={12} className="columns">
                  <div className="card">
                    <div class="card connect-card">
                      <div className="card-body">
                        {" "}
                        <span class="connect-0">03</span>
                        <p className="connect-steps">Enjoy Free Content, QR</p>
                      </div>
                    </div>
                  </div>
                </Cell>
                <Cell medium={7} small={12}>
                  <div className="card">
                    <div class="card connect-card">
                      <div class="card-body">
                        {" "}
                        <span class="connect-0">04</span>
                        <p class="connect-steps">Click On ‘Go Online’</p>
                      </div>
                    </div>
                  </div>
                </Cell>
              </Grid>
            </div>

            <Partners partnersItem={partnersItem}></Partners>

            <Grid className="subscription layout-pad">
              <Cell medium={5} small={12} className="medium-offset-1">
                <h5>subscribe to our newsletter</h5>
                <p>
                  BRCK is starting a quarterly newsletter and we would love to
                  keep you updated on all of the exciting developments at BRCK
                </p>
              </Cell>
              <Cell
                medium={5}
                small={12}
                className="medium-offset-1 align-self-middle"
              >
                <div className="input-group">
                  <input
                    className="input-group-field"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="input-group-button">
                    <input
                      type="submit"
                      className="button yellow-button"
                      value="SUBSCRIBE"
                    />
                  </div>
                </div>
              </Cell>
            </Grid>
          </Fragment>
        );
    }
}

export default MainContent;

// const hrStyled = styled.hr`
//   clear: both;
//   max-width: 75rem;
//   height: 5px;
//   margin: 1.25rem auto;
//   border-top: 0;
//   border-right: 0;
//   border-bottom: 1px solid #cacaca;
//   border-left: 0;
//   width: 20%;
// `;