import React from 'react';
import { P2, P } from '../../styles';
import './accordion.css';
import styled from 'styled-components';


class AccordionItem extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    onClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <AccordionItemWrapper>
                <AccordionItemTextWrapper onClick={this.onClick}>
                    <P2 className={"accordion" + (this.state.open ? " open" : "")} >
                        {this.props.title}
                    </P2>
                </AccordionItemTextWrapper>
                <div className={"accordion-content" + (this.state.open ? " open" : "")}>
                    <AccordionItemTextWrapper>
                        <AccordionItemText className="accordion">{this.props.children}</AccordionItemText>
                    </AccordionItemTextWrapper>
                </div>
            </AccordionItemWrapper>
        );
    }
};


// Styles
const AccordionItemWrapper = styled.div`
    margin-top: 10px;
    border-top: solid 1px #c4c4c4;
    cursor: pointer;
`;

const AccordionItemTextWrapper = styled.div`
    padding: 10px;
`;

const AccordionItemText = styled(P)`
    color: #F9F9FE;
`;

export default AccordionItem;