import React, { Component } from 'react';
import SimpleRating from './SimpleRating';

export default class CustomSlide extends Component {
    render() {
        const styles = {
            slide: {
              margin: "auto",
              height: "90vh",
              width: "100%",
            },
            slideCaption: {
                position: "absolute",
                zIndex: 2,
                top: "47%",
                left: "26%",
                backgroundColor: "rgba(199,202,204, 0.3)",
                fontSize: "3rem",
                color: "#fff"
            }
          };
        const { ...props } = this.props;
        
            return (
                <div className="slide">
                    <img alt={""} {...props} style={styles.slide} />
                    <div style={styles.slideCaption}>
                        {(this.props.rating === true) ? <SimpleRating /> : null} 
                    </div>
                </div>
            )
}
}