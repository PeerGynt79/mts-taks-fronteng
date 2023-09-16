import './styles.css';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function LayoutBasic (){
    return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>    
    )
}