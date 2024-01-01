import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Tmp } from '@/components/Tmp';

export default function App() {
  return <Tmp />;
}

registerRootComponent(App);
