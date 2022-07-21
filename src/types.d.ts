export interface TodoContent{
    todoId: string;
    title: string;
    description: string;
    isComplete:Boolean
    userId:string
    important:Boolean
}


// export interface ResponseFuncs {
//     GET?: Function
//     POST?: Function
//     PUT?: Function
//     DELETE?: Function
//   }

export default TodoContent;
