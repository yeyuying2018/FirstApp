
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    } from 'react-native';

export default  class Boy extends Component {

    renderButton(image){
        return  (
            <TouchableOpacity onPress={()=>{
                this.props.navigator.pop();
            }}>
                <Image style={{width:22,height:22,margin: 5}} source={image} />
            </TouchableOpacity>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                    title ={'Girl'}
                    style={{backgroundColor: '#FFC1C1'}}
                    leftButton={
                        this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton = {
                        this.renderButton(require('./res/images/ic_star.png'))

                    }
                    />
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