import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import COLOR from '../../utils/color'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Wrapper(props: any) {
    return (
        <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: COLOR.primary }}>
            <StatusBar animated={true} backgroundColor={COLOR.primary} barStyle={'light-content'} />
            {props.children}
        </SafeAreaView>
    )
}