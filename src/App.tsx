import * as React from "react"

import Workouts from "./components/Workouts"
import { ThemeContext, type THEME_CONTEXT } from "./store/ThemeContext"
import WorkoutsProvider from "./store/WorkoutsContext"

const App: React.FC = () => {
  const { theme } = React.useContext(ThemeContext) as THEME_CONTEXT

  return (
    <>
      <WorkoutsProvider>
        <Workouts />
      </WorkoutsProvider>
      <p className="fixed left-5 bottom-0 mb-5 text-sm sm:hidden">
        <span>Current Theme: </span>
        <span className="text-gray-500">{theme}</span>
      </p>
    </>
  )
}

export default App
