import React, {Component} from 'react';
import ReactPasswordStrength from 'react-password-strength';

export default class Password extends Component {
  state = { passLength: 0 }

  render() {
    const inputProps = {
      placeholder: "Try a password...",
      autoFocus: true,
    };

    return (
        <ReactPasswordStrength
          className="CustomInput"
          minLength={6}
          inputProps={{ ...inputProps }}
        />
    );
  }
}