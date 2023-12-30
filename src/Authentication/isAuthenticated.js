
import { createClient } from '@supabase/supabase-js'


// Use a custom domain as the supabase URL



async function IsAuthenticated(superbasecontext) {
    return superbasecontext.auth.getUser().then(
        (userdata) => {

            // console.log(userdata)
            if (userdata.data.user == null) {
                return false
            }
            // console.log(userdata);
            if (userdata.data.user.aud === "authenticated")
                return true;
        }
    ).catch(err => console.error(err));


}


export default IsAuthenticated;