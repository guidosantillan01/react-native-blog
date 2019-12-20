## React Native App - Blog

`npx expo-cli init blog`
`npm install react-navigation`
`npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack`

Imports for new react-navigation 4.0

```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```

Fix file

- Go to node_modules/metro-config/src/defaults/blacklist.js

```js
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
