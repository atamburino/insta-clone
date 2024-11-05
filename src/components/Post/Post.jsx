import React, { Component } from "react";
import "../../styles/Post.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

class Post extends Component {
  render() {
    return (
      // Container
      <div className="Post">
        {/* TopBar */}
        <div className="TopBar">
          <img src="https://placehold.co/65x65/png" alt="Profile" />
          <div className="UserInfo">
            <div className="UserNameRow">
              <h5>Username</h5>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  color: "#0095F6",
                  marginLeft: "4px",
                  marginRight: "4px",
                  fontSize: "16px",
                }}
              />
            </div>
            <h6>Location</h6>
          </div>
          <button>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
        {/* end of top bar */}

        {/* Post image maybe video one day */}
        <div className="Content">
          <img src="https://placehold.co/500x500/png" alt="UserPost" />
        </div>
        {/* end of content */}

        {/* Bottom Bar */}
        <div className="BottomBar">
          {/* Likes */}
          <div className="Likes">
            <div>
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <div>34.2K</div>
            </div>
          </div>
          {/* End of likes */}

          {/* Comments */}
          <div className="Comments">
            <div>
              <button>
                <FontAwesomeIcon icon={faComment} />
              </button>
              <div>98</div>
            </div>
          </div>
          {/* end of comments */}

          {/* Share */}
          <div className="Share">
            <div>
              <button>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <div>10.1K</div>
            </div>
          </div>
          {/* end of share */}

          {/* Save */}
          <div className="Save">
            <div>
              <button>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          {/* end of save */}

          {/* End of bottom bar */}
        </div>
      </div>
      // End of Container
    );
  }
}

export default Post;
