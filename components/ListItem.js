import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default ({ title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingHorizontal:15,
    },
    text: {
        fontSize: 18,
    },
})