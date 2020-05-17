import React from 'react'
import { Grid, Cell } from "react-foundation";

export default ({partnersItem}) => {
    
    return (
      <Grid className="layout-pad partners grid-padding-x ">
        {partnersItem &&
          partnersItem.map(({caption, img}, index) => (
            <Cell medium={3} small={12}>
              <div className="card">
                <img src={img} alt=""></img>
                <p>
                  {caption}
                </p>
              </div>
            </Cell>
          ))}
      </Grid>
    );
}

