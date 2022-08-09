import {atom, atomFamily} from 'recoil';
import TodoContent from '../types'
export const todoContentState = atom<TodoContent[]>({
    key: "todoContents",
    default: [],
});

export const todoDisplayTypeState = atom<string>({
   key: "todoDisplayType",
   default: "all",
})

//the key is a unique identifier 

export const todoCompleteState = atomFamily<boolean, string>({
    key: "todoCompleteState",
    default: false,
});



