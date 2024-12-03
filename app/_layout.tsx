import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./index"; 
import Agenda from "./Agenda";
import Avisos from "./Avisos";
import Boletim from "./Boletim";
import Contatos from "./Contatos";


const Drawer = createDrawerNavigator();

// Componente de layout de navegação
export default function Layout() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Página Inicial" component={HomeScreen} />
      <Drawer.Screen name="Agenda" component={Agenda} />
      <Drawer.Screen name="Avisos" component={Avisos} />
      <Drawer.Screen name="Boletim" component={Boletim} />
      <Drawer.Screen name="Contatos" component={Contatos} />
    </Drawer.Navigator>
  );
}
