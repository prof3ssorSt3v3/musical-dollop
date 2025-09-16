import { Tabs } from 'expo-router';
import { black, white, primary, secondary } from '../../theme/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
  //<Tabs headerShown:false> to avoid a second header bar
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      options={{
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          fontSize: 16,
          color: secondary,
        },
        tabBarIconStyle: {
          //style for the icon on every tab
          color: primary,
        },
      }}
    >
      <Tabs.Screen
        name="stuff"
        options={{
          title: 'Stuff',
          tabBarIcon: ({ focused, color, size }) => {
            //focused is a boolean that we can use to change the icon or color
            return <Ionicons name="home" size={size} color={primary} focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon: ({ focused, color, size }) => {
            //focused is a boolean that we can use to change the icon or color
            return <Ionicons name="person" size={size} color={primary} focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => {
            //focused is a boolean that we can use to change the icon or color
            return <Ionicons name="settings" size={size} color={primary} focused={focused} />;
          },
        }}
      />
    </Tabs>
  );
}
