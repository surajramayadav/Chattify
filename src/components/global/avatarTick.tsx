import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../../utils/color';

interface Props {
    image: string;
    online: boolean;
}

export default function AvatarTick({ image, online }: Props) {

    return (
        <View>
            <Image source={{ uri: image }} style={{ height: 50, width: 50, borderRadius: 50 }} />
            <View style={{
                top: -20, right: -35, borderWidth: 1, borderColor: COLOR.grey, height: 20, width: 20,
                borderRadius: 20, backgroundColor: online ? 'green' : COLOR.yellow, alignItems: 'center', justifyContent: 'center'
            }}>
                {online ?
                    <Icon name="check" size={10} color={COLOR.white} />
                    : <Entypo name="flash" size={10} color={"black"} />}
            </View>
        </View>
    )
}