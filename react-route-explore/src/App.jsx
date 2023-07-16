import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home/Home'
import Friends from './components/Friends/Friends'
import About from './components/About/About'
import FriendDetails from './components/FriendDetails/FriendDetails'
import Products from './components/Products/Products'
import PostDetails from './components/PostDetails/PostDetails'
import Posts from './components/Posts/Posts'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: 'products', element: <Products></Products> },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        }, {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    { path: '/about', element: <About></About> },
    { path: '*', element: <div>This route not found: 404</div> }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
