import React from "react";
import SetupFilter from "./SetupFilter";
import SetupResource from "./SetupResource";
import {SetupsContextProvider} from "./context";

class App extends React.Component {



  render() {
    return (
      <div>
        <div>
          <SetupsContextProvider>
            {/*}<SetupFilter/>*/}
            <SetupResource/>
          </SetupsContextProvider>
        </div>
      </div>
    );
  }
}

export default App;
