//Styles
import '../styles/boxTodos.css';

//Components
import { Todos } from './Todos.jsx';

export const BoxTodos = ({ todos, setTodos, todosDone, setTodosDone}) => {
  return (
      <div className='boxTodos__container'>
    {
      todos.length > 0  ?
      (
        <>
        <div className='boxTodos__title-container'>
          <h2>To-Do</h2>
        </div>
        {
            todos.map((info,index) => (
                <Todos 
                info={info} 
                key={index} 
                setTodos={setTodos} 
                todosDone={todosDone} 
                setTodosDone={setTodosDone} 
                todos={todos}  
                />
            ))
        }
        </>
      ) 
      :
      (
        <div className=' boxTodos__container boxTodos__title-container'>
          <h2>No homework</h2>
        </div>
      )
    }
    </div>
  )
}
