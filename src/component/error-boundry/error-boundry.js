import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch(info) {
        debugger;

        this.setState({
            error: true
        })
    }

    render() {

        if (this.props.error) {
            return <ErrorIndicator />
        }

        return this.props.children
    }

} 