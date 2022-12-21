import React from "react";
import Typography from '@mui/material/Typography';

function SmallHeading(props){
    return(
        <Typography sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            {props.heading}
        </Typography>
    );
}
export default SmallHeading;