import React, { useState } from "react";
import { View, Switch, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("");

  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#fff",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };

  const getBtnColor = (type) => {
    if (type == "top") {
      return "#35FBD6";
    } else if (type == "right") {
      return "#EB6363";
    } else {
      return getColor(colors.dark, colors.light);
    }
  };

  const calculate = (title) => {
    if (title == "C") {
      setResult("");
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "=") {
      try {
        const ans = Number(eval(result).toFixed(3)).toString();
        setResult(ans);
      } catch (err) {
        console.error("Invalid Expression!");
      }
    } else {
      return setResult(result + title);
    }
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);

  const Btn = (props) => {
    return (
      <TouchableOpacity
        onPress={() => calculate(props.title)}
        style={{
          padding: 10,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: getColor(colors.light1, colors.dark1),
          width: 70,
          height: 70,
          margin: 12,
        }}
      >
        <Text
          style={{
            fontSize: 37,
            color: getBtnColor(props.type),
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: "center",
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />

      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          marginTop: 160,
          paddingBottom: 20,
        }}
      >
        {result}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: getColor(colors.light1, colors.dark1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
}
