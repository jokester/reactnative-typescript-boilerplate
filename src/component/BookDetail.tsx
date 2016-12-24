import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, ListViewDataSource, TouchableHighlight } from 'react-native';

import { BookItem } from '../model';
import { AppState } from '../state';

export interface BookDetailProps {
    book: BookItem;
    removeBook(book: BookItem): void;
    back(): void;
}

export class BookDetail extends React.Component<BookDetailProps, {}> {
    render() {
        return (<TouchableHighlight
            onPress={() => this.props.back()}
            onLongPress={() => this.props.removeBook(this.props.book)} >
            <Text>Title: {this.props.book.title}</Text>
            <Text>Tags: {this.props.book.tags.join(',')} </Text>
        </TouchableHighlight>);
    }
}