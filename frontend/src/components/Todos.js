/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({ todos, setTodos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key = {todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
/*
The issue in your code below  is related to how you are updating 
the completed property of the todo object. 
React relies on immutability to detect changes and 
trigger re-renders. Directly modifying the property in place
 will not trigger a re-render because React doesn't detect the change.

To properly update the state and trigger a re-render, 
you should create a new array with updated objects.*/
                // console.log(todo.completed);
                // todo.completed = true;
                // console.log(todo.completed);
                // setTodos(todos);
                //setting button cling functionality 
                const updatedTodos = todos.map((t) =>
                  t._id === todo._id ? { ...t, completed: true } : t
                );
                setTodos(updatedTodos);
              }}>
              {todo.completed === true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
