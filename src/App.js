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

function App() {
  // const [user, setUser] = useState(["student","admin"]);
  // const UserContext = React.createContext(user);

  // const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <Routes>
        <Route index path="*" element={<LoginForm />} />
        <Route path="team" element={<Team />} />
        <Route path="password/forgot" element={<ForgotPassword />} />
        <Route path="admin/password/reset/:token/:id" element={<AdminResetPassword />} />
        <Route path="admin" element={<AdminSidebar />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="student-table" element={<AdminStudentTable />} />
          <Route path="student-filter" element={<StudentFilter />} />
          <Route path="company-table" element={<AdminCompanyTable />} />
          <Route path="student/profile/:studentId" element={<AdminStudentDetails />} />
          <Route path="company/details/:companyId" element={<AdminCompanyDetails />} />
          <Route path="password/update" element={<AdminUpdatePassword />} />
        </Route>

        <Route path="student/password/reset/:token/:id" element={<StudentResetPassword />} />
        <Route path="student" element={<StudentSidebar />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="password/update" element={<StudentUpdatePassword />} />
          <Route path="company-table" element={<StudentCompanyTable />} />
          <Route path="company/details/:companyId" element={<CompanyDetails />} />
        </Route>
        <Route path="password/forgot" element={<ForgotPassword />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
