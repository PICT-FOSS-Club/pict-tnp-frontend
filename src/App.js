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
import UpdatePassword from "./pages/student/UpdatePassword";
import ResetPassword from "./pages/student/ResetPassword";
import ForgotPassword from "./pages/student/ForgotPassword";
import StudentCompanyTable from "./pages/student/StudentCompanyTable";
import AdminStudentTable from "./pages/admin/AdminStudentList";

function App() {
  // const [user, setUser] = useState(["student","admin"]);
  // const UserContext = React.createContext(user);

  // const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <Routes>
        <Route index path="*" element={<LoginForm />} />
        <Route path="admin" element={<AdminSidebar />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="student-table" element={<AdminStudentTable />} />
          <Route path="company-table" element={<StudentCompanyTable />} />
          {/* <Route path="changePassword" element={<StudentCompanyTable />} /> */}
        </Route>
        {/* }else if(user == "Student"){ */}
        <Route path="student" element={<StudentSidebar />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="password/update" element={<UpdatePassword />} />
          <Route path="password/forgot" element={<ForgotPassword />} />
          <Route path="password/reset/:token/:id" element={<ResetPassword />} />
          <Route path="company-table" element={<StudentCompanyTable />} />
        </Route>
        {/* } */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
