import Home from "./pages/home/home";
<<<<<<< HEAD
=======
import GetInvolved from "./pages/get_involved/get_involved"
import BusinessMoreInfo from "./pages/get_involved/business_more_info"
import OperationsMoreInfo from "./pages/get_involved/operations_more_info"
import EngineeringMoreInfo from "./pages/get_involved/engineering_more_info"
import Cars from "./pages/cars/cars"
>>>>>>> dev
import Sponsors from "./pages/sponsors/sponsors"
import BecomeSponsors from "./pages/sponsors/becomeSponsors";
import Team from "./pages/meet_the_team/team";
import ScrollToTop from "./components/scroll_to_top/scroll_to_top";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recruiting from "./pages/recruiting/recruiting";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/become-sponsors" element={<BecomeSponsors />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
=======
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/meet-the-team" element={<Team/>}/>
          {/* <Route path="/history" /> */}
          <Route path="/sponsors" element={<Sponsors/>}/>
          <Route path="/become-sponsors" element={<BecomeSponsors/>} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/business-more-info" element={<BusinessMoreInfo/>} />
          <Route path="/get-involved/operations-more-info" element={<OperationsMoreInfo/>} />
          <Route path="/get-involved/engineering-more-info" element={<EngineeringMoreInfo/>} />
          <Route path="/cars" element={<Cars/>}/>
        </Routes>
>>>>>>> dev
    </Router>
  )
}

export default App
