import React from 'react';
import './Presets.css';

const Presets = () => {
    return (
        <div className='payment-form'>
            <form className='inner-payment-form' method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                <input type="hidden" name="receiver" value="4100115456231869"/>
                <input type="hidden" name="formcomment" value="Presets Pack"/>
                <input type="hidden" name="short-dest" value="Presets Pack"/>
                <input type="hidden" name="label" value="$order_id"/>
                <input type="hidden" name="quickpay-form" value="shop"/>
                <input type="hidden" name="targets" value="Presets Pack"/>
                <input type="hidden" name="sum" value="10.00" data-type="number"/>
                <input type="hidden" name="comment" value="Возникли вопросы?"/>
                <input type="hidden" name="need-fio" value="false"/>
                <input type="hidden" name="need-email" value="false"/> 
                <input type="hidden" name="need-phone" value="false"/>
                <input type="hidden" name="need-address" value="false"/>
                <label className='card'><input type="radio" name="paymentType" value="AC" checked/></label>
                {/* <label><input type="radio" name="paymentType" value="PC"/>Яндекс.Деньгами</label> */}
                <input className='button-payment' type="submit" value="Купить набор пресетов всего за 499 руб"/>
            </form>
        </div>
    );
}

export default Presets;