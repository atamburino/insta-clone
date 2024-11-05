import React, { Component } from 'react';
import Button from '../../common/Button/Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    
    try {
      // Login logic here
      await this.props.onLogin(this.state.email, this.state.password);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          placeholder="Password"
        />
        
        {/* Primary button usage */}
        <Button 
          variant="primary" 
          size="medium"
          disabled={this.state.isLoading}
          onClick={this.handleSubmit}
        >
          {this.state.isLoading ? 'Logging in...' : 'Login'}
        </Button>
        
        {/* Secondary button usage */}
        <Button 
          variant="secondary" 
          size="small"
          onClick={() => this.props.onCancel()}
        >
          Cancel
        </Button>
      </form>
    );
  }
}

export default LoginForm;