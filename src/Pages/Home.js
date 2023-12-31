import React, { useState, useEffect, useRef } from 'react';
import HomeTab from '../Components/HomeTab';
import HomePostsList from '../Components/HomePostsList';

// Use a custom domain as the supabase URL



function Home({ posts, theme }) {
    //  console.log(" Home Component loaded");
    console.log("Home rendered")
    const [tab, setTab] = useState('Latest');
    const [displayPostState, setDisplayPostState] = useState(true);
    const navRef = useRef();




    useEffect(
        () => {



            // Get the navbar
            var navbar = navRef.current;

            // Get the offset position of the navbar
            var sticky = navbar.offsetTop;

            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function myFunction() {
                // alert("I ran");
                console.log("I ran");
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky");
                } else {
                    navbar.classList.remove("sticky");
                }
            }

            window.addEventListener("scroll", myFunction)
            return () => window.removeEventListener("scroll", myFunction);



        }
        , []);

    return (
        <main data_test="main">
            <div className="authors_intro" data_test="authors_content">
                <div data_test="tabitemscontainer"
                    ref={navRef}><HomeTab tab={tab}
                        setTab={setTab}
                        displayPostState={displayPostState}
                        setDisplayPostState={setDisplayPostState}
                    /></div>
                {posts ? <HomePostsList posts={posts}
                    tab={tab}
                    theme={theme}
                    displayPostState={displayPostState}
                    setDisplayPostState={setDisplayPostState}
                /> : ""}
            </div>
            <div className="authors_recommendations"></div>
        </main>
    );
}

export default Home;
