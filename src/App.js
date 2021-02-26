import './App.css';
import Post from './components/post';
import PostForm from './components/postForm';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <PostForm />
        <Post />
      </div>
    </Provider>
    
  );
}

export default App;
