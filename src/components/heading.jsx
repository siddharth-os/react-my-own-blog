import React from "react";
import Typography from '@mui/material/Typography';

function Heading(props){
    return(
        <Typography sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
        {props.isH2 ? <h2 style={{textAlign:"center",margin:"1rem auto 0 auto"}}>{props.heading}</h2>: <h3 style={{textAlign:"center",margin:"1rem auto 0 auto"}}>{props.heading}</h3>}
        </Typography>
    );
}
export default Heading;