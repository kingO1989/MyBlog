import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DbContextProvider } from "./utilities/DBContext";
import { ApolloProvider } from '@apollo/client';
import { client } from "./utilities/ApolloClient";
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DbContextProvider>
        <App />
      </DbContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);




/*
 <React.StrictMode>
   <BrowserRouter>
     <ApolloProvider client={client}>
       <DbContextProvider>
         <App />
       </DbContextProvider>
     </ApolloProvider>

   </BrowserRouter>

 </React.StrictMode>
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
