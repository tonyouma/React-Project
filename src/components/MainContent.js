import React, { Component, Fragment } from "react";
import {Grid, Cell} from 'react-foundation';
import Partners from "./Partners";
// import styled from "styled-components";
import Discover from "./Discover";

export class MainContent extends Component {
  
    render() {
         const partnersItem = [
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
             img: "../graphics/icons8-bbc-150.png",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
                img: "../graphics/facebook-logo.png",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
                img: "../graphics/pulse-live.png",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
             img: "../graphics/Unilever.png",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
                img: "../graphics/microsoft1.png",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
                img: "../graphics/icons8-bbc-150.png",
           },
           {
             caption:
               "How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people on the other side of the table.Second, what will you be asked.",
             img: "../graphics/Unilever.png",
           },
         ];
        return (
          <Fragment>
            {/* Homepage */}
            <Grid></Grid>
            <section className="home layout-pad">
              <Cell medium={3}>
                <a href="/">
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
                  <hr className="width-11 mar-left-0 yellow-7"></hr>
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
                <Cell
                  medium={4}
                  className="medium-offset-4 align-self-bottom"
                  small={6}
                >
                  <div className="menu float-right social-icons ">
                    <a href="https://www.facebook.com/brcknet">
                      <i class="fab fa-facebook-square"></i>
                    </a>{" "}
                    <a href="https://www.instagram.com/brcknet/">
                      <i class="fab fa-instagram"></i>
                    </a>{" "}
                    <a href="https://twitter.com/brcknet">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </Cell>
              </Grid>
            </section>
            {/* End of Homepage */}

            {/* Discover Moja */}
            <Discover />
            {/* end of Discover Moja */}

            {/* Connect to Moja */}
            <section className="connect layout-pad">
              <Grid>
                <Cell small={12} className="connect-content text-center">
                  <h2>how to connect to moja free WiFi</h2>
                  <hr className="width-10 yellow-5"></hr>
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
                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/graphics/ch.jpg"}
                        alt=""
                      />
                    </div>
                  </div>
                </Cell>
                <Cell medium={5} small={12}>
                  <div className="card">
                    <div className="card-body">
                      <span>02</span>
                      <h5>Connect To Moja Free WiFi</h5>
                      <hr className="width-3 mar-left-0 yellow-5"></hr>
                      <p>
                        How many people will be asking questions? From
                        experience I tell you there’s nothing like walking into
                        a room and seeing people on the other side of the table.
                        Second, what will you be asked.
                      </p>
                    </div>
                  </div>
                </Cell>
              </Grid>
              <Grid className="connect grid-padding-x ">
                <Cell medium={5} small={12} className="columns">
                  <div className="card">
                    <div className="card-body">
                      <span>03</span>
                      <h5 className="connect-steps">Enjoy Free Content, QR</h5>
                    </div>
                  </div>
                </Cell>
                <Cell medium={7} small={12}>
                  <div className="card">
                    <div className="card-body">
                      <span>04</span>
                      <h5 class="connect-steps">Click On ‘Go Online’</h5>
                    </div>
                  </div>
                </Cell>
              </Grid>
            </section>

            {/* End of Connect Section */}

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