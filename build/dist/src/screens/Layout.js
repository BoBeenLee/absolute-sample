import * as tslib_1 from "tslib";
import * as React from 'react';
import { Text, View } from 'react-native';
import Header from '~/components/Header';
var Layout = /** @class */ (function (_super) {
    tslib_1.__extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (<View>
                <Header />
                <Text>Layout123</Text>
            </View>);
    };
    return Layout;
}(React.Component));
export default Layout;
//# sourceMappingURL=Layout.js.map