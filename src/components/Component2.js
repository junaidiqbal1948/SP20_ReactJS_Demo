import React from "react";

const FunBased = () => {
    return <h3>Function Based Component</h3>
}

class MyComp2 extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <p>Value: {this.props.value}</p>
                <FunBased />
            </div>
        );
    }
}

export default MyComp2;