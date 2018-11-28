import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput, Platform, Dimensions, Button} from 'react-native';
import Input from '../../components/Input';
const {height, width} = Dimensions.get('window');

class Login extends Component {
    
    store = {
        email: 'gor@mail.ru',
        password: 'gggggg'
    };
    
    handleChange = (value, type) => {
        this.store[type] = value;
    };
    
    onRegisterPress = () => {
        
    };
    
    render() {
        
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.content}>
                    <View>
                        <Text style={{ fontSize: 40 }}>Login</Text>
                    </View>
                    <View style={{ height: 40 }}>
                        <Input
                            editable
                            type='email'
                            defaultValue='Email'
                            onChange={this.handleChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ height: 40, marginTop: 20 }}>
                        <Input
                            editable
                            type='password'
                            defaultValue='Password'
                            onChange={this.handleChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ height: 40, marginTop: 40 }}>
                        <Button
                            onPress={() => this.onLoginPress()}
                            title="Login"
                            color="#841584"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: width - 30,
        marginTop: '30%'
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginTop: 25,
        backgroundColor: '#F7F7F7'
    }
});

export default Login;
