//STYLES
import "../styles/todo.css";
export const Todos = ({info, setTodos, setTodosDone, todosDone, todos}) => {
  const sendDone = (e) => {
    const newTodos = todos.filter(todo => todo.id !== e.id);
    setTodos(newTodos);
    setTodosDone([...todosDone, e]);
    localStorage.setItem('todosLocal', JSON.stringify(newTodos))
    localStorage.setItem('todosDoneLocal', JSON.stringify([...todosDone, e]))
  }
  return (
    <div className='todo__container'>
        <h3 className="todos__title">Title: {info.title}</h3>
        <div className="todo__tag-container">
          {
            info.tag.map((tag, index) => 
              <p key={index} className="todo__tag" style={{backgroundColor: tag.colorTag}}>{tag.tag}</p>
            )
          }
        </div>
        <p className="todos__description">Description: {info.description}</p>
        <button onClick={() => sendDone(info)} className="todos__button">
          Done
        </button>
    </div>
  )
}
