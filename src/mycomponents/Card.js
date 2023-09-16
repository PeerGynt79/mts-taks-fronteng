import './styles.css';

//tarifName description familySubscribe annotation 
//minutes inetQty tvQty shareSpeed 
//kion socialNetworks messengers music lines deffender cashback others 
//priceSale price priceYear priceMonth monthlyPayment permanent 

export default function Card (props) {
    return (
        <div className="card-main">
                <div className="card__info">
                  <span className='card-title__title common__text_middle'> {props.data.tarifName}</span>
                  {props.data.description?<span className='card-title__title'>{props.data.description}</span>:<span></span>}
                  {props.data.minutes? <span className='card-title__title'>Минуты : {props.data.minutes} мин</span>:<span></span>}
                  {props.data.inetQty? <span className='card-title__title'>Интернет : {props.data.inetQty} ГБ</span>:<span></span>}
                  {props.data.tvQty? <span className='card-title__title'>ТВ-каналы : {props.data.tvQty} каналов</span>:<span></span>}
                  {props.data.shareSpeed? <span className='card-title__title'>Скорость интернета : {(props.data.shareSpeed>=1000)?String(props.data.shareSpeed/1000)+" Гбит/c":String(props.data.shareSpeed)+" Мбит/с"}</span>:<span></span>}
                  {props.data.socialNetworks? <span className='card-title__title'>Безлимитные соцсети </span>:<span></span>}
                  {props.data.kion? <span className='card-title__title'>Кинотеатр KION</span>:<span></span>}
                  {props.data.messengers? <span className='card-title__title'>Безлимитные мессенджеры</span>:<span></span>}
                  {props.data.music? <span className='card-title__title'>Музыка</span>:<span></span>}
                  {props.data.lines? <span className='card-title__title'>Строки</span>:<span></span>}
                  {props.data.deffender? <span className='card-title__title'>Защитник</span>:<span></span>}
                  {props.data.cashback? <span className='card-title__title'>Кешбэк</span>:<span></span>}
                  {props.data.others? <span className='card-title__title'>Другие привилегии</span>:<span></span>}
                </div>
            {props.data.annotation?<span className='card-title__price card-title__price_left' style={(props.data.annotation.length>35)?{width:'12%'}:{}}>{props.data.annotation}</span>:<span></span>}
            <span className='card-title__price card-title__price_sale'>{props.data.priceSale} ₽{props.data.permanent?(props.data.monthlyPayment?"/мес":"/год"):""}</span>
            {
                    (props.data.priceSale===props.data.price)? 
                    (
                        <span className='card-title__price card-title__price_right card-title__price_sale'>Полная стоимость</span>
                    )
                    :
                    (
                            <>
                            <span className='card-title__price card-title__price_right card-title__price_sale'>Стоимость по акции</span>
                            <span className='card-title__price card-title__price_left'>{props.data.price}₽{props.data.permanent?(props.data.monthlyPayment?"/мес":"/год"):""}</span>
                            <span className='card-title__price card-title__price_right'>Полная стоимость</span>
                            </>    
                    )
                }
            
        </div>    
    )
};
