import { Link } from 'react-router-dom';
import './styles.css';
import {useDispatch} from 'react-redux';
import { getTarifs } from '../store/tarifs/tarifsSlice';


function Footer() {
    const dispatch=useDispatch();
    return (
        <footer className="footer" >
            <div className="footer__block">
                <span> Верстка, дизайн, UI/UX etc - не мой конёк </span>
                <Link to = {'/'} onClick={(e)=>dispatch(getTarifs())}> Парсить - Обновить </Link>
            </div>
        </footer>        
    )
}
export default Footer;
