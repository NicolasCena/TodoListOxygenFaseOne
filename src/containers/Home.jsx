//STYLE
import '../styles/home.css';
//COMPONENTS
import { FormTodos } from "../components/FormTodos";
import { BoxTodos } from "../components/BoxTodos";
import { BoxDone } from "../components/BoxDone";

export const Home = ({setTodos, setTodosDone, todosDone, todos}) => {
  return (
    <div className='home__container'>
        <FormTodos todos={todos} setTodos={setTodos} className="home__form"/>
        <div className='home__boxes-container'>
          <BoxTodos
          todos={todos}
          setTodos={setTodos}
          todosDone={todosDone}
          setTodosDone={setTodosDone}
          className="home__boxtodos"
          />
          <BoxDone
          todos={todos}
          setTodos={setTodos}
          todosDone={todosDone}
          setTodosDone={setTodosDone}
          className="home__boxdone"
          />
        </div>
    </div>
  )
}
