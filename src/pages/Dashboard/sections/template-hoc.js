import React, { useEffect } from 'react';
import useStyles from '../../../MUIstyles/dashboard.template';
import dotenv from 'dotenv';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
  } from "@apollo/client";
dotenv.config();
const baseUrl = process.env.REACT_APP_backend_api_url_local;
const GRAPHQL_URL = baseUrl + '/gql/template';
const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
});
console.log(client);

export const Template = (DefaultTemplate,data) => {

    const classes = useStyles();
    const query = gql`
    {
        templates{
          template_id,
          title,
          theme{
            color,
            bgColor,
          },
          created_by
        }
      }
    `;

    const [query_data,setQuery_data] = React.useState([])

    useEffect(()=> {
        client.query({
            query:query
        }).then(result => {
            setQuery_data(result.data.templates)
        });
    },[query])
    console.log("gql query data -------->",query_data);
    
    return (<DefaultTemplate classes = {classes} data ={query_data} name={data}/>)
}

