import { BookItem } from '../model';
import {}

export enum ActionType {
    RemoveBook,

}

export module Actions {
    export interface BasicAction {
        type: ActionType
    }

    export interface RemoveBook extends BasicAction {
        book: BookItem
    }

    export type MergedAction = RemoveBook;
}





export const createAction = {

    removeBook(book: BookItem): Actions.RemoveBook {
        return {
            type: ActionType.RemoveBook,
            book: book
        };
    }

}

/**
 * ensure all functions in createAction have correct type
 */
const $createActionHasCorrectType: { [actionName: string]: (...args: any[]) => Actions.MergedAction } = createAction;