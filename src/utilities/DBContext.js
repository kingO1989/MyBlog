
import { createContext } from "react";
import { createClient } from '@supabase/supabase-js';

const SupabaseClient = createClient("https://rrlornksfpigswqaxtjd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybG9ybmtzZnBpZ3N3cWF4dGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxNDY2NTMsImV4cCI6MjAxMjcyMjY1M30.koiEhrPlXfhnXACQHrg4Lf3Axa8GQ97q3QiHPJ9AU_8"
)





async function GetLoggedUserData() {

    if (SupabaseClient.auth) {
        const { data, error } = await SupabaseClient.auth.getUser();

        if (error) {
            console.error(error);
        }
        else if (data) {
            return data.user;
        }
    }
    else {
        console.log(SupabaseClient.auth)
        return undefined
    }


}


async function FindSingleUserFromDB(user) {


    const { data, error } = await SupabaseClient.from("users")
        .select("*")
        .eq("name", user.email);
    if (error) {
        return console.error(error)
    }
    else if (data) {

        if (data.length === 0) {
            console.log("no data found");
            return false;
        }
        else
            return true;
    }

}


async function GetSingleUserFromDB(user) {


    const { data, error } = await SupabaseClient.from("users")
        .select("*")
        .eq("name", user.email);

    if (error) {
        return console.error(error)
    }
    else if (data) {


        return data[0];


    }

}


async function IsUserInDatabaseIfNotCreateNewUser(truthy, user, setUsernameDisplay, setUsername) {

    if (truthy === true)//user exists
    {
        //do nothing
        setUsernameDisplay(true)
        setUsername(user.email)
        //  console.log(user.email)
    }

    else {

        SupabaseClient
            .from('users')
            .insert({ name: user.email }).then(
                () => {
                    setUsernameDisplay(true)
                    setUsername(user.email)

                }
            )
            .catch((err) => console.error(err))

    }

}

async function GetTableOrViewRowsUsingPostId(table, postid) {


    const { data, error } = await SupabaseClient
        .from(table)
        .select("*")
        .eq("postid", postid);

    if (error) {
        console.log(error)
        return error;
    }

    else if (data) {


        if (Array.isArray(data))
            return data
        else return data[0];
        //return requiredPost
    }

}

async function GetAllPostsSummary() {
    const { data, error } = await SupabaseClient.from("postvignettev")
        .select("*");

    if (error) {
        console.log(" catch");
        console.log(error);
        //return error;
    }
    else if (data) {

        return data
    }


}

async function SignInWithGoogleProvider() {
    let provider = { provider: 'google', }
    try {
        const { user, error } = await SupabaseClient.auth.signInWithOAuth(provider)
        if (error) {
            // Handle error
            console.error(`Error during sign in with ${provider}:`, error.message);
        } else {
            // Handle successful sign in
            console.log(`User signed in with ${provider}:`, user);
        }
    } catch (error) {
        // Handle unexpected errors
        console.error(`Unexpected error during sign in with ${provider}:`, error.message);
    }
}

async function SignOutFromGoogleProvider(loadUserData) {
    try {
        const { error } = await SupabaseClient.auth.signOut();

        if (error) {
            // Handle error
            console.error('Error during sign out:', error.message);
        } else {
            // Handle successful sign out
            console.log('User signed out');
            loadUserData();
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('Unexpected error during sign out:', error.message);
    }
}


async function AddLikes(postid) {

    const { data, error } = await SupabaseClient.rpc("add_likes", {
        postid: postid,
    });
    console.log(data)
    if (error) {
        console.error(error);
    }
    else {

        return data;

    }
}


async function SaveComment(comment, postid, userid) {

    const { data, error } = await SupabaseClient.rpc("add_comments", {
        commentdetail: comment,
        postid: postid,
        userid: userid,
    });
    if (error) {
        console.error(error);
    }
    else {

        return data;

    }
}


//GetLoggedUserData FindSingleUserFromDB GetSingleUserFromDB IsUserInDatabaseIfNotCreateNewUser  GetTableOrViewRowsUsingPostId

const helperfunction = {
    AddLikes: AddLikes,
    SaveComment: SaveComment,
    GetLoggedUserData: GetLoggedUserData,
    FindSingleUserFromDB: FindSingleUserFromDB,
    GetSingleUserFromDB: GetSingleUserFromDB,
    IsUserInDatabaseIfNotCreateNewUser: IsUserInDatabaseIfNotCreateNewUser,
    GetTableOrViewRowsUsingPostId: GetTableOrViewRowsUsingPostId,
    SignInWithGoogleProvider: SignInWithGoogleProvider,
    SignOutFromGoogleProvider: SignOutFromGoogleProvider,
    GetAllPostsSummary: GetAllPostsSummary


}

const DbContext = createContext();

const DbContextProvider = (props) => {
    return (
        <DbContext.Provider value={helperfunction}>
            {props.children}
        </DbContext.Provider>
    );
}


export { DbContext, DbContextProvider };

