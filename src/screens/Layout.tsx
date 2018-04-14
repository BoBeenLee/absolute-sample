import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '~/components/Header';


export default class Layout extends React.Component<{}> {
    render() {
        return (
            <View>
                <Header />
                <Text>Layout123</Text>
            </View>
        );
    }
}
