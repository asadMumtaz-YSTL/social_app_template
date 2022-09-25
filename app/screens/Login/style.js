import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    logo_box: {
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 80,
        width: '100%',
    },
    logo: {
        alignSelf: 'center',
        height: 130,
        width: 130,
    },
    input_box: {
        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20,
        width: '86%',
        padding: 5,
        height: 55,
    },
    input_label: {
        color: Colors.inputLabel,
        fontWeight: '800',
        marginLeft: 5,
        fontSize: 14,
        flex: 1,
    },
    input: {
        color: Colors.black,
        paddingLeft: 5,
        fontSize: 16,
        padding: 0,
        flex: 1,
    },
    error: {
        alignSelf: 'center',
        textAlign: 'right',
        color: Colors.red,
        marginTop: 15,
        fontSize: 14,
        width: '86%',
        marginTop: 3,
    },
    login_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 30,
        width: '86%',
        height: 50,
    },
    login_btn_text: {
        textTransform: 'uppercase',
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 18,
    },
    note: {
        fontSize: 14, lineHeight: 20,
        alignSelf: 'center',
        color: Colors.black,
        textAlign: 'center',
        letterSpacing: 0.5,
        marginTop: 20,
        width: '80%',
    },
});