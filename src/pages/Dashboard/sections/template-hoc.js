import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useStyles from '../../../MUIstyles/dashboard.template';

export const Template = (DefaultTemplate,data) => {

    const classes = useStyles();

    return (<DefaultTemplate classes = {classes} name={data}/>)
}

