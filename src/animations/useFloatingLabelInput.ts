import { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import AppStyles from '@src/themes/AppStyles';
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { defaultPositionText, textPostionMove } from '@src/constants/FloatinLabelInput';


const useFloatingLabelInput = (value?: string) => {
    const [isFocused, setIsFocused] = useState(value ? true : false);
    const [isBlur, setIsBlur] = useState(false);
    const [show, setShow] = useState(false);

    const styles = ThisStyles(isFocused, isBlur);
    const moveText = useSharedValue(defaultPositionText);

    useEffect(() => {
        if (isFocused) {
            moveText.value = withTiming(defaultPositionText, { duration: 300 });
        } else {
            moveText.value = withTiming(textPostionMove, { duration: 300 });
        }
    }, [isFocused]);

    const animatedLabel = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: moveText.value }]
        };
    })

    return {
        isFocused,
        setIsFocused,
        styles,
        animatedLabel,
        show,
        setShow,
        isBlur,
        setIsBlur,
    }

}

const ThisStyles = (isFocused: boolean, isBlur: boolean) => {
    return StyleSheet.create({
        container: {
            width: '100%',
            height: AppStyles.inputHeight.default,
            marginTop: AppStyles.margin.xlarge,
        },
        input: {
            borderColor: isFocused && isBlur ? AppStyles.colour.yellow : AppStyles.colour.low_gray,
            paddingLeft: AppStyles.padding.medium,
            paddingRight: AppStyles.padding.xxxxlarge,
        },
        label: {
            position: 'absolute',
            backgroundColor: isFocused ? AppStyles.colour.white : AppStyles.colour.transparent,
            zIndex: isFocused ? 1 : 0,
            left: AppStyles.padding.large,
            fontSize: AppStyles.font.size.default,
            color: isFocused ? AppStyles.colour.yellow : AppStyles.colour.low_gray,
        }
    })
}

export default useFloatingLabelInput