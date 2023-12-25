import './styles.css'
import RootProvider from './core/providers/RootProvider'
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";

function App() {

  return (
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
  )
}

export default App
