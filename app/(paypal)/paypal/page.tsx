'use client'
import { MoneyUtils } from '@/util/MoneyUtils';
import { listOrder } from '@/util/Props/PaypalProps';
import PaypalButton from './paypal';

const Paypal = () => {
    const amount = MoneyUtils.ConvertToUSD(200000);
    const item: listOrder[] = [
        {
            name: 'Vé VIP',
            description: 'Vé xem phim tại Zuhot Cinema',
            quantity: '1',
            unit_amount: { currency_code: "USD", value: MoneyUtils.ConvertToUSD(100000) }
        },
        {
            name: 'Vé thường',
            description: 'Vé xem phim tại Zuhot Cinema',
            quantity: '1',
            unit_amount: { currency_code: "USD", value: MoneyUtils.ConvertToUSD(100000) }
        }
    ]
    return (
        <>
            <PaypalButton amount={amount} item={item} />
        </>
    );
}
export default Paypal;