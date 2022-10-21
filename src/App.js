import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
