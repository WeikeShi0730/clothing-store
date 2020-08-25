import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateTOProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateTOProps)(Directory);
