import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    participantItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#333",
        height: 50,
        margin: 8,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center'
    },
    participantName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    participantLocation: {
        fontSize: 14,
        fontWeight: '300',
        color: "#fff"
    },
    button: {
        backgroundColor: "#b52424",
        width: 30,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24,
    }
})