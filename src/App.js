import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CardFile from './Components/CardFile';


function App() {

  const router = createBrowserRouter([
    {path:'/',
  element:<CardFile/>},])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
