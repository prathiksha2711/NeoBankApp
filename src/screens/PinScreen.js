import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Text from '../components/Text';
import NumberPad from '../screens/NumberPad';
import { Fontisto } from '@expo/vector-icons';

const PinScreen = ({ navigation }) => {
    const [pinCount, setPinCount] = useState(0);
    const totalPins = 6;

    useEffect(() => {
        if (pinCount === totalPins) {
            navigation.navigate("Home")
        }
    }, [pinCount]);


    const renderPins = () => {
        const pins = [];
        for (let x = 1; x <= totalPins; x++) {
            pins.push(
                x <= pinCount ? (
                    <PinContainer>
                        <Pin />
                    </PinContainer>
                ) : (
                    <PinContainer />
                )
            );
        }
        return pins;
    };

    const pressKey = (_, index) => {
        setPinCount((prev) => {
            return index != 10 ? prev + 1 : prev - 1;
        });
    };

    return (
        <Container>
            <Text center heavy title color="#964ff0" margin="32px 0 0 0">
                Neo Bank
            </Text>
            <Text center heavy medium margin="32px 0 0 0">
                Enter your PIN Code.
            </Text>

            <AccessPin>{renderPins()}</AccessPin>
            {/* /<AccessPin></AccessPin> */}
            <Text center bold margin="8px 0 0 0" color="#9c9c9f">
                Forgot PIN?
            </Text>

            <UseTouch onPress={() => navigation.navigate('Touch')}>
                <Fontisto name="locked" color="#964ff0" size={16} />
                <Text bold margin="0 0 0 8px" color="#964ff0">
                    Use Touch ID
                </Text>
            </UseTouch>

            <NumberPad onPress={pressKey} />

            {/* StatusBar component should be used from 'react-native', not 'styled-components' */}
            {/* <StatusBar barStyle="light-content" /> */}
        </Container>
    );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const AccessPin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 64px 16px 64px;
  color:#12dced;
`;

const UseTouch = styled.TouchableOpacity`
  margin: 32px 0 64px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PinContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-color:#5196f4;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

const Pin = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #5196f4;
`;

// const StatusBar = styled.StatusBar`
// border-radius: 8px;
// `;

export default PinScreen;
