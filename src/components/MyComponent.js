import React from "react";

import MyComp2 from "./Component2";

function CompVar() {
    const alertMe = (msg) => {
        alert(msg);
    }
    const val = 10;
    return (
        <div>
            <MyComp2 text="Text to be displayed" value={val} />
            <MyComp2 text="2nd Time Called" value={78} />
            <img src="https://bmc.edu.pk/wp-content/uploads/2019/03/doctor-red-1.png" />
            <h1>This is basic Comp Multiline</h1>
            <h2>This is child Comp</h2>
            <button onClick={() => { alertMe('Called from onClick') }} >Button 1</button>
            <button
                onClick={() => { alertMe('Called from onClick') }} >Button 2</button>
        </div>
    );
};

export default CompVar;