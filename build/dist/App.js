import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Root from './src';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<View style={styles.container}>
        <Root />
      </View>);
    };
    return App;
}(React.Component));
export default App;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=App.js.map