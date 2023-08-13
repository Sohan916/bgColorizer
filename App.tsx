import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [bgColor1, setBgColor1] = useState('#ffffff');
  const [bgColor2, setBgColor2] = useState('#ffffff');
  const [bgColor3, setBgColor3] = useState('#ffffff');
  const [bgColor4, setBgColor4] = useState('#ffffff');
  const [bgColor5, setBgColor5] = useState('#ffffff');
  const [bgColor6, setBgColor6] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const generateColors = () => {
    let a = generateColor;
    let b = generateColor;
    let c = generateColor;
    let d = generateColor;
    let e = generateColor;
    let f = generateColor;
    let g = generateColor;

    setBgColor(a);
    setBgColor1(b);
    setBgColor2(c);
    setBgColor3(d);
    setBgColor4(e);
    setBgColor5(f);
    setBgColor6(g);
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <View style={[styles.parts, {backgroundColor: bgColor1}]}></View>
        <View style={[styles.parts, {backgroundColor: bgColor3}]}></View>
        <View style={[styles.parts, {backgroundColor: bgColor5}]}></View>
        <TouchableOpacity onPress={generateColors}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.parts, {backgroundColor: bgColor2}]}></View>
        <View style={[styles.parts, {backgroundColor: bgColor4}]}></View>
        <View style={[styles.parts, {backgroundColor: bgColor6}]}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  parts: {
    height: 40,
    width: 300,
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;
