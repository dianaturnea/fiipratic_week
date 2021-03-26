import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenContainer = (props) => {
    return (
      <SafeAreaView style={styles.container}>
        {props.children}
      </SafeAreaView>
    );
}

export default ScreenContainer;

const styles = StyleSheet.create({
  container: { flex: 1, margin:16},
});
