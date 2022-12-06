import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import ContactScreen from "../screens/ContactScreen";


const Stack = createNativeStackNavigator();

export default ContactNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.secondary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Contacto"
          component={ContactScreen}
          options={{ title: "Contacto" }} />
      </Stack.Navigator>
  );
};
