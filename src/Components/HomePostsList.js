import React, { Suspense, useState, useEffect, useContext, useMemo } from 'react';
import { ErrorBoundary } from "react-error-boundary"
//import ErrorBoundary from '../Components/CustomErrorBoundary';
import ErrorFallback from '../Components/ErrorFallBack';
import { useNavigate } from 'react-router-dom';
import { filterTodos } from '../utilities/helpers';
import Post from '../Components/Post';
//import PostLazyComponentWithSuspense from './PostLazyComponentWithSuspense';
//import Post from '../Components/Post';

const PostLazyComponent = (React.lazy(() => import('../Components/Post')))
const HomePostsList = ({ posts, tab, theme }) => {
    console.log("HomePostsList rendered")

    const navigate = useNavigate()




    /*     const updatedPosts = () => {
            let newposts = filterTodos(posts, tab);
    
            console.log(newposts)
            return newposts;
        }
        const displayPostNoMemo = updatedPosts(); */

    const displayPosts = useMemo(
        () => {
            let newposts = filterTodos(posts, tab);

            console.log(newposts)
            return newposts;


        },
        [posts, tab]
    );




    const children = useMemo(() => <PostLazyComponent hasError fetchedposts={displayPosts} />, [displayPosts]);




    return (<>
        <div className={`allposts ${theme ? 'dark' : 'light'}`}>



            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate('/')} >
                <Suspense fallback={<div>loading...</div>}>
                    {children}
                </Suspense>
            </ErrorBoundary>



        </div></>)
}

export default HomePostsList;