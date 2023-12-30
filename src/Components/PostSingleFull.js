import { useEffect, useState, useContext } from "react";
import { DbContext } from "../utilities/DBContext";

//Setup Supabase client


const PostSingleFull = (props) => {
    const dbContext = useContext(DbContext);
    //Modal begin
    //Alert will be used to simulate a modal
    const [showModalState, setShowModalState] = useState(false)

    const showModal = () => {
        setShowModalState(true)
    };
    const hideModal = () => {
        setShowModalState(true)
    };

    //Modal End


    const [postData, setData] = useState(

    );
    const [comment, setComment] = useState();
    let requiredPost = {};
    async function likepost(e) {
        const user = await dbContext.GetLoggedUserData();

        if (user) {
            /*
            RPC call is made to supabase, this increaments the likes value by 1
            */

            const result = await dbContext.AddLikes(props.postid);
            setData(prevState => ({
                ...prevState, post: {
                    ...prevState.post,
                    likes: result.likes
                }
            }));

        }
        else {
            alert("Login to like");
        }

    }

    async function saveComment(e) {

        const user = await dbContext.GetLoggedUserData();

        if (user) {

            let singleuser = await dbContext.GetSingleUserFromDB(user);
            let userid = singleuser.userid;
            const result = await dbContext.SaveComment(comment, props.postid, userid);

            setData(prevState => ({
                ...prevState, comments: [
                    ...prevState.comments, result
                ]
            }));


        }

        else {
            alert("Login to comment");
        }


    }

    async function fetchAndSetData() {

        let postid = props.postid;
        let allposts = await dbContext.GetTableOrViewRowsUsingPostId("postv", postid);
        let allcomments = await dbContext.GetTableOrViewRowsUsingPostId("commentsv", postid);
        requiredPost.post = allposts[0];
        requiredPost.comments = allcomments;

        // console.log(requiredPost)

        setData(
            requiredPost
        );
    }


    useEffect(() => {
        //Supabase call to fetch posts
        fetchAndSetData();

    }, [])

    return (
        <>
            {postData ?
                <div className="flex-post-container ">
                    <h3 className="post-title">{postData.post.title}</h3>
                    <div className="post-author"><b>By</b>{" "} {postData.post.name}</div>
                    <div className="post-detail ">
                        {postData.post.postdetails}
                    </div>
                    <div className="post-likes">
                        <span style={{
                            color: "red",
                            fontSize: "20px"

                        }}>  ❤</span> {"  "}{postData.post.likes} {"  "}
                        <button onClick={likepost}>like post</button>
                    </div>
                    <h3>Comments</h3>
                    <div className="post-comments">
                        {postData.comments.map((comment, idx) => {
                            //commentDetail userId
                            return (
                                <div key={idx}>
                                    <span>{comment.commentdetail}</span> by{" "}
                                    <span>{comment.name}</span>
                                </div>
                            );
                        })}
                    </div>{" "}

                    <h3>Add Comments</h3>
                    <textarea onChange={(e) => setComment(e.target.value)}></textarea>
                    <button onClick={saveComment}>Save</button>
                </div> : ""}
        </>
    )


}

export default PostSingleFull;