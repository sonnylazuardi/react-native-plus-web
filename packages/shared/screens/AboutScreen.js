import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{'About Screen'}</Text>
        <View style={Styles.space}>
          <Button
            title="Navigate to Detail Screen"
            onPress={() => {
              this.props.navigation.navigate("Detail");
            }}
          />
        </View>
        <View style={Styles.space}>
          <Button
            title="Back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  space: {
    margin: 5
  }
});
export default AboutScreen;
