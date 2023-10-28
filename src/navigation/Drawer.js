import HomeScreen from "../../screens/HomeScreen";
import { CustomDrawerContent } from "./LoginNavigation";

export default function DrawerNavigation() {
    return (
      <Drawer.Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Inicio" component={HomeScreen} />
      </Drawer.Drawer>
    );
  }
  