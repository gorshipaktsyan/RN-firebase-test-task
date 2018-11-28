import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Platform, Dimensions, Button} from 'react-native';
const {height, width} = Dimensions.get('window');

class Home extends Component {
    
    render() {
        
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.content}>
                    <View style={{ marginTop: '30%', height: 50 }}>
                        <Text style={{ fontSize: 30 }}>“The two most important days in your life are the day you are born and the day you find out why.”</Text>
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
        width: width - 30
    }
});

export default Home;
