import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../pages/Home";
import Details from "../pages/Details";
import Register from "../pages/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
