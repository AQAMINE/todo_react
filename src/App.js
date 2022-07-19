import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo'
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="You must send an Email today by name M.Ahmed" />
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
