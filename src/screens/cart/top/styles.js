import { StyleSheet, Dimensions } from "react-native";
// Para conseguir captar o tamanho do device
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    top:{
        width: '100%',
        height: 578 / 768 * width // Ou seja, a largura da imagem / altura dela * a largura do device
    },
    title:{
        width:'100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#fff',
        padding: 16
    }
});