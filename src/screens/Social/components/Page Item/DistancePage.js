import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


/**
 * This is a functional component representing the Distance display under users
 * private profile info.
 * 
 * @author NTU CZ2006 Team Alpha
 */
const DistancePage = (props) => {
    const longestDistance = props.longestDistance;

    return (
        <View style={[styles.container]}>

            {/* Data */}
            <View style={styles.dataContainer}>
                <Text style={styles.dataText}>
                    {(longestDistance/1000).toFixed(2)}
                </Text>
            </View>

            {/* Label */}
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Longest Distance (km)</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#7289DA',
    },
    labelContainer:{
        width: width * 0.5,
        height: height * 0.06,
        justifyContent: 'flex-start',
        // backgroundColor: 'pink',
    },
    labelText: {
        // fontWeight: 'bold',
        fontSize: 14,
        color: '#BABBBF',
        textAlign: 'center',
    },
    dataContainer:{
        width: width * 0.95,
        height: height * 0.1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    dataText:{
        fontWeight: 'bold',
        fontSize: 36,
        color: '#FFFFFF',
    },
});

export default DistancePage;