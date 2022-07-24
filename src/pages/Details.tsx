import { useRoute } from '@react-navigation/native';
import { VStack } from 'native-base';
import Header from '../components/Header';

type RoutesParams = {
  orderId: string;
}

export default function Details() {
  const route = useRoute();
  const { orderId } = route.params as RoutesParams;
  return (
    <VStack flex={1} bg="gray.700">
      <Header title="solicitação" />
    </VStack>
  );
}
