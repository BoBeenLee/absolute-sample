import { HelloWorld } from 'components';
import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class MainScreen extends Component {
    public render() {
        return (
            <SafeAreaView>
                <Text>Hello</Text>
                <HelloWorld />
            </SafeAreaView>
        );
    }
}

export default MainScreen;
