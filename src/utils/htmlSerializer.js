import * as React from 'react';
import { getAnchor } from "./gql";

// -- Function to add unique key to props
function htmlSerializer(type, element, content, children, key) {
  switch (type) {
    case "heading2": // Heading 2
      return (
        <h2 key={key} id={getAnchor(children[0][0])}>{children}</h2>
      );
    default:
      // Always include a default that returns null
      return null;
  }
}

export default htmlSerializer;