import { Provider} from "react-redux";
import { store } from "./redux/store.ts";
import AppRouter from "./AppRouter.tsx";

function App() {

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App