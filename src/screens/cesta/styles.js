import { StyleSheet, Dimensions } from "react-native";

// Para conseguir captar o tamanho do device
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    topo:{
        width: '100%',
        height: 578 / 768 * width // Ou seja, a largura da imagem / altura dela * a largura do device
    },
    title:{
        width:'100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        color: '#fff',
        padding: 16
    },
    wrapper:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontFamily: 'MontserratBold'
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
        fontFamily: 'MontserratRegular'
    },
    description:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontserratRegular'
    },
    price:{
        color: '#2A9F85',
        fontFamily: 'MontserratBold',
        fontSize: 26,
        lineHeight: 42,
        marginTop:8
    }
});