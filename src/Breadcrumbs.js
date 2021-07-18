import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";


const vidsById = {};
const DynamicUserBreadcrumb = ({ match }) => (
  <span>{vidsById[match.params.videoId]}</span>
);
const routes = [{ path: "/section/:videoId", breadcrumb: DynamicUserBreadcrumb }];

const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
    <div>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <span key={match.url}>
          <NavLink to={match.url}>{breadcrumb}</NavLink>{" > "}
        </span>
      ))}
    </div>
  ));
  

export default Breadcrumbs;