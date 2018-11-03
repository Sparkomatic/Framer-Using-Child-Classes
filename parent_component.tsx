import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { BlueComponent } from "./blue_component";
import { GreenComponent } from "./green_component";

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};

// Define type of property
interface Props {
    text: string;
    blueText: string;
    greenText: string;
    hoverColor: string;
    backgroundColor: string;
    backgroundColorHover: string;
    width: number;
    height: number;
}

export class parent_component extends React.Component<Props> {

    constructor(props) 
    { 
        super(props); 
    } 

    // Set default properties
    static defaultProps = {
    blueText: "this is blue",
    greenText: "this is green",
    text: "Hello World!",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    blueText: { type: ControlType.String, title: "Blue Text" },
    greenText: { type: ControlType.String, title: "Green Text" },
    }

    render() {
    const { ...otherProperties } = this.props;
    return <div>
        <div>{this.props.text}</div>
        <div>
        <GreenComponent {...otherProperties}></GreenComponent>
        </div>
        <div>
        <BlueComponent {...otherProperties}></BlueComponent>
        </div>
    </div>
    }
}
