import Tasks from "./Features/tasks/Tasks";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Author from "./Features/autor/Autor";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">Strona główna</Route>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
