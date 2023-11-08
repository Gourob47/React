import React, {useEffect, useState} from 'react';
import {postCategories} from "../APIRequest/APIRequest.js";
import {NavLink} from "react-router-dom";

import '../assets/css/style.css'

// useState
// useEffect
// useRef


const Layout = (props) => {
    const [categories,SetCategories]=useState([]);
    useEffect(()=>{
        (async ()=>{
          if(sessionStorage.getItem('categories')){
              let res=sessionStorage.getItem('categories');
              SetCategories(JSON.parse(res));
          }
          else{
              let res= await postCategories();
              SetCategories(res)
              sessionStorage.setItem('categories',JSON.stringify(res))
          }
        })()
    },[])



    return (
        <div>
            <div className="navbar ">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" className="hh" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu">
                            <li><NavLink to={"/"}>হোম</NavLink></li>
                            {
                                categories.map((item,index)=>{
                                    return <li key={index}><NavLink  to={"/byCategory/"+item['id']}>{item['name']}</NavLink></li>
                                })
                            }
                        </ul>
                    </div>
                    <a className="btn">MR BLOG</a>
                </div>
                <div className="navbar-center">
                    <ul className="menu-2">
                        <li><NavLink to={"/"}>হোম</NavLink></li>
                        {
                            categories.map((item,index)=>{
                                return <li key={index.toString()}><NavLink  to={"/byCategory/"+item['id']}>{item['name']}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
            </div>

            {props.children}

            <footer/>

        </div>
    );
};

export default Layout;