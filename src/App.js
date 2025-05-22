import TasksPage from "./Features/tasks/TasksPage";
import TaskPage from "./Features/tasks/TaskPage";
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./Features/author/AuthorPage";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/zadania">
            Zadania
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/autor">
            O autorze
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
//11:59
