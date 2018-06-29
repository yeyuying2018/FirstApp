
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
    } from 'react-native';

export default  class Boy extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am girl;</Text>
                <Text style={styles.text}>我收到了男孩送的：{this.props.word}</Text>
                <Text style={styles.text} onPress={()=>{
                    this.props.onCallBack('一盒巧克力');//向上一级页面传递数据
                    this.props.navigator.pop();//返回上一个页面
                }}>回赠巧克力</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    text: {
        fontSize: 20,

    }
})