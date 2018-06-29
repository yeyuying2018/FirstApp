
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
    } from 'react-native';
import Girl from './Girl';
import NavigationBar from './NavigationBar';

export default  class Boy extends Component {
    constructor(props){
        super(props);
        this.state = {
            word: ''
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Boy'}
                    statusBar={{backgroundColor:'red',}}
                />
                <Text  style={styles.text}>I am boy.</Text>
                <Text  style={styles.text}
                       onpress={()=>{
                           this.props.navigator.push({ //加载一个新的页面（视图或路由）并且路由到该页面
                            component: Girl,
                            params:{
                                word:'一只玫瑰',
                                onCallBack:(word)=>{
                                    this.setState({
                                        word: word
                                    })
                                }
                            }
                           })
                       }}>
                        送给女孩一只玫瑰
                    <Text style={styles.text}>{this.state.word}</Text>
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    text: {
        fontSize: 20,

    }
})