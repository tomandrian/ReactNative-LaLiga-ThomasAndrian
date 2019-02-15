import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
// konsep function di atas render gak perlu pake var or let jika di dalam render harus pake var or let

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            z: 'hallo ini z'
        }
    }
    a = (b) => {
        return `halo ini ${b}`
    }
    x = 'Halo ini X'
    render() {
        var y = 'hallo ini y'
        return (
            // cara membuat item di center kalo row itu pake justifycontent kalo column yaitu pakai alignitems
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

                    <View style={desain.judul}>
                        <ActivityIndicator size='large' />
                    </View>
                    {/* <Text>{this.x}</Text>
        <Text>{y}</Text>
        <Text>{this.state.z}</Text>
        <Text>{this.a(5)}</Text> */}
                    <View style={[desain.box, desain.box1]}></View>
                    <View style={[desain.box, desain.box2]}></View>
                    <View style={[desain.box, desain.box3]}></View>
                </View>
            </ScrollView>
        )
    }
}
var desain = StyleSheet.create({
    judul: {
        color: 'red',
        backgroundColor: 'pink',
        fontSize: 35,
        fontWeight: 'bold',
        padding: 15,
        margin: 15,
        textAlign: 'center'
    },
    box: {
        width: 100,
        height: 100
    },
    box1: {
        backgroundColor: 'red',
        flex: 1
    },
    box2: {
        backgroundColor: 'yellow',
        flex: 2
    },
    box3: {
        backgroundColor: 'green',
        flex: 3
    }

})