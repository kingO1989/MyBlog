import React, { useState, useEffect, useRef } from 'react';
import HomeTab from '../Components/HomeTab';
import HomePostsList from '../Components/HomePostsList';

// Use a custom domain as the supabase URL



function Home({ posts, theme }) {
    //  console.log(" Home Component loaded");
    console.log("Home rendered")
    const [tab, setTab] = useState('all');

    const tabRef = useRef();




    //Due to hooks rule, and the use of useQuery this has to be at the top level of the component
    // const wpposts = ApolloContext.GetAllPostsSummary();

    /*     async function GetWPData() {
            wpposts.then((data) => {
                setWPData(data)
                console.log(data)
            })
        } */

    useEffect(
        () => {



            // Get the navbar
            var navbar = tabRef.current;

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
        <>


            <main>
                <div className="authors_intro">
                    <div ref={tabRef}><HomeTab tab={tab} setTab={setTab} /></div>
                    {posts ? <HomePostsList posts={posts} tab={tab} theme={theme} /> : ""}
                </div>

                <div className="authors_recommendations"></div>
            </main>

        </>
    );
}

export default Home;
