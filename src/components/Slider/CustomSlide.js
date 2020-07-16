import React, { Component } from 'react';
import SimpleRating from './SimpleRating';
import Card from './Card';

export default class CustomSlide extends Component {
    render() {
        const styles = {
            slide: {
              margin: "auto",
              height: "90vh",
              position: "relative",
              objectFit: "cover",
            },
            slideCaption: {
                position: "absolute",
                zIndex: 2,
                top: "47%",
                left: "26%",
                backgroundColor: "rgba(199,202,204, 0.8)",
                fontSize: "3rem",
                color: "#fff"
            }
          };
        const { alt, src, rating } = this.props;
        
        return (
            <div style={styles.slide}>
                <img alt={alt} src={src} style={styles.slide} />
                <div style={styles.slideCaption} >
                    { rating ? <SimpleRating alt={alt}/> : <Card alt={alt}/> } 
                </div>
            </div>
        )
}
}