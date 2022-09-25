import React, { useState } from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StatusBar,
    Alert,
    View,
    Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors } from '../../styles/colors';
import { styles } from './style';

const Login = ({ navigation, route }) => {
    // MY HOOKS
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isError, setError] = useState('');
    const [emailValidate, setEmailValidate] = useState('')
    const [passwordValidate, setPasswordValidate] = useState('')

    const ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            setEmailValidate('')
            return true
        }
        else {
            setEmailValidate('Invalid email format.')
            return false
        }
    }
    const CheckPasswordLength = (text) => {
        if (text.length > 5) { setPasswordValidate('') }
        else {
            setPasswordValidate('password is too short')
        }
    }

    // USER LOGIN FUNCRION
    const loginHandler = async () => {
        if (email.length <= 0) {
            Alert.alert(
                'Warning!',
                '\nPlease Enter Email & Password First...',
                [{
                    text: 'OK',
                    onPress: () => { },
                    style: 'cancel',
                }],
                {
                    cancelable: true,
                    onDismiss: () => { },
                },
            );
        } else {
            navigation.navigate('home');
        }
    }

    const disabled =
        email == '' ||
        password == '' ||
        emailValidate != '' ||
        passwordValidate != '';

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle={'light-content'} />

            {/* HEADING */}
            <View style={styles.logo_box}>
                <FastImage source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={styles.logo} />
            </View>

            {/* EMAIL */}
            <View style={styles.input_box}>
                {email != '' && <Text style={styles.input_label}>Email</Text>}
                <TextInput
                    placeholder="Please enter your valid E-mail"
                    style={[styles.input, { marginTop: email != '' ? -10 : 0, }]}
                    value={email}
                    onChangeText={text => {
                        setEmail(text)
                        ValidateEmail(text)
                    }}
                    multiline={false}
                    placeholderTextColor={Colors.inputplaceholder}
                    onFocus={() => setError('')}
                    onBlur={() => { }}
                />
            </View>
            {
                (emailValidate && email != '')
                && <Text style={styles.error}>
                    {emailValidate}
                </Text>
            }

            {/* PASSWORD */}
            <View style={styles.input_box}>
                {password != '' && <Text style={styles.input_label}>Password</Text>}
                <TextInput
                    placeholder="Password"
                    style={[styles.input, { marginTop: password != '' ? -10 : 0, }]}
                    secureTextEntry={secureTextEntry}
                    value={password}
                    onChangeText={text => {
                        setPassword(text)
                        CheckPasswordLength(text)
                    }}
                    multiline={false}
                    placeholderTextColor={Colors.inputplaceholder}
                    onFocus={() => setError('')}
                    onBlur={() => { }}
                />
            </View>
            {
                (passwordValidate && password != '')
                && <Text style={styles.error}>
                    {passwordValidate}
                </Text>
            }

            {/* LOGIN ERROR */}
            {isError != '' && <Text style={styles.error}>{isError}</Text>}

            {/* LOGIN BUTTON */}
            <TouchableOpacity
                activeOpacity={0.8} disabled={disabled}
                style={[styles.login_btn, { borderColor: disabled ? Colors.gray : Colors.appBGColor }]}
                onPress={() => { loginHandler() }}
            >
                <Text style={[styles.login_btn_text, { color: disabled ? Colors.gray : Colors.appBGColor, }]}>Continue</Text>
            </TouchableOpacity>

            {/* NOTE */}
            <Text style={styles.note}>
                <Text style={{ color: Colors.black, fontWeight: '900', }}>NOTE:</Text>
                {' Enter Any Dummy Email & Password For Login.'}
            </Text>

        </SafeAreaView >
    );
};

export default Login;