import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import StackNavigator from "./routes/StackNavigator";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

