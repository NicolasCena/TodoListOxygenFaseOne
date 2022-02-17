import React,{ useState } from 'react';

//Style
import "../styles/formTodos.css";

//Components
import { Tag } from './Tag';

export const FormTodos = ({ todos, setTodos}) => {

    const [DescriptionTodo, setDescriptionTodo] = useState('');
    const [TagTodoList, setTagTodoList] = useState([]);
    const [TagTodo, setTagTodo] = useState('');
    const [TitleTodo, setTitleTodo] = useState('');
    const [TagColor, setTagColor] = useState('');

    

    
    const onSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(), //genera un id unico
            title: TitleTodo,
            description: DescriptionTodo,
            tag: TagTodoList,
        }
        setTodos([...todos, newTodo])
        localStorage.setItem('todosLocal', JSON.stringify([...todos, newTodo]))
        //SETEO DE LOS INPUTS
        setTitleTodo('')
        setDescriptionTodo('')
        setTagTodo('')
        setTagTodoList([])

    }

    const onReset = () => {
        setTitleTodo('')
        setDescriptionTodo('')
        setTagTodo('')
        setTagTodoList([])
    }

    const addTag = () => {
        const newTag = {
            id: new Date().getTime(),
            tag: TagTodo,
            colorTag: TagColor,
        }
        setTagTodoList([...TagTodoList, newTag ])
        setTagTodo('')

    }

  return (
    <div>
        <div>
            <h1>Crear To-Do</h1>
        </div>
        <form onSubmit={(e) => onSubmit(e)} className="form__container">

            <div className="form__container-items">
            <label htmlFor="TitleTodo" className='input__title'>Title
                <input type="text" id="TitleTodo" placeholder="Titulo TODO" value={TitleTodo} onChange={e => setTitleTodo(e.target.value)} />
            </label>

            <label htmlFor="TagTodo" className='input__tag'>Tags
                <div>
                    <input type="text" id="TagTodo" placeholder="Tag TODO" value={TagTodo} onChange={e => setTagTodo(e.target.value)} />
                    <input type="color" id="TagTodo" placeholder="Tag Color"  onChange={e => setTagColor(e.target.value)} />
                </div>
                <button onClick={addTag} disabled={(TagTodo === '') ? true : false} className="form__button-tag">
                    Agregar Tag
                </button>
                <div className='form__container-tags'>
                { TagTodoList.map((tag, index) => (
                    <Tag  tag={tag} key={tag.id} index={index}/>
                ))}
                </div>
            </label>

            <label htmlFor="DescriptionTodo" className='input__description'>Description
                <textarea type="text" id="DescriptionTodo" value={DescriptionTodo} placeholder="Description TODO" rows={5} cols={20} onChange={e => setDescriptionTodo(e.target.value)} />
            </label>

            <div className='form__button'>
                <button className='form__buton-create' type="submit" disabled={ ((TitleTodo && DescriptionTodo) === '' ) ? true : false }>
                    Crear
                </button>
                <button type="reset" onClick={() => onReset()}>
                    Resetear
                </button>
            </div>
            </div>
        </form>
    </div>
  )
}
