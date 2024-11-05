import React, { Component } from "react";
import "../../styles/Post.css";

class Post extends Component {
  render() {
    return (

      // Container
      <div className="Post">

        {/* TopBar */}
        <div className="TopBar">
          <img
            src="https://placehold.co/65x65/png"
            alt="Profile"
          />
          <h5>Username</h5>
          <img
            src="https://placehold.co/25x25/png"
            alt="Verified"
          />
          <h6>Location</h6>
          <button>...</button>
        </div>
        {/* end of top bar */}

        {/* Post image maybe video one day */}
        <div className="Content">
        <img
            src="https://placehold.co/500x500/png"
            alt="UserPost"
          />
        </div>
        {/* end of content */}

        {/* Bottom Bar */}

        {/* Likes */}
        <div className="Likes">
          <div>
            <button>

            </button>
            <div>

            </div>
          </div>
        </div>
        {/* End of likes */}

        {/* Comments */}
        <div className="Comments">
          <div>
            <button>

            </button>
            <div>

            </div>
          </div>
        </div>
        {/* end of comments */}

        {/* Share */}
        <div className="Share">
          <div>
            <button>

            </button>
            <div>

            </div>
          </div>
        </div>
        {/* end of share */}


        {/* Share */}
        <div className="Share">
          <div>
            <button>

            </button>
            <div>

            </div>
          </div>
        </div>
      {/* end of share */}



        {/* End of bottom bar */}

      </div>
      // End of Container
    );
  }
}

export default Post;
