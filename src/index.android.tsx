// vim: ft=typescript
import * as React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';
import { Provider } from 'react-redux';

import BookList from './ui/BookList';

const store = getStore();

class MyAwesomeApp extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <BookList />
            </Provider>
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

import {store} from './state';

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'RemoveBook' });
store.dispatch({ type: 'RemoveBook' });
