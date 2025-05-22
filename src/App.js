import TasksPage from "./Features/tasks/TasksPage";
import TaskPage from "./Features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./Features/author/AuthorPage";
import { StyledNavLink } from "./styled";


export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
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
