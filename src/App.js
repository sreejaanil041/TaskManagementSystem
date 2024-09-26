
import './App.css';
import CreateTask from './pages/CreateTask';
import ViewTask from './pages/ViewTask';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CreateTask/>
      </header>
      <ViewTask/>
    </div>
  );
}

export default App;
