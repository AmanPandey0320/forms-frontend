import React, { useEffect } from "react";
import useStyles from "./styles";
import dotenv from "dotenv";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { useSelector } from "react-redux";
dotenv.config();
const baseUrl = process.env.REACT_APP_backend_api_url_local;
const GRAPHQL_URL = baseUrl + "/gql/template";
const link = createHttpLink({
  uri: GRAPHQL_URL,
  credentials: "include",
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
// console.log(client);

export const Template = (DefaultTemplate, data) => {
  const classes = useStyles();
  const util = useSelector((state) => state.util);
  console.log(util);
  const query = gql`
    {
      templates {
        template_id
        title
        theme {
          color
          bgColor
        }
        created_by
      }
    }
  `;

  const [query_data, setQuery_data] = React.useState([]);

  useEffect(() => {
    client
      .query({
        query: query,
      })
      .then((result) => {
        console.log("gql res template---->", result);
        setQuery_data(result.data.templates);
      });
  }, [query]);
  console.log("gql query data -------->", query_data);

  return <DefaultTemplate classes={classes} data={query_data} name={data} />;
};
