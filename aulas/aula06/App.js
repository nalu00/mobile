import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./Screens/TaskScreen";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <TaskScreen />
      </TaskProvider>
    </SafeAreaProvider>
  );
}

export default App;
