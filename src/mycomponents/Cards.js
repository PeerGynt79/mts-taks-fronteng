import './styles.css';
import Card from './Card';
//import axios from 'axios';
import { useEffect, useState} from 'react';
import {useSelector} from 'react-redux'


export default function Cards () {

//benefits states
const [kion,setKion] = useState(false);
const [music,setMusic] = useState(false);
const [social,setSocial] = useState(false);
const [chat,setChat] = useState(false);
const [lines,setLines] = useState(false);
const [deffender,setDeffender] = useState(false);
const [cashback,setCashback] = useState(false);
//features states
const [inet,setInet] = useState([]);
const [tv,setTv] = useState([]);
const [speed,setSpeed] = useState([]);
const [minut,setMinut] = useState([]);
//features values 
const [inetVal,setInetVal] = useState('не важно');
const [tvVal,setTvVal] = useState('не важно');
const [speedVal,setSpeedVal] = useState('не важно');
const [minutVal,setMinutVal] = useState('не важно');
const [tarifs] = useSelector((state) => [state.tarifs.entities]);
//console.log(tarifs)


//fetch to deployed backend have to return array as json structure
//const tariffs = JSON.parse('[{"idx":0,"tarifName":"МЫ МТС+","description":"Семейная подписка с мобильной связью и домашним интернетом","familySubscribe":true,"benefits":"Онлайн-кинотеатр KION, безлимитные соцсети и мессенджеры","annotation":"С пятого месяца — 1250 ₽/мес","minutes":2500,"inetQty":40,"tvQty":237,"shareSpeed":1000,"kion":true,"socialNetworks":true,"messengers":true,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":990,"price":1250,"priceYear":15000,"priceMonth":1250,"monthlyPayment":true,"permanent":true},{"idx":1,"tarifName":"Весь МТС Супер","description":"Просто 3 в 1: мобильная связь, интернет и ТВ","familySubscribe":false,"benefits":"Онлайн-кинотеатр KION, безлимитные мессенджеры","annotation":"С четвёртого месяца — 850 ₽/мес","minutes":1500,"inetQty":30,"tvQty":237,"shareSpeed":500,"kion":true,"socialNetworks":false,"messengers":true,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":700,"price":850,"priceYear":10200,"priceMonth":850,"monthlyPayment":true,"permanent":true},{"idx":2,"tarifName":"Весь МТС Лайт 500","description":"Домашний интернет и мобильная связь с удобным пакетом ГБ","familySubscribe":false,"benefits":"","annotation":"Стоимость по акции первые 3 месяца, далее — 650 ₽/мес","minutes":0,"inetQty":30,"tvQty":0,"shareSpeed":500,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":500,"price":650,"priceYear":7800,"priceMonth":650,"monthlyPayment":true,"permanent":true},{"idx":3,"tarifName":"Весь МТС Супер 1 Гбит","description":"Просто 3 в 1: мобильная связь, интернет и ТВ","familySubscribe":false,"benefits":"Онлайн-кинотеатр KION, безлимитные мессенджеры","annotation":"","minutes":1500,"inetQty":30,"tvQty":237,"shareSpeed":1000,"kion":true,"socialNetworks":false,"messengers":true,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":1100,"price":1100,"priceYear":13200,"priceMonth":1100,"monthlyPayment":true,"permanent":true},{"idx":4,"tarifName":"Весь МТС Лайт 1 Гбит","description":"Домашний интернет и мобильная связь с удобным пакетом ГБ","familySubscribe":false,"benefits":"","annotation":"","minutes":0,"inetQty":30,"tvQty":0,"shareSpeed":1000,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":990,"price":990,"priceYear":11880,"priceMonth":990,"monthlyPayment":true,"permanent":true},{"idx":5,"tarifName":"Весь МТС Лайт 200","description":"Домашний интернет и мобильная связь с удобным пакетом ГБ","familySubscribe":false,"benefits":"","annotation":"","minutes":0,"inetQty":30,"tvQty":0,"shareSpeed":200,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":500,"price":500,"priceYear":6000,"priceMonth":500,"monthlyPayment":true,"permanent":true},{"idx":6,"tarifName":"Весь МТС Экстра","description":"Спутниковое ТВ, интернет и онлайн-кинотеатр KION","familySubscribe":false,"benefits":"Онлайн-кинотеатр KION","annotation":"Первый месяц","minutes":0,"inetQty":100,"tvQty":250,"shareSpeed":0,"kion":true,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":1190,"price":1190,"priceYear":14280,"priceMonth":1190,"monthlyPayment":true,"permanent":true},{"idx":7,"tarifName":"Семейная подписка МТС Premium","description":"Можно поделиться с двумя близкими и пользоваться всеми привилегиями втроём","familySubscribe":true,"benefits":"KION, Музыка, Строки, Защитник, кешбэк и другие привилегии","annotation":"30 дней бесплатно при подключении","minutes":0,"inetQty":50,"tvQty":0,"shareSpeed":0,"kion":true,"socialNetworks":false,"messengers":false,"music":true,"lines":true,"deffender":true,"cashback":true,"others":true,"priceSale":299,"price":299,"priceYear":3588,"priceMonth":299,"monthlyPayment":true,"permanent":true},{"idx":8,"tarifName":"МТС Premium","description":"Гигабайты интернета, кино, музыка, а ещё умная защита от спам-звонков","familySubscribe":false,"benefits":"KION, Музыка, Строки, Защитник, кешбэк и другие привилегии","annotation":"30 дней бесплатно при подключении","minutes":0,"inetQty":50,"tvQty":0,"shareSpeed":0,"kion":true,"socialNetworks":false,"messengers":false,"music":true,"lines":true,"deffender":true,"cashback":true,"others":true,"priceSale":249,"price":249,"priceYear":2988,"priceMonth":249,"monthlyPayment":true,"permanent":true},{"idx":9,"tarifName":"Выгодный обмен","description":"Мир развлечений для всей семьи на выгодных условиях для пользователей Спутникового ТВ МТС","familySubscribe":false,"benefits":"","annotation":"","minutes":0,"inetQty":0,"tvQty":250,"shareSpeed":0,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":3500,"price":6500,"priceYear":6500,"priceMonth":6500,"permanent":false,"monthlyPayment":false},{"idx":10,"tarifName":"Годовой","description":"Пакет ТВ-каналов Стандартный с годовой платой и скидкой 50%","familySubscribe":false,"benefits":"","annotation":"","minutes":0,"inetQty":0,"tvQty":250,"shareSpeed":0,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":1000,"price":2000,"priceYear":2000,"priceMonth":167,"monthlyPayment":false,"permanent":true},{"idx":11,"tarifName":"Год на максимуме!","description":"Пакет ТВ-каналов Максимальный по стоимости Стандартного","familySubscribe":false,"benefits":"","annotation":"0 ₽ в первый месяц, далее — 250 ₽/мес","minutes":0,"inetQty":0,"tvQty":263,"shareSpeed":0,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":250,"price":250,"priceYear":3000,"priceMonth":250,"monthlyPayment":true,"permanent":true},{"idx":12,"tarifName":"KION","description":"KION — ТВ и кино в одном пакете","familySubscribe":false,"benefits":"","annotation":"","minutes":0,"inetQty":0,"tvQty":237,"shareSpeed":0,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":160,"price":160,"priceYear":1920,"priceMonth":160,"monthlyPayment":true,"permanent":true},{"idx":13,"tarifName":"Оптимальный","description":"","familySubscribe":false,"benefits":"","annotation":"","minutes":0,"inetQty":0,"tvQty":80,"shareSpeed":0,"kion":false,"socialNetworks":false,"messengers":false,"music":false,"lines":false,"deffender":false,"cashback":false,"others":false,"priceSale":120,"price":120,"priceYear":1440,"priceMonth":120,"monthlyPayment":true,"permanent":true}]');


//const parseData = async ()=>{
//    const resp = await axios.get('http://localhost:8000')
//    const tariffs = await resp.data
//};
//console.log(parseData);

//const tariffs = await async parseData()
//const res = await fetch("http://localhost:8000");
//const json = await res.json();
//return json.data
//}
//console.log(parseData());
//const tariffs = parseData(res).data
//useEffect( () => {
//    setBasketActive(basket.reduce((accum, item) => accum + item, 0))
//},[basket])

useEffect( () => {
    let newInetSet = new Set(tarifs.map((item)=>item.inetQty));
    newInetSet.delete(0);
    let newInet = Array.from(newInetSet);
    newInet.sort((a, b) =>  a - b);
    newInet.unshift('не важно');
    setInet(newInet)
},[tarifs])
useEffect( () => {
    let newTvSet = new Set(tarifs.map((item)=>item.tvQty));
    newTvSet.delete(0);
    let newTv = Array.from(newTvSet);
    newTv.sort((a, b) =>  a - b);
    newTv.unshift('не важно');
    setTv(newTv)
},[tarifs])
useEffect( () => {
    let newMinutSet = new Set(tarifs.map((item)=>item.minutes));
    newMinutSet.delete(0);
    let newMinut = Array.from(newMinutSet);
    newMinut.sort((a, b) =>  a - b);
    newMinut.unshift('не важно');
    setMinut(newMinut)
},[tarifs])
useEffect( () => {
    let newSpeedSet = new Set(tarifs.map((item)=>item.shareSpeed));
    newSpeedSet.delete(0);
    let newSpeed = Array.from(newSpeedSet);
    newSpeed.sort((a, b) =>  a - b);
    newSpeed.unshift('не важно');
    setSpeed(newSpeed)
},[tarifs])
return (
    <>
        <div className="header__side header-side__head header_search" style={{paddingTop:'1vw',paddingBottom:'1vw'}}>
            <div className="header__side"style={{paddingBottom:'1vw',paddingLeft:'2vw',}}>
                <div className="main-form__checkbox">
                    <input id="checkbox" type="checkbox" name='kion-checkbox' onChange={(e)=>setKion(e.target.checked)}/>
                    <label className="main-form__label_checkbox" htmlFor="checkbox">KION</label>
                </div>
                <div className="main-form__checkbox">
                        <input id="checkbox" type="checkbox" name='music-checkbox' onChange={(e)=>setMusic(e.target.checked)}/>
                        <label className="main-form__label_checkbox" htmlFor="checkbox" >Музыка</label>
                </div>
                <div className="main-form__checkbox">
                    <input id="checkbox" type="checkbox" name='social-checkbox' onChange={(e)=>setSocial(e.target.checked)}/>
                    <label className="main-form__label_checkbox" htmlFor="checkbox">Соцсети</label>
                </div>
                <div className="main-form__checkbox">
                    <input id="checkbox" type="checkbox" name='messenger-checkbox' onChange={(e)=>setChat(e.target.checked)}/>
                    <label className="main-form__label_checkbox" htmlFor="checkbox">Месс-ры</label>
                </div>
                <div className="main-form__checkbox">
                    <input id="checkbox" type="checkbox" name='lines-checkbox' onChange={(e)=>setLines(e.target.checked)}/>
                    <label className="main-form__label_checkbox" htmlFor="checkbox">Строки</label>
                </div>
                <div className="main-form__checkbox">
                        <input id="checkbox" type="checkbox" name='deffender-checkbox' onChange={(e)=>setDeffender(e.target.checked)}/>
                        <label className="main-form__label_checkbox" htmlFor="checkbox">Защитник</label>
                </div>
                <div className="main-form__checkbox">
                        <input id="checkbox" type="checkbox" name='cashback-checkbox' onChange={(e)=>setCashback(e.target.checked)}/>
                        <label className="main-form__label_checkbox" htmlFor="checkbox">Кешбэк</label>
                </div>
            </div>
            <div className="header__side">
                <div className="header__side">
                    <span className="header-side__item">Инет</span>
                    <select className="header-side__item header-side__item_input"  name='inetQty-selector' value={inetVal} onChange={(e)=>setInetVal(e.target.value)}>
                        {inet.map((item,idx)=> <option  className='header-side__item header-side__item_input' key={idx}>{item}</option>)}
                    </select>        
                </div>
                <div className="header__side">
                    <span className="header-side__item">Минуты</span>
                    <select className="header-side__item header-side__item_input"  name='minutes-selector' value={minutVal} onChange={(e)=>setMinutVal(e.target.value)}>
                        {minut.map((item,idx)=> <option  className='header-side__item header-side__item_input' key={idx}>{item}</option>)}
                    </select>        
                </div>
                <div className="header__side">
                    <span className="header-side__item">Скорость</span>
                    <select className="header-side__item header-side__item_input"  name='shareSpeed-selector' value={speedVal} onChange={(e)=>setSpeedVal(e.target.value)}>
                        {speed.map((item,idx)=> <option  className='header-side__item header-side__item_input' key={idx}>{item}</option>)}
                    </select>        
                </div>
                <div className="header__side">
                    <span className="header-side__item">Каналы</span>
                    <select className="header-side__item header-side__item_input"  name='tvQty-selector' value={tvVal} onChange={(e)=>setTvVal(e.target.value)}>
                        {tv.map((item,idx)=> <option  className='header-side__item header-side__item_input' key={idx}>{item}</option>)}
                    </select>        
                </div>

            </div>
        </div>
        <h1  className='common__text_big'>Подходящий тариф</h1>
        <div className="main__cards-area">
                {tarifs
                    .filter((item)=>kion?item.kion:true)
                    .filter((item)=>music?item.music:true)
                    .filter((item)=>social?item.socialNetworks:true)
                    .filter((item)=>lines?item.lines:true)
                    .filter((item)=>chat?item.messengers:true)
                    .filter((item)=>deffender?item.deffender:true)
                    .filter((item)=>cashback?item.cashback:true)
                    .filter((item)=>(String(item.inetQty)===inetVal)||(inetVal==='не важно'))
                    .filter((item)=>(String(item.tvQty)===tvVal)||(tvVal==='не важно'))
                    .filter((item)=>(String(item.shareSpeed)===speedVal)||(speedVal==='не важно'))
                    .filter((item)=>(String(item.minutes)===minutVal)||(minutVal==='не важно'))
                    .map((item)=>{
                                return <Card key={item.idx}
                                data = {item}
                              ></Card>
                              
                    })
                }
        </div>
    </>
)
};
