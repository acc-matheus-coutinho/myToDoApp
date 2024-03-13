import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 12,
        marginHorizontal: 12,
        justifyContent: "flex-start",
    },
    eventName: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
    },
    eventDate: {
        color: "#fff",
        fontSize: 14,
        paddingTop: 6,
        fontWeight: '200'
    },
    form: {
        width: '100%',
        marginVertical: 36,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    input: {
        flex: 1,
        backgroundColor: '#1f1e25',
        height: 56,
        color: "#fff",
        padding: 16,
        fontSize: 16,
        borderRadius: 8
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#31cf67',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 12
    },
    buttonText: {
        color: "#fff",
        fontSize: 36
    },
    participantsList: {
        borderColor: "#ddd",
        borderRadius: 8,
        borderWidth: 2
    },
})