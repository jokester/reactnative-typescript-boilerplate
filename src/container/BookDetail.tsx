import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';

import { BookItem } from '../model';
import { AppState } from '../state';
import { createAction } from '../action';

import { BookDetail as _BookDetail } from '../component/BookDetail';

interface PropsFromDispatch {
    removeBook(book: BookItem): void;
    back(): void;
}

export interface OwnProps {
    book: BookItem;
}

function mapDispatchToProps(dispatch: (action: any) => void) {
    return {
        removeBook(book: BookItem) {
            dispatch(createAction.removeBook(book));
        },
        back() {

        }
    };
}

export const BookList = connect<{}, PropsFromDispatch, OwnProps>(null, mapDispatchToProps)(_BookDetail);