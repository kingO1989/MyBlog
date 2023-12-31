import React, { Suspense, useState, useEffect, useContext, useMemo } from 'react';
import { ErrorBoundary } from "react-error-boundary"
//import ErrorBoundary from '../Components/CustomErrorBoundary';
import ErrorFallback from '../Components/ErrorFallBack';
import { useNavigate } from 'react-router-dom';
import { filterPosts } from '../utilities/helpers';
import Post from '../Components/Post';


const PostLazyComponent = (React.lazy(() => import('../Components/Post')))
const HomePostsList = ({ posts, tab, theme, displayPostState, setDisplayPostState }) => {
    console.log("HomePostsList rendered")

    let tempstate = false;
    const navigate = useNavigate()
    const displayPosts = useMemo(
        () => {
            let newposts = filterPosts(posts, tab);
            // setDisplayPostState(true)
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
                    {displayPostState ? "children" : "Loading"}
                </Suspense>
            </ErrorBoundary>



        </div></>)
}

export default HomePostsList;