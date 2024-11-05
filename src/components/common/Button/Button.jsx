import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { isPressed: false }
    };


handleMouseDown = () => {
    this.setState({ isPressed: true});
}

handleMouseUp = () => {
    this.setState({ isPressed: false});
}

render() {
    const {
        variant = 'primary',
        size = 'medium',
        disabled = false,
        onClick,
        children
    } = this.props


const buttonClasses = `
      button 
      button--${variant} 
      button--${size}
      ${this.state.isPressed ? 'button--pressed' : ''}
      ${disabled ? 'button--disabled' : ''}
    `.trim();

    return (
        <button
          className={buttonClasses}
          onClick={onClick}
          disabled={disabled}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={() => this.setState({ isPressed: false })}
        >
          {children}
        </button>
      );
    }
}
  