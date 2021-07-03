import React from 'react'
import data from './../../../data/inbox.json';
import { useContext, useCallback, useState,useMemo } from 'react';
import classes from './TextContent.css'

function TextContent({user,id}) {
    // FETCHING DATA FROM STORE
    console.log("text content user and id",user,id);
    const { getdata, selectedID, flagFilter, getFilteredData } = data;

    // FETCHING THE INDIVIDUAL DETAILS
    const mailJSON = () => {
        console.log("data  syyis",data,user);
        for(let i=0;i<data.length;i++)
        {
            if(data[i].mId===id)
                return data[i]
        }
    };


    // CREATING THE MAIL BODY
    const mailContent = () => {
        console.log("mailjson is",mailJSON);
        if (mailJSON()) {
                return (
                    <div className={classes.mainBody}>
                        <h2>Chat box</h2>

                        <main>
                            <div  dangerouslySetInnerHTML={{ __html: mailJSON().content }} className={classes.dangerousDiv}></div>
                        </main>
                    </div>
                )
            }
        
        return null;
    }

    return (
        <div className={classes.wrapper}>
            {mailContent()}
        </div>
    )
}

export default TextContent
