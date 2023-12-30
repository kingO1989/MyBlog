
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from 'react';
import './style.css';
import { createClient } from '@supabase/supabase-js'
import { DbContextProvider } from "./utilities/DBContext";
import Layout from "./Pages/Components/Layout";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utilities/ApolloClient";



// Use a custom domain as the supabase URL



function AppBridge() {
    console.log(client)

    return (


        <ApolloProvider client={client}>

            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="post/:postid" element={<PostPage />} />

                </Route>
            </Routes>


        </ApolloProvider >




    );
}

export default AppBridge;
