import React from "react";

import MyComp2 from "./Component2";

function CompVar() {
    const alertMe = (msg) => {
        alert(msg);
    }
    return (
        <div>
            <MyComp2 />
            <h1>This is basic Comp Multiline</h1>
            <h2>This is child Comp</h2>
            <button onClick={() => { alertMe('Called from onClick') }} >Button 1</button>
            <button
                onClick={() => { alertMe('Called from onClick') }} >Button 2</button>
        </div>
    );
};

export default CompVar;