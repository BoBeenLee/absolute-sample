import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './screens/Layout';

export default class Root extends React.Component<{}> {
    render() {
        return (
            <View>
                <Layout />
            </View>
        );
    }
}
