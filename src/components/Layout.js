import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <h2>Snapshot</h2>
        <Search />
        <Navbar />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
