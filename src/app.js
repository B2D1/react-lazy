import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";

// import Blog from "./views/blog";
// import Landing from "./views/landing";
// import Shop from "./views/shop";

// import Blog from './views/blog';
const Blog = React.lazy(() => import("./views/blog"));

// import Landing from './views/landing';
const Landing = React.lazy(() => import("./views/landing"));

// import Shop from './views/shop';
const Shop = React.lazy(() => import("./views/shop"));

const App = () => (
  <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/blog"}>blog</Link>
          </li>
          <li>
            <Link to={"/shop"}>shop</Link>
          </li>
        </ul>
      </nav>
    </header>

    <hr />

    <React.Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

const appNode = document.getElementById("app");

ReactDOM.render(<App />, appNode);
