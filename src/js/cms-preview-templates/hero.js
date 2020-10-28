import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class HeroPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let hero = getAsset(entry.getIn(["data", "hero"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    // if (image && !image.fileObj) {
    //     image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    // }

    return <div>Hello Hero</div>
  }
}
