import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import PagerView from 'react-native-pager-view';

// npx expo install react-native-pager-view

export default function App() {
  const ref = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <PagerView 
        style={styles.pager} 
        ref={ref}
        initialPage={0}
        onPageScroll={(e) => console.log(e)}
        onPageSelected={(e) => console.log(e)}
        onPageScrollStateChanged={(e) => console.log(e)}
      >
        <View key="1">
          <Text>Page 1</Text>
        </View>
        <View key="2">
          <Text>Page 2</Text>
        </View>
      </PagerView>
      <Button title="Go to Pg 1" onPress={() => ref.current?.setPage(0)} />
      <Button title="Go to Pg 2" onPress={() => ref.current?.setPage(1)} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pager: {
    flex: 1,
    alignSelf: "stretch"
  }
});
