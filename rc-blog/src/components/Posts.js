import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";

function Posts() {
    return (
        <div className ="justify-content-between">
            <container>
                <col ><Post1/></col>
                <col ><Post2/></col>
                <col ><Post3/></col>
            </container>
        </div>
    );
};

export default Posts;