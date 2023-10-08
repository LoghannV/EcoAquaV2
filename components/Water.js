import axios from "react-native-axios";
import { useState, useEffect } from "react";
import { Text, View  } from "react-native";
import WebView from 'react-native-webview';

export default function Water(props) {
  const [data, setData] = useState([]);
  const [urlWeb,setWeb] = useState({uri:''});

  useEffect(() => {
    setWeb({uri:props.url});

  }, [props.url]);

  return (
    <View style={{ width: 400,height:600}}>
      <WebView
        source={urlWeb}
        style={{flex:1,width:400,height:600}}
      >

      </WebView>
    </View>
  );
}
