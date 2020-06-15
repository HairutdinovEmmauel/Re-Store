import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './content.css'

const Content = ({ background, imp }) => {
    return (
        <div className={`jumbotron ${background} content`}>
            <h2 id="counter">{ background }</h2>
            <buutton
                onClick={ imp }
                className="btn btn-primary btn-lg" >Important</buutton>
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        background: state,
    }
}

export default connect(mapStateToProps, actions)(Content);