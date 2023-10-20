import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    bg: string,
    tbg: string,
    number: number
}

export default function CircleNumber({ bg, tbg, number }: Props) {
    return (
        <View style={{
            height: 20, width: 20, borderRadius: 20,
            backgroundColor: bg, alignItems: 'center', justifyContent: 'center'
        }}>
            <Text style={{ color: tbg, fontSize: 14 }}>{number}</Text></View>
    )
}