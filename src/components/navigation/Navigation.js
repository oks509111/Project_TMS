/* import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import './navigation.css';


const Navigation = () => {
    const history = useHistory()
    const [activeRoute, setActiveRoute] = useState (history.location.pathname)

    useEffect(() => {
        return history.listen((location)=>{
            setActiveRoute (location.pathname);
        })
    }, [history]);
    
    return (
        <div className = 'navigation-container'>
            <Link to ='/'>
            <div className = {activeRoute === '/' ? 'navigation-item-active' : 'navigation-item'}>
                    Домой
            </div>
            </Link>
            <Link to ='/signIg'>
            <div className = {activeRoute === '/signIg' ? 'navigation-item-active' : 'navigation-item'}>
                    Логин
            </div>
            </Link>
            <Link to ='/signUp'>
            <div className = {activeRoute === '/signUp' ? 'navigation-item-active' : 'navigation-item'}>
                    Регистрация   
            </div>
            </Link>
            <Link to ='/tascs'>
            <div className = {activeRoute === '/tascs' ? 'navigation-item-active' : 'navigation-item'}>
                    Задачи 
            </div>
            </Link>
            <Link to ='/users'>
            <div className = {activeRoute === '/users' ? 'navigation-item-active' : 'navigation-item'}>
                    Пользователи 
            </div>
            </Link>
        </div>
    )
    }

export default Navigation; */
