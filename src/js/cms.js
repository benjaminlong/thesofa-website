// import React from "react";
import CMS from "netlify-cms-app";

var CategoriesControl = createClass({
  handleChange: function(e) {
    const separator = this.props.field.get('separator', ', ')
    this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
  },

  render: function() {
    console.log("HERE");
    const separator = this.props.field.get('separator', ', ');
    var value = this.props.value;
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value ? value.join(separator) : '',
      onChange: this.handleChange,
    });
  },
});

var CategoriesPreview = createClass({
  render: function() {
    return h('ul', {},
      this.props.value.map(function(val, index) {
        return h('li', {key: index}, val);
      })
    );
  }
});

var schema = {
  properties: {
    separator: { type: 'string' },
  },
}

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);

// Import main site styles as a string to inject into the CMS preview pane
// import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";
//
import HomePreview from "./cms-preview-templates/home";
// import HeroPreview from "./cms-preview-templates/hero";
// import PostPreview from "./cms-preview-templates/post";
// import ProductsPreview from "./cms-preview-templates/products";
// import ValuesPreview from "./cms-preview-templates/values";
// import ContactPreview from "./cms-preview-templates/contact";

// CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("hero", HeroPreview);

// var HeroPreview = createClass({
//   render: function() {
//     var entry = this.props.entry;
//     var image = entry.getIn(['data', 'hero']);
//     var bg = this.props.getAsset(image);
//     return h('div', {},
//       h('h1', {}, entry.getIn(['data', 'title'])),
//       h('div', {"className": "text"}, this.props.widgetFor('body'))
//     );
//   }
// });
// CMS.registerPreviewTemplate("hero", HeroPreview);

// CMS.registerPreviewTemplate("post", PostPreview);
// CMS.registerPreviewTemplate("products", ProductsPreview);
// CMS.registerPreviewTemplate("values", ValuesPreview);
// CMS.registerPreviewTemplate("contact", ContactPreview);
// CMS.init();
