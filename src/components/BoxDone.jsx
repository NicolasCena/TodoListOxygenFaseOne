
//Styles
import '../styles/boxDone.css';

//Components
import { TodosDone } from './TodosDone.jsx';

export const BoxDone = ({setTodos, setTodosDone, todosDone, todos}) => {
  return (
    <div className='boxTodosDone__container'>
    { todosDone.length > 0  ? 
      (
        <>
          <div className='boxTodosDone__title-container'>
            <h2>Done</h2></div>
        {
          todosDone.map((info,index) => (
              <TodosDone 
              info={info} 
              key={index} 
              setTodos={setTodos} 
              todosDone={todosDone} 
              setTodosDone={setTodosDone}  
              todos={todos}/>
          ))
        }
        </>
      ) :
      (
        <div className=' boxTodosDone__container boxTodosDone__title-container'>
          <h2>No homework done</h2>
        </div>
      )
    }
    </div>
  )
}
