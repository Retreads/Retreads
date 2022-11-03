import { createRoot } from 'react-dom/client';
import { ReactDOM } from "react-dom";
import React from "react";
/* const App = () => 
    {
    return(
        <h1>hola mundo</h1>
    );
}

export default App;
 */

const App = document.getElementById('app');
const root = createRoot(App); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
