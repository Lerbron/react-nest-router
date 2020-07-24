import React from "react";
import { Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "routes/withSubRoute";

const About = ({ routes }) => {
  return (
    <div>
      About page
      <div>
        <Link to="/about/me">Me</Link> |
        <Link to="/about/company"> Company</Link>
      </div>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default About;