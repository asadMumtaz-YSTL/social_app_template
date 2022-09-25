import { Platform } from 'react-native';

export const Colors = {
    appBGColor: '#6d5ff8',
    loginBtn: '#00b241',
    inputBoxBG: '#555555',
    inputLabel: '#127bb2',
    inputplaceholder: '#5c5c5c',
    inputColor: '#b0b0b0',
    orange: '#ffa300',
    cardcolor: '#424242',
    PU_time_color: '#b01c19',
    job_title_color: '#f79c00',
    job_des_color: '#dbdbdb',
    job_mob_color: '#0099fa',
    btn_yellow: '#ffea00',
    btn_redish: '#ff2725',
    btn_orange: '#ffbd00',
    btn_late_dri: '#aa14b6',
    btn_late_pax: '#0099fa',
    modal_late: '#424242',

    black: '#000000',
    white: '#FFFFFF',
    white90: '#FFFFFF90',
    red: '#D22222',
    green: '#00FF00',
    gray: '#c2c2c2',
    lightgray: '#E3E3E355',
    darkgray: '#1A1A1A',

    buttonDisabled: '#646462',

    divider: '#D8D8D8',
    lineColor: "rgba(255,255,255,0.5)",
    inputText: '#55555E',
    selectionColor: Platform.select({
        ios: '#55555E',
        android: '#55555E80',
    }),
};
