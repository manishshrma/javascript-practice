//How Fetch function return the promises.

import { func } from "joi";
import { resolveInclude } from "ejs";

// where this response coming from.
example -
  fetch(someApi).then(function (response) {
    response.json();
  });
// how this may working(still need full clarity)

//   i think fetch function have some implementation which return the response which get passed in
//   resolve(response) like this.
