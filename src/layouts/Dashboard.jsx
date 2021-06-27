import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import NoticeList from "../pages/Notice/NoticeList";
import EmployeeList from "../pages/User/Employee/EmployeeList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobSeekerList from "../pages/User/Jobseeker/JobSeekerList";
import Side from "./Side";
import JobSeekerRegister from "../pages/User/Jobseeker/JobSeekerRegister";
import TopSection from "./TopSection";
import { Route } from "react-router";
import NoticeAdd from "../pages/Notice/NoticeAdd";
import EmployerRegister from "../pages/User/Employer/EmployerRegister";
import { ToastContainer } from "react-toastify";
import CvList from "../pages/CV/CvList";
import NoticeDetail from "../pages/Notice/NoticeDetail";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
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
              <Route exact path="/jobseeker" component={JobSeekerList} />
              <Route exact path="/cvs/:id" component={CvList} />
              <Route exact path="/noticeadd" component={NoticeAdd} />
              <Route exact path="/noticedetail/:id" component={NoticeDetail} />
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
