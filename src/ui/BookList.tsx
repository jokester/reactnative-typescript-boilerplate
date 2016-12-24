import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';

import { BookItem } from '../model';
import { AppState } from '../state';

interface PropsFromState {
    books: BookItem[]
}

function mapStateToProps(state: AppState): PropsFromState {
    return {
        books: state.books
    };
}

class BookList extends React.Component<PropsFromState, {}> {
    render() {
        return <Text>{this.props.books.length}items!!!!</Text>;
    }
}

export default connect(mapStateToProps)(BookList);