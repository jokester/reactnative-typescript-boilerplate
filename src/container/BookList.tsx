import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';

import { BookItem } from '../model';
import { AppState } from '../state';
import { createAction } from '../action';

import { BookList as _BookList, BookListProps } from '../component/BookList';


function mapStateToProps(state: AppState) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch: (action: any) => void) {
    return {
        removeBook(book: BookItem) {
            dispatch(createAction.removeBook(book));
        },
        showDetail(book: BookItem) {
            console.log('showDetail', book);
        }
    };
}

export const BookList = connect(mapStateToProps, mapDispatchToProps)(_BookList);