import React, { Component } from 'react';

export default class CustomSlide  extends Component {
    render() {
        const styles = {
            slide: {
              margin: "auto",
              height: "100vh",
              width: "100%",
            }
          };
        const { ...props } = this.props;
            return (
                <div>
                    <img alt={""} {...props} style={styles.slide} />
                </div>
            )
}
}