import React from "react";

function FancyBorder(props) {
    return (<div className={'FancyBorder' + props.color}>{props.children}</div>)
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}


function WelcomeDailog(props) {
    return (<Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft! - WelcomeDailog.js will give you more details about containment/compostion/children"/>)
}

export default WelcomeDailog;
