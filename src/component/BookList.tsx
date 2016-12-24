import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, ListViewDataSource, TouchableHighlight } from 'react-native';

import { BookItem } from '../model';
import { AppState } from '../state';

export interface BookListProps {
    books: BookItem[];
    removeBook(book: BookItem): void;
    showDetail(book: BookItem): void;
}

export class BookList extends React.Component<BookListProps, {}> {

    private readonly basicDataSource: ListViewDataSource;

    constructor(props: BookListProps) {
        super();
        const basicDataSource = new ListView.DataSource({
            rowHasChanged(d1, d2) {
                return d1 !== d2;
            }
        });
        this.basicDataSource = basicDataSource
    }

    render() {
        const ds = this.basicDataSource.cloneWithRows(this.props.books);
        return <ListView
            dataSource={ds}
            renderRow={(bookItem: BookItem) => this.renderRow(bookItem)}
            />;
    }

    renderRow(item: BookItem) {
        return (
            <TouchableHighlight
                onPress={() => this.props.showDetail(item)}
                onLongPress={() => this.props.removeBook(item)} >
                <Text>Title: {item.title}</Text>
            </TouchableHighlight>);
    }
}
