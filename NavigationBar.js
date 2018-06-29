import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    StatusBar //状态栏
} from 'react-native';

import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusShape ={
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    hidden: PropTypes.bool
}

export default class NavigationBar extends Component {
     static propTypes={
         style: View.propTypes.style,
         title: PropTypes.string,
         titleView: PropTypes.element,
         hide: PropTypes.bool,
         leftButton: PropTypes.element,
         rightButton: PropTypes.element,
         statusBar: PropTypes.shape(StatusShape)

     }
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false
        }
    }
    constructor(props){
        super(props);
        this.state= {
            title: '',
            hide: false
        }
    }
    render(){
        let Status =<View style={[styles.statusBar,this.props.statusBar]} >
                        <StatusBar  {...this.props.statusBar} />
                    </View>
        let titleView =this.props.tileView ? this.props.titleView : <Text style={styles.title}>{this.props.title}</Text>
        let content = <View tyle={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return(
            <View style={[styles.container, this.props.style]}>
                {Status}
                {content}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'gray',
        flex: 1
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS==='ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
        flexDirection: 'row',

    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    tilte: {
        fontSize:30,
        color: '#ffffff'
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0
    }
})
