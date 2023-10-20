import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Wrapper from '../components/global/wrapper'
import COLOR from '../utils/color'
import { contact, personText, personTextPin } from '../json/home'
import Icon from 'react-native-vector-icons/AntDesign';
import AvatarTick from '../components/global/avatarTick'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CircleNumber from '../components/global/circleNumber'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import RNFS from 'react-native-fs'
var path = RNFS.DocumentDirectoryPath + '/test.txt';
export default function Home() {
    const navigation: any = useNavigation()

    React.useEffect(() => {
        RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
            .then((success) => {
                console.log('FILE WRITTEN!');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])



    return (
        <Wrapper>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: COLOR.primary }}>
                    <View style={{ margin: 20 }}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: COLOR.lightGray, fontSize: 12 }}>Hi, Arip</Text>
                                    <Text style={{ marginVertical: 10, color: COLOR.white }}>
                                        You Recevied
                                    </Text>
                                </View>
                                <View style={{
                                    width: 40, height: 40, borderRadius: 40, borderWidth: 1,
                                    alignItems: 'center', justifyContent: 'center', borderColor: COLOR.grey
                                }}>
                                    <FontAwesome name='th-large' size={20} color="white" />
                                </View>
                            </View>
                            <Text style={{ color: COLOR.white, fontSize: 18, textDecorationLine: 'underline' }}>
                                48 Messages
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, width: "120%", }}>
                            <Text style={{ color: COLOR.white, }}>Contact List</Text>
                            <FlatList
                                data={contact}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ marginTop: 20 }}
                                keyExtractor={(item: any) => item.id.toString()}
                                ItemSeparatorComponent={() => {
                                    return (<View style={{ margin: 10 }} />)
                                }}
                                renderItem={({ item }: any) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Chat')}
                                            style={{ alignItems: 'center' }}>
                                            <AvatarTick image={item.image} online={item.online} />
                                            <Text style={{ color: COLOR.white, fontSize: 12, top: -5 }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}

                            />
                        </View>
                    </View>

                    {/* 2nd divide screen */}
                    <View style={{ flex: 1, backgroundColor: COLOR.white, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                        {/* top tabs */}
                        <View style={{ margin: 20, marginTop: 30, flexDirection: "row", alignItems: 'center', justifyContent: 'space-around' }}>
                            <Icon name="search1" size={25} color={"black"} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLOR.yellow, padding: 15, borderRadius: 50 }}>
                                <Text style={{ fontSize: 16 }}>Direct Message </Text>
                                <View style={{
                                    height: 20, width: 20, borderRadius: 20,
                                    backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Text style={{ color: COLOR.white, fontSize: 14 }}>4</Text></View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontSize: 16 }}>Group </Text>
                                <CircleNumber bg='white' tbg='black' number={4} />
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 18 }}>Pinned Message ({personTextPin.length})</Text>
                            <FlatList
                                data={personTextPin}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ marginTop: 20 }}
                                keyExtractor={(item: any) => item.id.toString()}
                                renderItem={({ item }: any) => {
                                    return (
                                        <View style={{ width: "100%", flexDirection: 'row' }}>
                                            <View style={{ width: "20%" }}>
                                                <AvatarTick image={item.image} online={item.online} />
                                            </View>
                                            <View style={{ width: "80%", }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
                                                    <Text>{item.time}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text>{item.msg}</Text>
                                                    {item.tick ? <MaterialCommunityIcons name='check-all' size={20} color={COLOR.primary} />
                                                        : <CircleNumber bg='#e75480' tbg='white' number={item.messageNo} />}
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 18 }}>All Message ({personText.length})</Text>
                            <FlatList
                                data={personText}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ marginTop: 20 }}
                                keyExtractor={(item: any) => item.id.toString()}
                                renderItem={({ item }: any) => {
                                    return (
                                        <View style={{ width: "100%", flexDirection: 'row' }}>
                                            <View style={{ width: "20%" }}>
                                                <AvatarTick image={item.image} online={item.online} />
                                            </View>
                                            <View style={{ width: "80%", }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
                                                    <Text>{item.time}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text>{item.msg}</Text>
                                                    {item.tick ? <MaterialCommunityIcons name='check-all' size={20} color={COLOR.primary} />
                                                        : <CircleNumber bg='#e75480' tbg='white' number={item.messageNo} />}
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </View>

            </View>
        </Wrapper>
    )
}

// https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1