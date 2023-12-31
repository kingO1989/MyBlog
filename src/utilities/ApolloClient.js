import { useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client";

/* const client = new ApolloClient({
    uri: "http://ec2-54-174-14-190.compute-1.amazonaws.com/graphql",
    cache: new InMemoryCache()
}); */

const QueryTransformer = () => {


}

const ALL_POSTS = gql`
query AllPosts {
    posts {
      nodes {
        id
        title
        author {
          node {
            firstName
            lastName
          }
        }
        excerpt
        commentCount
      }
    }
  }
  `;


const SINGLE_POST = gql`

query SinglePost {
    post(id: "cG9zdDo2") {
      id
      title
      author {
        node {
          firstName
          lastName
        }
      }
      content
      comments {
        edges {
          node {
            id
            content
          }
        }
      }
      
    }
  }
`;
async function GetPostUsingPostId(table, postid) {



  //Get Posts Using post id

  /*  const { data, error } = await SupabaseClient
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
   */     //return requiredPost
}



async function GetAllPostsSummary() {

  const { loading, error, data } = useQuery(ALL_POSTS);

  const myPromise = new Promise((resolve, reject) => {

    if (error) {
      console.log(error)
      reject(error);
    }
    if (data) {



      const posts = data.posts.nodes.map((singlepost) => {

        //create object to hold transformed post

        let title = singlepost.title;
        let postid = singlepost.id;
        let name = singlepost.author.node.firstName + " " + singlepost.author.node.lastName;
        let abstract = singlepost.excerpt;
        let commentcount = singlepost.commentcount;
        let likes = 0;

        var obj = {

          title,
          postid,
          name,
          abstract,
          commentcount,
          likes
        };


        return obj;

      })
      resolve(posts);


    }

  });



  return myPromise;


}


async function SaveComment(comment, postid, userid) {

  //Save comment to wordpress as well via this blog site
  /*  const { data, error } = await SupabaseClient.rpc("add_comments", {
       commentdetail: comment,
       postid: postid,
       userid: userid,
   });
   if (error) {
       console.error(error);
   }
   else {
 
       return data;
 
   } */
}



async function GetLoggedUserData() {


}


async function FindSingleUserFromDB(user) {



}


async function GetSingleUserFromDB(user) {



}


async function IsUserInDatabaseIfNotCreateNewUser(truthy, user, setUsernameDisplay, setUsername) {



}

async function SignInWithGoogleProvider() {

}

async function SignOutFromGoogleProvider(loadUserData) {

}


async function AddLikes(postid) {


}



//GetLoggedUserData FindSingleUserFromDB GetSingleUserFromDB IsUserInDatabaseIfNotCreateNewUser  GetTableOrViewRowsUsingPostId

const ApolloContext = {
  GetAllPostsSummary: GetAllPostsSummary

}



const DbContextProvider = (props) => {

}


//export { client, ApolloContext };



