/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,

} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import Boy from './Boy';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container} >
          <Text style={{color:'#000000,fontSize: 24'}}>我的测试</Text>
          <Navigator
              initialRoute={{
                component: Boy //加载的视图组件
              }}
              //renderScene 导航栏可以根据指定的路由来渲染场景 。调用的参数是路由和导航器。(route, navigator) => <MySceneComponent title={route.title} navigator={navigator} />
              renderScene ={(route, navigator)=> {
                    console.log(1);
                    console.log(route, navigator);
                   //route就是component
                   let Component = route.component;
                   return <Component navigator={navigator} {...route.params} />
              }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  page1: {
      backgroundColor: 'red',
      flex: 1
  },
    page2: {
        backgroundColor: 'yellow',
        flex: 1
    },
    images: {
        width: 24,
        height:20
    }
});
