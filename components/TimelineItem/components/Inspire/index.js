import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

import { lineStyle } from '../../styles';

export default class Inspire extends Component {

    constructor(props) {
        super(props);

        this.inspireMe = this.inspireMe.bind(this);
    }

    state = {
        inspired : false,
        loadingInspiration: false
    };

    inspireMe(onHitInspireMe) {
        this.setState({ loadingInspiration: true })

        setTimeout(() => {
            this.setState({ inspired: true, loadingInspiration: false });
            onHitInspireMe();
        }, 1500)
    }

    render() {

        const {
            onHitInspireMe
        } = this.props;

        const {
            inspired,
            loadingInspiration
        } = this.state;

        return(
            <View style={styles.itemListStyleButTaller}>
                <View style={lineStyle} />
                <View style ={styles.inspireButtonSection}>
                  <View style={styles.content}>
                      <View style={styles.data}>
                          <Text h4 style={styles.name}>{ 'Need to kill some time?' }</Text>
                      </View>
                  </View>
                  <View style={styles.data}>
                      <Button
                          title={ inspired ? '' : 'Inspire me!' }
                          loading={loadingInspiration}
                          disabled={loadingInspiration}
                          textStyle={styles.buttonText}
                          buttonStyle={styles.button}
                          onPress={() => {
                              this.inspireMe(onHitInspireMe);
                          }}
                      />
                  </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    data: {
        paddingBottom: 10
    },
    inspireButtonSection : {
        marginLeft: 15,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        backgroundColor: '#E9F0FA'
        ,
        borderColor: '#003580',
        borderWidth: 1,
        borderStyle: 'dashed'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    button     : {
        backgroundColor: '#003580'
    },
    buttonText : {
        fontSize : 18
    },
    itemListStyleButTaller : {
        position: 'relative',
        overflow: 'hidden',
        padding : 10,
        margin  : 0,
        height  : 140,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ddd'
    }

});
