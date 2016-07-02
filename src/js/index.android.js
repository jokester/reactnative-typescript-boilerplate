import * as React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
class MyAwesomeApp extends React.Component {
    render() {
        return (React.createElement(View, {style: styles.container}, React.createElement(Text, {style: styles.hello}, "Hello, Woold")));
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
AppRegistry.registerComponent('MyAwesomeApp', () => MyAwesomeApp);
//# sourceMappingURL=index.android.js.map