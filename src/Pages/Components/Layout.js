import { Outlet, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { DbContext } from "../../utilities/DBContext";
import './Layout.css';





const Layout = () => {


    const dbContext = useContext(DbContext);
    const [loginDisplay, setLoginDisplay] = useState(true);
    const [usernameDisplay, setUsernameDisplay] = useState(false);
    const [username, setUsername] = useState(true);


    async function signInWithProvider() {
        dbContext.SignInWithGoogleProvider()
    }

    async function signOut() {
        dbContext.SignOutFromGoogleProvider(loadUserData)
    }

    async function loadUserData() {
        const user = await dbContext.GetLoggedUserData()
        if (user) {

            setLoginDisplay(false);
            const userIsFound = await dbContext.FindSingleUserFromDB(user);
            dbContext.IsUserInDatabaseIfNotCreateNewUser(userIsFound, user, setUsernameDisplay, setUsername);
        }
        else {
            setLoginDisplay(true);
            setUsernameDisplay(false)
        }

    }


    useEffect(
        () => {

            loadUserData();
        }, [])

    return (
        <>

            <header data_test="header">
                <div className="logo_search">
                    <div className="logo">

                        <Link data_test="logo" to="/">Logo</Link>

                    </div>
                    <div className="search">
                        <input type="text" name="" id="" placeholder="search" />

                    </div>
                </div>
                <div className="my_works_social_media_notifications">


                    <span className="notify"><i className="fa-regular fa-bell fontawesome_item"></i></span><span className="portfolio"><Link className="">
                        <i className="fa-regular fa-address-card fontawesome_item"></i> </Link></span>
                    <span class="dropdown profile">
                        <Link href=""> <i className="fa-solid fa-user fontawesome_item"></i> </Link>
                        <div class="dropdown-content">
                            {


                                usernameDisplay ?
                                    <>
                                        {username}

                                    </> : <>

                                    </>

                            }
                            <br></br>

                            {


                                loginDisplay ?
                                    <>
                                        <button onClick={signInWithProvider}>Google Signin</button>

                                    </> : <>
                                        <button onClick={signOut}>Google Sign out </button>
                                    </>

                            }
                        </div>
                    </span>

                </div>
            </header>



            <Outlet />

        </>

    )
};

export default Layout;