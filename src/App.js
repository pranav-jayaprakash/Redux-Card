import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CardFile from './Components/CardFile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const router = createBrowserRouter([
    {path:'/',
  element:<CardFile/>},])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
