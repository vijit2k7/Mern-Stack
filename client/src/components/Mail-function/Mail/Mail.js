import React from 'react'
import { useContext, useCallback, useState,useMemo } from 'react';
import classes from './Mail.css';
import profile from './profile.jpg'
import data from './../../../data/inbox.json';
function Mail({user,getID}) {

    const [id,setID]=useState("")
    // MAIL CLICK HANDLER TO DISPLAY DATA ON RHS
    const mailOnClickHandler = useCallback((mID) => {
        console.log("mid is",mID)
        getID(mID);
    },[])

    const generateMailList = () => {
        //console.log("data is",data);
        return (
            (data).map((el, index) => {
                return (
                    <li>
                        <div style={{fontWeight:'bold'}} onClick={mailOnClickHandler.bind(null, el.mId)}>{el.subject}</div>
                        <img src={profile} alt="Trulli" width='40' height='40'></img>
                        <div style={{marginBottom:20}} onClick={mailOnClickHandler.bind(null, el.mId)}>{el.content.replace(/<.*?>/ig, "")}</div>
                    </li>
                )
            }))
    }

    // FALL BACK JSX WHEN NOTHING EXISTS
    const fallBackJSX = () => {
        return (
            <div className={classes.fallBackStyles}>
                <span>Nothing in the MailBox.</span>
                <span>Looks empty over here!</span>
            </div>
        )
    }
    return (
        <div className={classes.wrapper}>
            <main>
                <ul>
                    {generateMailList().length ? generateMailList() : fallBackJSX()}
                </ul>
            </main>
        </div>
    )
}

export default Mail
