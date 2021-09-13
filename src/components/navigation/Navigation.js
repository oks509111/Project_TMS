import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import './navigation.scss';
import { Routes } from '../../utils/routes';

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
           
           <Link to ={Routes.TasksRote}>
            <div className = {activeRoute === Routes.TasksRote ? 'navigation-item-active' : 'navigation-item'}>
                    Мои задачи 
            </div>
            </Link>
           
            <Link to = {Routes.UsersRote}>
            <div className = {activeRoute === Routes.UsersRote ? 'navigation-item-active' : 'navigation-item'}>
                    Пользователи
            </div>
            </Link>
            <Link to = {Routes.SignInRote}>
            <div className = {activeRoute === Routes.SignInRote ? 'navigation-item-active' : 'navigation-item'}>
                  Выход
            </div>
            </Link>
        </div>
    )
    }

export default Navigation; 
