import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentSuccess = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>✅</Text>
            <Text style={styles.message}>Booking completed</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    icon: {
        fontSize: 60,
        color: '#28a745',
        marginBottom: 20,
    },
    message: {
        fontSize: 24,
        color: '#333',
    },
});

export default PaymentSuccess;
