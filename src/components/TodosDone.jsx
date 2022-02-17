//STYLES
import "../styles/todoDone.css";

export const TodosDone = ({info, setTodosDone, todosDone, todos, setTodos}) => {
  const deleteTodo = (e) => {
    const newDoneList = todosDone.filter( todo => todo.id !== e.id);
    setTodosDone(newDoneList);
    localStorage.setItem('todosDoneLocal', JSON.stringify(newDoneList))

  }

  const returnTodo = (e) => {
    const newDoneList = todosDone.filter( todo => todo.id !== e.id);
    setTodosDone(newDoneList);
    setTodos([...todos, e]);
    localStorage.setItem('todosLocal', JSON.stringify([...todos, e]));
    localStorage.setItem('todosDoneLocal', JSON.stringify(newDoneList))


  }

  return (
    <div className='todoDone__container'>
        <h3 className="todoDone__title" >Title: {info.title}</h3>
        <div className="todoDone__tag-container">
          {
            info.tag.map((tag, index) => 
              <p key={index} className="todoDone__tag" style={{backgroundColor: tag.colorTag}}>{tag.tag}</p>
            )
          }
        </div>
        <p className="todoDone__description">Description: {info.description}</p>
        <div className="todoDone__button-container">
          <button className="todoDone__button-delete" onClick={() => deleteTodo(info)}>Eliminar</button>
          <button className="todoDone__button-return" onClick={() => returnTodo(info)}>Return</button>
        </div>

    </div>
  )
}
