import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import NoticeList from "../pages/Notice/NoticeList";
import EmployeeList from "../pages/User/Employee/EmployeeList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobSeeker from "../pages/User/Jobseeker/JobSeeker";
import Side from "./Side";
import JobSeekerRegister from "../pages/User/Jobseeker/JobSeekerRegister";
import TopSection from "./TopSection";
import { Route } from "react-router";
import NoticeAdd from "../pages/Notice/NoticeAdd";
import EmployerRegister from "../pages/User/Employer/EmployerRegister";

export default function Dashboard() {
  return (
    <div>
      <TopSection />
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Side />
            </Grid.Column>
            <Grid.Column width={11}>
              <Route exact path="/" component={NoticeList} />
              <Route exact path="/employers" component={EmployerList} />
              <Route exact path="/jobseeker" component={EmployeeList} />
              <Route exact path="/cvs" component={EmployerList} />
              <Route exact path="/noticeadd" component={NoticeAdd} />
              <Route
                exact
                path="/registerJobSeeker"
                component={JobSeekerRegister}
              />
              <Route
                exact
                path="/registerEmployer"
                component={EmployerRegister}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
