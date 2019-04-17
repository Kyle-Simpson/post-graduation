import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import "./CardMaker.css";
library.add(faChevronDown);

export class CardMaker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:props.id,
            content:props.content
        }
    }

    render() {
        return (
            <div>
                <a id={this.props.data.curr_id}>
                <Card body id={this.props.data.id}>
                    <CardBody>
                        <CardText>
                            {this.props.data.content}
                        </CardText>
                        <div className="center-align">
                            <a href={"#"+this.props.data.next_id} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x"/></a>
                        </div>
                    </CardBody>
                </Card>
                </a>
            </div>
        )
    }
}