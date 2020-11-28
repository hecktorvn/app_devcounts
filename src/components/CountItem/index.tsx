import React from 'react';
import { isBefore, parseISO, format, formatDistanceToNowStrict } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/Feather';

import ICount from '../../interfaces/ICount';
import { currencyFormat } from '../../Util';

import { 
    ExpiredTheme, 
    DefaultTheme, 
    PaidTheme,
    PaidInitialTheme 
} from '../../themes/CountItem';

import {
    CountArea,
    CountHeader,
    CountHeaderText,
    CountHeaderDate,
    CountBody,
    CountBodyPrice,
    CountBodyPricePrefix,
    CountBodyPriceText,
    CountBodyPortion,
    CountBodyPriceNote,
    CountHeaderTextBox
} from './styles';


interface ICountItem {
    data: ICount;
}

const CountItem:React.FC<ICountItem> = ({data}) => {
    const maturity = parseISO(data.maturity);

    const expired = isBefore(maturity, new Date());
    const paid = data.state == 9 || data.paid == data.value;
    const initialPaid = data.state !== 9 && data.paid < data.value && data.paid > 0;
    
    let theme = expired ? ExpiredTheme : DefaultTheme;
    
    if (paid) {
        theme = PaidTheme;
    } else if (initialPaid) {
        theme = PaidInitialTheme;
    }

    return (
        <CountArea theme={theme}>
            <CountHeader>
                <CountHeaderTextBox>
                    <Icon name={theme.ICON || ''} style={{marginTop: -2}} size={22} color={theme.ICON_COLOR}/>
                    <CountHeaderText theme={theme}>{data.description}</CountHeaderText>
                </CountHeaderTextBox>
                <CountHeaderDate theme={theme}>{format(maturity, 'dd/MM/yyyy')}</CountHeaderDate>
            </CountHeader>

            <CountBody>
                <CountBodyPrice>
                    <CountBodyPricePrefix theme={theme}>R$</CountBodyPricePrefix>
                    <CountBodyPriceText theme={theme}>{ currencyFormat(data.total) }</CountBodyPriceText>
                    <CountBodyPriceNote>
                        {data.note && ' - ' + ( 
                            data.note.length > 35 ?
                            data.note.substr(0, 35) + '...' :
                            data.note
                        )}

                        {!data.note && !paid && 
                            ' - ' + ( expired ? 'Vencido ' : 'Vencerá ') + 
                            formatDistanceToNowStrict(maturity, { addSuffix: true, locale: ptLocale })
                        }

                        {!data.note && paid && ' - Conta paga.'}
                    </CountBodyPriceNote>
                </CountBodyPrice>

                <CountBodyPortion>{data.portion}</CountBodyPortion>
            </CountBody>
        </CountArea>
    );
};


export default CountItem;