import React from "react";

import Hero from "../hero/Hero";
// import OrganizationList from "../organizations/OrganizationList";
import OrganizationSlider from "../organizations/OrganizationSlider";
import HowItWorks from "../home/HowItWorks";
import Connections from "../home/Connections";
import ImpactingPrograms from "../home/ImpactingPrograms";

const Home = () => (
  <div>
    <Hero/>
    <div className="heroOrganizationSlider container-fluid mt-5">
      <OrganizationSlider />
    </div>

    <HowItWorks/>
    <ImpactingPrograms/>
    <Connections/>
  </div>
);

export default Home;
