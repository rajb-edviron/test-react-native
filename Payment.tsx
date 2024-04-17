import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
interface PaymentProps {
    sessionId: string;
    collectId: string;
    amount:number
  }
  const Payment: React.FC<PaymentProps> = ({ sessionId, collectId,amount }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://dev.pg.edviron.com/?session_id=${sessionId}&collect_request_id=${collectId}&amount=${amount}` }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Payment;
