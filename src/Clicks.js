import React, { useState } from 'react';

function StatefulHello() {
  const [timesClicked, updateTimesClicked] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>The button inside this component was clicked {timesClicked} times</h2>
      <button
         type="button"
         onClick={() => updateTimesClicked(timesClicked + 1)}
      >
        Update
      </button>
    </div>
  );
}

export default StatefulHello;
