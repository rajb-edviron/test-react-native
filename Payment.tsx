import React,{useEffect,useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Axios from 'axios';
interface PaymentProps {
    collectId: string;
  }
  const Payment: React.FC<PaymentProps> = ({ collectId, }) => {
    const [url,setUrl] =useState('')
    useEffect(() => {
      console.log('check');
      
      const fetchData = async () => {
        try {
          // replace ip to hosted url/localhost
          const response = await Axios.get(`http://192.168.1.108:4001/edviron-pg/sdk-redirect?collect_id=${collectId}`);
          console.log(response.data);
          
          setUrl(response.data.url)
          // Handle response data here if needed
          console.log(response.data);
        } catch (error) {
          // Handle error here
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [collectId]);
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `http://192.168.1.108:4001/edviron-pg/sdk-redirect?collect_id=${collectId}` }}
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
