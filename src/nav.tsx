import { OwnProps as BookDetailOwnProps } from './container/BookDetail'


export enum SceneName {
    BookList,
    BookDetail,
}

export interface SceneSpec {
    name: SceneName;
    payload: any;
}

export function renderScene(spec: SceneSpec) {

}