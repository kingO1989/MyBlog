//import { SupabaseContext } from "../Context/context";


export async function GetLoggedUserData(SupabaseContext) {

    if (SupabaseContext.auth) {
        const { data, error } = await SupabaseContext.auth.getUser();

        if (error) {
            console.error(error);
        }
        else if (data) {
            return data.user;
        }
    }
    else {
        console.log(SupabaseContext.auth)
        return undefined
    }


}


export async function FindSingleUserFromDB(SupabaseContext, user) {

    const { data, error } = await SupabaseContext.from("users")
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


export async function GetSingleUserFromDB(SupabaseContext, user) {


    const { data, error } = await SupabaseContext.from("users")
        .select("*")
        .eq("name", user.email);

    if (error) {
        return console.error(error)
    }
    else if (data) {


        return data[0];


    }

}


export async function IsUserInDatabaseIfNotCreateNewUser(SupabaseContext, truthy, user, setUsernameDisplay, setUsername) {

    if (truthy === true)//user exists
    {
        //do nothing
        setUsernameDisplay(true)
        setUsername(user.email)
        //  console.log(user.email)
    }

    else {

        SupabaseContext
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


export async function GetTableOrViewRowsUsingPostId(SupabaseContext, table, postid) {


    const { data, error } = await SupabaseContext
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


export function filterPosts(posts, tab) {
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }
    return posts.filter(post => {

        if (tab === 'Latest') {
            return true;
        } else if (tab === 'React' && post.postid === 1) {

            return true;
        } else if (tab === '.Net' && post.postid === 2) {
            return true;
        }
    });
}

