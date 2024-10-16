// export default function Todo({task, isDone}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }


//conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

//condition rendering option 2
export default function Todo({task, isDone}){
   if(isDone){
    return <li>Finish: {task}</li>
   }
   return <li>Work on {task}</li>
}