import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, Navbar, Nav, NavItem } from 'reactstrap';
import { CardMaker } from "./CardMaker.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./Cards.css";
library.add(faChevronDown);

export class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        fetch('./data/content.json')
            .then((res) => res.json())
            .then(data =>
                this.setState({
                    data: data.data
                }))
    }


    render() {
        // Function to make the individual cards
        let cards = this.state.cards === null ? [] : this.state.data.map((d, i) => {
            return (<CardMaker key={'div-' + i} data={d} />)
        });

        return (
            <div>
                <Col sm={{ size: 6, order: 2, offset: 3 }}>
                    <Navbar>
                        <Nav>
                            <NavItem>
                                <strong>"Hey Kyle, what are you doing after graduation?"</strong>
                            </NavItem>
                        </Nav>
                    </Navbar>

                    <Card body>
                        <CardBody>
                            <CardText>
                                A website that I built.  Not what you were expecting, was it?  Maybe you were anticipating a link to a video that accentuated with my witty sense of humor, or maybe you thought it was a link to a virus (in which case I have some serious questions for you).  <strong>If you’re here looking for a simple answer, then here you go:</strong> I don’t know what I’m doing after graduation.  No hard feelings if this is as far as you join me.
                            </CardText>
                            <div className="center-align">
                                <a href="#first" className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                            </div>
                        </CardBody>
                    </Card>

                    {cards}

                    {/* put final cards here*/}
                    <a id="thirteenth">
                        <Card body>
                            <CardBody>
                                <CardText>
                                    Below we see a basic element of any coding language, a function.  You can see that this function is called Kyle, followed by some parenthesis, an opening curly bracket (inside of which is the core of the function), two slashes and the sentence “do something cool”, and finally the closing curly bracket.  Inside the function (between the brackets) we can write code that the function will run, and it will ignore anything that starts with the two slashes (this is called a comment).  Right now the function does nothing since all that’s inside is a comment.
                            </CardText>
                                <CardText className="input">
                                    <code> function Kyle() &#123; <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;// do something cool <br></br>
                                        &#125;
                                    </code>
                                </CardText>
                                <div className="center-align">
                                    <a href="#fourteenth" className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                                </div>
                            </CardBody>
                        </Card>
                    </a>
                    <a id="fourteenth">
                        <Card body>
                            <CardBody>
                                <CardText>
                                    We can start making our function by putting something like a print statement inside.  Now if we use our function by writing Kyle() below the last curly bracket, it would print out the sentence “Hello World”.   Pretty readable so far.
                                </CardText>
                                <CardText className="input">
                                    <code>
                                        function Kyle() &#123; <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;print(“Hello World”) <br></br>
                                        &#125; <br></br>
                                        Kyle() <br></br>
                                    </code>
                                </CardText>
                                <CardText className="output">
                                    <code>
                                        Output: “Hello World”
                                    </code>
                                </CardText>
                                <div className="center-align">
                                    <a href="#fifteenth" className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                                </div>
                            </CardBody>
                        </Card>
                    </a>
                    <a id="fifteenth">
                        <Card body>
                            <CardBody>
                                <CardText>
                                    Now let’s introduce a parameter.  A parameter is something we add inside the parenthesis of a function name that essentially acts as a placeholder.  You can name a parameter whatever you like and reference it in your function in place of something you want to dynamically pass into the function.  As you can see below, our function has been updated to use a parameter, which I call WhatToPrint, and the function will now print whatever I pass in when I call it.
                                </CardText>
                                <CardText className="input">
                                    <code>
                                        function Kyle(WhatToPrint) &#123; <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;print(WhatToPrint) <br></br>
                                        &#125; <br></br>
                                        Kyle(“Print this!”)<br></br>
                                        Kyle(“Now this!”)<br></br>
                                    </code>
                                </CardText>
                                <CardText className="output">
                                    <code>
                                        Output: “Print this!” <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Now this!”
                                    </code>
                                </CardText>
                                <CardText>
                                With parameters, we can pass anything we want into a function and if we write the function well we can do some really cool stuff like make decisions between things, compute really hard math, or even animate things on a screen.
                                </CardText>

                                <div className="center-align">
                                    <a href="#sixteenth" className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                                </div>
                            </CardBody>
                        </Card>
                    </a>
                    <a id="sixteenth">
                        <Card body>
                            <CardBody>
                                <CardText>
                                My point here about parameters is that we are all very complex functions.  We all have hundreds of parameters that we’re using to make our own decisions about the future, and now, at the conclusion of my story, you know about many of the parameters I am using to inform my decision of what to do post-graduation.  <strong>After June 8th, I want to be doing something tech-related to support an organization whose sole purpose is to positively contribute to the human existence, in a location that makes me happy whether that’s Seattle, Austin, or somewhere new I have yet to explore.</strong>  Each piece of that sentence can be traced back to an experience I had that now serves as a parameter, dictating the output of the function I have written for myself.
                                </CardText>
                                <div className="center-align">
                                    <a href="#seventeenth" className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                                </div>
                            </CardBody>
                        </Card>
                    </a>
                    <a id="seventeenth">
                        <Card body className="seventeenth">
                            <CardBody>
                                <CardText>
                                    So that’s the end of the story I have to share.  You now know the context of why my answer is “I don’t know what I’m doing post-grad”, and hopefully you learned something along the way.  Before you leave, I have something I want to ask of you.  Something that I wish more people did, and something that will ease a lot of stress for my fellow graduating seniors.  The next time you feel compelled to ask a graduating senior about their plans post-graduation, consider instead asking them what parameters they are using in their decision.  I can guarantee you will walk away with a greater sense of context about the person in addition to stressing them out a little less.
                                </CardText>
                                <br></br>
                                <CardText>
                                    Thank you again for listening.
                                </CardText>
                                <br></br>
                                <CardText>
                                    -Kyle
                                </CardText>
                            </CardBody>
                        </Card>
                    </a>
                    <footer>
                        © 2019 Copyright&nbsp;
                        <a href="https://www.linkedin.com/in/kyle-e-simpson/" target="_blank">Kyle Simpson</a> &nbsp;&nbsp;
                        <a className="right" target="_blank" href="http://twitter.com/kyle_e_simpson">@kyle_e_simpson</a>
                    </footer>
                </Col>
            </div>
        )
    }
}