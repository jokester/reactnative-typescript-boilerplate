// vim: ft=typescript
import * as React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class MyAwesomeApp extends React.Component<{}, {}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello, Woold</Text>
            </View>
        )
    }
}
interface AppStyle {
    container: React.ViewStyle;
    hello: React.TextStyle;
}
var styles = StyleSheet.create<AppStyle>({
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

import {store} from './state';

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'RemoveBook' });
store.dispatch({ type: 'RemoveBook' });

