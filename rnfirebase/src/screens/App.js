/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Register from './Register'
import Login from './Login'
import Home from './Home'

export default class App extends Component {
    
    scenes = {
        login: {
            hideNavBar: true,
            initial: true
        },
        register: {
            hideNavBar: true,
            initial: false
        },
        home: {
            hideNavBar: true,
            initial: false
        }
    };
    
    constructor(props) {
        super(props);
        this.setInitialScene('login');
    }
    
    setInitialScene(name) {
        for (let scene in this.scenes) {
            this.scenes[scene].initial = scene === name;
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Scene key="root">
                        <Scene key="login"
                               component={Login}
                               title="Login"
                               hideNavBar={this.scenes.login.hideNavBar}
                               initial={this.scenes.login.initial}
                        />
                        <Scene key="register"
                               component={Register}
                               title="Register"
                               hideNavBar={this.scenes.register.hideNavBar}
                               initial={this.scenes.register.initial}
                        />
                        <Scene key="home"
                               component={Home}
                               title="Home"
                               hideNavBar={this.scenes.home.hideNavBar}
                               initial={this.scenes.home.initial}
                        />
                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
