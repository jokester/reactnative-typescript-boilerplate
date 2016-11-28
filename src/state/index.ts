import { Action, createStore } from 'redux';

import { BookItem } from '../model';

import * as Redux from 'redux';

/**
 * State
 */
export interface AppState {
    books: BookItem[];
}

/**
 * Action
 */
export interface Action {
    type: 'AddBook' | 'RemoveBook' | 'ShowBook';
};

export function createInitState(): AppState {
    return {
        books: [
            {
                title: 'Lord of Rings',
                tags: ['RRTolkien', 'Fantasy']
            },
            {
                title: 'A Song of Ice and Fire',
                tags: ['GRRMartin', 'Fantasy']
            },
            {
                title: "The Hitchhiker's Guide to the Galaxy",
                tags: ['Douglas Adams', '42']
            },
            {
                title: "The Restaurant at the End of the Universe",
                tags: ['Douglas Adams', '42']
            },
            {
                title: "Life, the Universe and Everything",
                tags: ['Douglas Adams', '42']
            },
            {
                title: "So Long, and Thanks for All the Fish",
                tags: ['Douglas Adams', '42']
            },
            {
                title: 'Mostly Harmless',
                tags: ['Douglas Adams', '42']
            },
        ]
    };
}

export const reducer: Redux.Reducer<AppState> = function <A extends Action>(
    prevState = createInitState(), action: A) {

    if (action.type === 'RemoveBook') {
        return Object.assign({}, {
            books: prevState.books.slice(1)
        });
    }

    console.warn('action not recognized', action);
    return prevState;
}

export function getStore() {
    return createStore(reducer);
}