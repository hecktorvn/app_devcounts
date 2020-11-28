import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { DatePickerModal } from 'react-native-paper-dates';
import { format, lastDayOfMonth, setDate } from 'date-fns';


import Api from '../../Api';
import { currencyFormat } from '../../Util';


import CountItem from '../../components/CountItem';
import IGetCounts from '../../intefaces/IGetCounts';
import ICount from '../../interfaces/ICount';


import {
    HomeArea,
    InfoArea,
    PeriodArea,
    PeriodText,
    PeriodDate,
    PeriodDateText,
    PeriodSpace,

    TotalArea,
    TotalTextArea,
    TotalTitle,
    TotalValue,

    DebtArea,
    DebtAreaTextArea,
    DebtAreaTextPrefix,
    DebtAreaTextAreaLoad,
    DebtAreaText,

    HeaderHome,
    HeaderHomeText,
    HeaderHomeSpace,

    CountsArea,
    LoadingIcon
} from './styles';

export default () => {
    const [TotalCounts, setTotalCounts] = useState('0,00');
    const [dataCounts, setDataCounts] = useState({} as IGetCounts);
    
    const [DataPickerInit, setDataPickerInit] = useState(setDate(new Date(), 1));
    const [DataPickerFinal, setDataPickerFinal] = useState(lastDayOfMonth(new Date()));
    const [ShowPicker, setShowPicker] = useState(false);

    const [loading, setLoading] = useState(false);

    const getCounts = async () => {
        setLoading(true);
        setDataCounts({});
        setTotalCounts('0,00');

        let period = {
            init: format(DataPickerInit, 'yyyy-MM-dd'), 
            fim: format(DataPickerFinal, 'yyyy-MM-dd')
        };

        const data = await Api.GetCounts(0, period);
        
        if ( data.total ) {
            setTotalCounts( currencyFormat(data.total.TotalValue) );
        }

        setDataCounts(data);
        setLoading(false);
    };


    useEffect(() => {
        getCounts();
    }, [DataPickerInit, DataPickerFinal]);


    const isCloseToBottom = (e:any) => {   
        const { layoutMeasurement, contentOffset, contentSize } = e;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 60;
    }

    const handleScroll = async (e:any) => {
        if( isCloseToBottom(e.nativeEvent) && dataCounts.page < Math.floor(dataCounts.total.TotalPages) ) {
            let period = {
                init: format(DataPickerInit, 'yyyy-MM-dd'), 
                fim: format(DataPickerFinal, 'yyyy-MM-dd')
            };
            
            const data = await Api.GetCounts(parseInt(dataCounts.page)+1, period);
            let counts = [].concat(dataCounts.counts, data.counts);

            counts = {...data, counts, length: dataCounts.length + data.length};
            setDataCounts(counts);
        }
    };

    return (
        <HomeArea>
            <DatePickerModal
                onConfirm={()=>{}}
                onDismiss={()=>{}}
                visible={true}
                mode="range"
                startDate={DataPickerInit}
                endDate={DataPickerFinal}
            />

            <InfoArea>
                
                <PeriodArea onTouchEndCapture={()=>setShowPicker(true)}>
                    <PeriodText>Périodo</PeriodText>
                    <PeriodDate>
                        <PeriodDateText>{ format(DataPickerInit, 'dd/MM/yyyy') }</PeriodDateText>
                        <PeriodSpace />
                        <PeriodDateText>{ format(DataPickerFinal, 'dd/MM/yyyy') }</PeriodDateText>
                    </PeriodDate>
                </PeriodArea>

                <TotalArea>
                    <TotalTextArea>
                        <TotalTitle>Total</TotalTitle>
                        <TotalValue>R$ 0,00</TotalValue>
                    </TotalTextArea>

                    <DebtArea>
                        <Icon name="dollar-sign" size={24} color="#DFE2E7"/>
                        <DebtAreaTextArea>
                            {loading && <DebtAreaTextAreaLoad size="small" color="#6FAFE9"/>}
                            <DebtAreaTextPrefix>R$</DebtAreaTextPrefix>
                            <DebtAreaText>{TotalCounts}</DebtAreaText>
                        </DebtAreaTextArea>
                    </DebtArea>
                </TotalArea>

            </InfoArea>

            <HeaderHome>
                <HeaderHomeText>Contas a Pagar</HeaderHomeText>
                <HeaderHomeSpace />
            </HeaderHome>
            
            {loading && <LoadingIcon size="large" color="#6FAFE9"/>}

            <CountsArea 
                refreshControl={
                    <RefreshControl refreshing={false} onRefresh={getCounts}/>
                }
                onScroll={handleScroll}
            >  
                {dataCounts.counts && dataCounts.counts.map((count:ICount, i:Number) => (
                    <CountItem data={count} key={count.id}/>
                ))}
            </CountsArea>
        </HomeArea>
    );
}