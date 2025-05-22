import TasksPage from "./Features/tasks/TasksPage";
import TaskPage from "./Features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./Features/author/AuthorPage";
import { Nav, NavList, NavItem, StyledNavLink } from "./styled";

export default () => (
  <HashRouter>
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/zadania" activeClassName="active">
            Zadania
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/autor" activeClassName="active">
            O autorze
          </StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
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
  </HashRouter>
);
