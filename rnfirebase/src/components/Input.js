import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class InputByType extends Component {
    static defaultProps = {
        type: '',
        keyboardType: 'default',
        defaultValue: '',
        editable: true
    };
    
    handleChange = value => {
        this.props.onChange && this.props.onChange(value, this.props.type);
    };
    
    render() {
        return (
            <TextInput
                onChangeText={this.handleChange}
                defaultValue={this.props.defaultValue}
                keyboardType={this.props.keyboardType}
                editable={this.props.editable}
                underlineColorAndroid='transparent'
                style={this.props.style}/>
        )
    }
}
