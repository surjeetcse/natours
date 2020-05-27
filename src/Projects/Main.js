import React, { Component } from "react";

import SectionAbout from "./Section/SectionAbout";
import SectionFeatures from "./Section/SectionFeatures";
import SectionTours from "./Section/SectionTours";
import SectionStories from "./Section/SectionStories";
import SectionBook from "./Section/SectionBook";


class Footer extends Component {
    
    render() {
        let url="url";
      return (
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBook />
      </main>
      );
    }
  };
  export default Footer;