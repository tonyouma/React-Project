import React from 'react'
import { Grid, Cell } from "react-foundation";

export default ({partnersItem}) => {
    
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
        <Grid className=" grid-padding-x ">
          {partnersItem &&
            partnersItem.map(({ caption, img, id }, index) => (
              <Cell medium={3} small={12}>
                <div className="card">
                  <div className="card-image">
                    <img
                      src={img}
                      alt="partnerLogo"
                    ></img>
                  </div>
                  <div className="card-section">
                    <p>{caption}</p>
                  </div>
                </div>
              </Cell>
            ))}
        </Grid>
      </section>
    );
}

