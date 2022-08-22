import AdminSidebar from "./components/adminDashboard/AdminSidebar";
import "./App.css";
import StudentSidebar from "./components/studentDashboard/StudentSidebar";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
// import LandingPage from "./pages/LandingPage";
import Footer from "./components/utilities/Footer";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import LoginForm from "./authentication/signIn";
// import AdminStudentList from "./pages/admin/AdminStudentList";
import AdminStudentDetails from "./pages/admin/AdminStudentDetails";
import AdminCompanyDetails from "./pages/admin/AdminCompanyDetails";
import AdminStudentRoundTable from "./pages/admin/AdminStudentRoundTable";
import StudentUpdatePassword from "./pages/student/StudentUpdatePassword";
import AdminUpdatePassword from "./pages/admin/AdminUpdatePassword";
import StudentResetPassword from "./pages/student/StudentResetPassword";
import AdminResetPassword from "./pages/admin/AdminResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import StudentCompanyTable from "./pages/student/StudentCompanyTable";
import AdminStudentTable from "./pages/admin/AdminStudentTable";
import AdminCompanyTable from "./pages/admin/AdminCompanyTable";
import Team from "./components/utilities/Team";
import CompanyDetails from "./pages/student/CompanyDetails";
import StudentFilter from "./pages/admin/StudentFilterTable";
import PlacedStudentTable from "./pages/admin/PlacedStudentTable";
import RequireAuth from "./authentication/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import CompanyForm from "./pages/admin/CompanyForm";
import BasicForm from "./pages/admin/addCompany/BasicForm";
import AddJobOpen from "./pages/admin/addCompany/AddJobOpen";

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
            <Route path="student-filter" element={<StudentFilter />} />
            <Route path="company-table" element={<AdminCompanyTable />} />
            <Route path="add-company" element={<BasicForm />} />
            <Route path="add-job" element={<AddJobOpen />} />
            <Route path="student/profile" element={<AdminStudentDetails />} />
            <Route path="company/details" element={<AdminCompanyDetails />} />
            <Route
              path="student-round-table"
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
            <Route path="company/details" element={<CompanyDetails />} />
          </Route>
        </Route>

        <Route path="password/forgot" element={<ForgotPassword />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
