

import { Route, Routes } from "react-router-dom";

//common
import LoginForm from "./authentication/signIn";
import Team from "./components/utilities/Team";
import Footer from "./components/utilities/Footer";

//auth
import ForgotPassword from "./authentication/ForgotPassword";
import RequireAuth from "./authentication/RequireAuth";

//admin/auth
import AdminUpdatePassword from "./authentication/admin/AdminUpdatePassword";
import AdminResetPassword from "./authentication/admin/AdminResetPassword";

//admin/dashboard
import AdminSidebar from "./components/adminDashboard/AdminSidebar";
import AdminDashboard from "./pages/admin/AdminDashboard";

//admin/student
import AdminStudentTable from "./pages/admin/student/AdminStudentTable";
import PlacedStudentTable from "./pages/admin/student/PlacedStudentTable";
import AdminStudentDetails from "./pages/admin/student/AdminStudentDetails";
import AdminStudentRoundTable from "./pages/admin/student/AdminStudentRoundTable";

//admin/company
import BasicForm from "./pages/admin/Company/addCompany/BasicForm";
import AddJobOpen from "./pages/admin/Company/addCompany/AddJobOpen";
import AdminCompanyTable from "./pages/admin/Company/AdminCompanyTable";
import AdminCompanyDetails from "./pages/admin/Company/AdminCompanyDetails";

//admin/report
import GenerateReport from "./pages/admin/GenerateReport";

//student/auth
import StudentResetPassword from "./authentication/student/StudentResetPassword";
import StudentUpdatePassword from "./authentication/student/StudentUpdatePassword";
import Unauthorized from "./authentication/Unauthorized";


//student/dashboard
import StudentSidebar from "./components/studentDashboard/StudentSidebar";
import StudentDashboard from "./pages/student/StudentDashboard";

//student/profile
import StudentProfile from "./pages/student/StudentProfile";

//student/company
import StudentCompanyTable from "./pages/student/StudentCompanyTable";
import CompanyDetails from "./pages/student/CompanyDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="*" element={<LoginForm />} />
        <Route path="team" element={<Team />} />
        <Route path="password/forgot" element={<ForgotPassword />} />
        <Route
          path="admin/password/reset/:token/:id"
          element={<AdminResetPassword />}
        />

        <Route element={<RequireAuth allowedRoles="admin" />}>
          <Route path="admin" element={<AdminSidebar />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="student-table" element={<AdminStudentTable />} />
            <Route path="placedStudents" element={<PlacedStudentTable />} />
            {/* <Route path="student-filter" element={<StudentFilter />} /> */}
            <Route path="company-table" element={<AdminCompanyTable />} />
            <Route path="add-company" element={<BasicForm />} />
            <Route path="add-job" element={<AddJobOpen />} />
            <Route path="generate-report" element={<GenerateReport />} />
            <Route path="student/profile/:studentId" element={<AdminStudentDetails />} />
            <Route path="company/details/:jobId" element={<AdminCompanyDetails />} />
            <Route
              path="student-round-table/:companyName/:jobName/:listType/:roundNo/:jobId"
              element={<AdminStudentRoundTable />}
            />
            <Route path="password/update" element={<AdminUpdatePassword />} />
          </Route>
        </Route>

        <Route
          path="student/password/reset/:token/:id"
          element={<StudentResetPassword />}
        />

        <Route element={<RequireAuth allowedRoles="student" />}>
          <Route path="student" element={<StudentSidebar />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="password/update" element={<StudentUpdatePassword />} />
            <Route path="company-table" element={<StudentCompanyTable />} />
            <Route path="company/details/:jobId" element={<CompanyDetails />} />
          </Route>
        </Route>

        <Route path="unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
