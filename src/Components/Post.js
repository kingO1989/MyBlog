
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {

    console.log("Post ran")
    return (
        <div className="flex-container">
            {
                //Properties of fetchedposts are mapped accordingly

                props.fetchedposts ? props.fetchedposts.map((post, idx) => {
                    return (


                        <div key={idx} className="post_vignette">
                            <div className="post_data">
                                <div className="date">Aug 2</div>
                                <h3 className="title">{post.title}</h3>
                                <div className="details">
                                    <p>
                                        {post.abstract}      </p>
                                    <Link to={`post/${post.postid}`}>View Post</Link>
                                </div>
                                <div className="vignette_footer">
                                    <div className="tags_and_time_to_read">
                                        <span className="tag">React</span>
                                        <span className="tag">database</span>
                                        <span className="time">3 mins read</span>
                                        <span> {post.likes}</span>
                                    </div>
                                    <div className="other_functions">
                                        <i className="fa-solid fa-floppy-disk"></i>
                                        <span>save </span>
                                    </div>
                                </div>
                            </div>
                            <div className="post_image"></div>
                        </div>


                    )
                }) : ""

            }






        </div>
    )


}

export default Post;