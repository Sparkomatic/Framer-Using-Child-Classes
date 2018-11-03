import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const BlueBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  &:hover {
    background-color: ${(p: Partial<Props>) => p.hoverColor};
  }
`;
interface Props {
    blueText: string;
    hoverColor: string;
    backgroundColor: string;
    width: number;
    height: number;
  }
export class BlueComponent extends React.Component<Props> {

    constructor(props) 
    { 
        super(props); 
        this.state = { color : '#4cb96b' }; 
    } 

    // Set default properties
    static defaultProps = {
        blueText: "Hello Blue Component",
        backgroundColor: "blue",
        hoverColor: "purple",
        width: 160,
        height: 48,
      };

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        blueText: { type: ControlType.String, title: "Text" },
    }

    render() {
        return <BlueBox
        backgroundColor={this.props.backgroundColor}
        hoverColor={this.props.hoverColor}
        height={this.props.height}
        width={this.props.width}
        >{this.props.blueText}</BlueBox>;
        }
}
