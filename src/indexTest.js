import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DbContextProvider } from "./utilities/DBContext";


export const Main = () => {

    return (<>
        <BrowserRouter>
            <DbContextProvider>
                <App />
            </DbContextProvider>
        </BrowserRouter>

    </>);
}

