import AppRoutes from "./router/AppRoutes"
import { LayoutPage } from "./layout/LayoutPage"
function App() {
  return (
    <>
      <LayoutPage>
        <AppRoutes />
        <div className="text-white">
          
        </div>
      </LayoutPage>
    </>
  )
}

export default App
