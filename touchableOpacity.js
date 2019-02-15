import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'


export default class App extends Component {
    state = {
        x: 'Andi'
    }
    render() {

        return (
            <View>
                <Text style={{ fontSize: 30 }}>Halo{this.state.x}</Text>
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 40 }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            backgroundColor: 'blue',
                            padding: 20
                        }}
                        color='lightblue'
                        onPress={() => { this.setState({ x: 'Budi' }) }} >
                        <Text>Tekan Aku Mas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}