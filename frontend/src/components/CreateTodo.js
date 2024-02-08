import { useState } from "react";

export function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
    
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:5000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    completed : false
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    // props.setTodos(json);//json is not todos
                    console.log(json);
                    alert("Todo added");
                })
            // props.setTodos([...props.todos,{
            //     title: title,
            //     description: description
            // }])
            //this was to rerender added todos on screen

            //to rerender new todos on screen without avoiding direct fectch inside app component
        }}>Add a todo</button>
    </div>
}