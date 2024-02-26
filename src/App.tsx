import { useSelector } from "react-redux"
import { Home } from "./pages/Home"
import { RootState } from "./store/store"
function App() {
  const { value } = useSelector((state: RootState) => state.theme)
  return (
    <div className={value}>
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
    dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        <main className="container mx-auto">
          <Home />
        </main>
      </div>
    </div>
  )
}

export default App
