import React, { Component } from 'react';
import { Carousel, Glyphicon } from 'react-bootstrap';
import './ReactBootstrap.css';

export default class TestCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    renderItems() {
      return this.props.items.map((item) => (
        <Carousel.Item>
            <img src={item.original} />
        </Carousel.Item>
    ));
    }

    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={5}
          className={this.props.class}>
          {this.renderItems()}
        </Carousel>
      );
    }
  }