/**
 * This file contains a few
 * 
 * You may want to read [Redux Basics](http://redux.js.org/docs/basics/index.html) first.
 */

import {Action, createStore} from 'redux';

/**
 * We are implementing a book manager app.
 */
namespace AppLogic {

    interface BookItem {
        title: string;
        tags: string[];
    }

    /**
     * State 
     */
    export interface AppState {
        books: BookItem[];
    }

    export const createInitState = function (): AppState {
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

    /**
     * Action
     */
    export interface Action {
        type: 'AddBook' | 'RemoveBook' | 'ShowBook';
    };

    /**
     * A **Reducer** 
     */
    export const reducer: Redux.Reducer<AppState> = function <A extends Action>(prevState = createInitState(), action: A) {

        if (action.type === 'RemoveBook') {
            return Object.assign({}, {
                books: prevState.books.slice(1)
            });
        }

        console.warn('action not recognized', action);
        return prevState;
    }
}

export const store = createStore(AppLogic.reducer);
