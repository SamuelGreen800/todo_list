const Todo = (props) => {
    const todoClasses = [];
    if (props.todo.complete){
        todoClasses.push("text-decoration-line-through");
    }

    return <div  className="mx-auto my-2">
    <table className='d-flex justify-content-center'>
        <tr>
            <td><input checked={props.todo.complete} type="checkbox" className='mx-2 justify-content-center' onChange={(e) => {
            props.handleToggle(props.i);
            }}></input></td>

            <td className={todoClasses.join(" ")}>{props.todo.text}</td>  
            <td><button className='mx-4 btn btn-sm  btn-danger' onClick={(e) => {
            props.destroy(props.i);}}>Delete</button>
            </td>
        </tr>
        </table>
    </div>;
    
            }
export default Todo;