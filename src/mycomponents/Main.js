import './styles.css';
import Cards from './Cards';
import LayoutBasic from './LayoutBasic';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getTarifs } from '../store/tarifs/tarifsSlice';
import {useDispatch} from 'react-redux';



function Main (){
    const dispatch=useDispatch();
    useEffect(() => {        
        dispatch(getTarifs());    
    },[]);

    return (
        <div  className='body-container'>
            <Routes>
                <Route path={'/'} element={<LayoutBasic/>}>
                    <Route index element={<Cards/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Main;