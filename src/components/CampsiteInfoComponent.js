import React, { Component } from 'react';

class CampsiteInfo extends Component {
    render() {
        if (this.props.campsite) {

            return (
                //if true returns a div named row
                <div className="row">


                </div>

            );
        }
        //if false returns an empty div
        return <div />;

    }
}

export default CampsiteInfo;