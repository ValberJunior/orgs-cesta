import { StyleSheet } from "react-native";


export default StyleSheet.create({
    name:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42
    },
    header:{
        flexDirection: 'row',
        paddingVertical: 12
    },
    logo:{
        width: 32,
        height: 32
    },
    label:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price:{
        color: '#2A9F85',
        fontFamily: 'MontserratBold',
        fontSize: 26,
        lineHeight: 42,
        marginTop:8
    },
    button:{
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    labelButton:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26
    }
});