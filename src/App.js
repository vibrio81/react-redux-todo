import './App.css';
import './Styles.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import VisibilityFilters from './Components/VisibilityFilters';



function App() {
  return (
    <div className='Todo-app'>
      <h1>Todo List</h1>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilters/>
    </div>
  );
}

export default App;
