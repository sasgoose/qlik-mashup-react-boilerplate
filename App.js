import React, { useEffect } from "react";

import qlikLoader from "./qlik";

const App = () => {
  useEffect(() => {
    qlikLoader
      .then(qlik => {
        // You can now use the qlik APIs
        // qlik.openApp('some app id')
      })
      .catch(err => console.log(err));
  });

  return <main className="mashup">Mashup</main>;
};

export default App;
