import ITheme from '../interfaces/ITheme';

export const ExpiredTheme:ITheme = {
    HEADER_TEXT_COLOR: '#FFF',
    HEADER_DATE_COLOR: '#FFF',
    PRICE_TEXT_COLOR: '#FFF',
    BG_COLOR: '#DB665F',
    ICON_COLOR: '#FFF',
    ICON: 'alert-triangle'
};

export const DefaultTheme:ITheme = {
    HEADER_TEXT_COLOR: '#263238',
    HEADER_DATE_COLOR: '#263238',
    PRICE_TEXT_COLOR: '#DB665F',
    ICON_COLOR: '#263238',
    BG_COLOR: '#FFF',
    ICON: 'clock'
}

export const PaidTheme:ITheme = {
    ...DefaultTheme,
    PRICE_TEXT_COLOR: '#55D5D9',
    PRICE_TEXT_UNDERLINE: true,
    ICON: 'check-circle'
};



export const PaidInitialTheme:ITheme = {
    ...DefaultTheme,
    PRICE_TEXT_COLOR: '#F0D164',
    ICON: 'file-minus'
}