import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import profiletest from "../../assets/Img_testing/aymen.jpg";

const Dashboard = () => {
  const location = useLocation();
  const link = location.state?.link; // Access the passed link
  const [postData, setPostData] = useState<{ post_id: string; post_type: string } | null>(null);
  const [error, setError] = useState<string | null>(null);  useEffect(() => {
    if (link) {
      const fetchInstagramData = async () => {
        try {
          const response = await fetch('http://localhost:5002/instagram', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: link }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log(result); // Debugging output
          setPostData(result); // Save the fetched data in state
        } catch (error) {
          console.error('Error fetching Instagram data:', error);
          setError('Failed to fetch data. Please try again.');
        }
      };

      fetchInstagramData();
    }
  }, [link]);
  useEffect(() => {
    // Dynamically load the Material Symbols CSS
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <div className="Dashboard_container container">
      <h1>
        <span className="material-symbols-outlined">dataset</span>Dashboard
      </h1>
      <div className="grid-container">
        <div className="items accountInfo">
          <div className="p2">
            <div className="titleSession">
              <span className="material-symbols-outlined">account_circle</span>
              <h5>User Name</h5>
            </div>
            <h5 className="accountName">Amounii</h5>
          </div>
          <div className="p1">
            <img src={profiletest} alt="" className="accountImg" />
          </div>
        </div>
        <div className="items postName">
          <div className="titleSession">
            <span className="material-symbols-outlined">sticky_note</span>
            <h5>Post Name</h5>
          </div>
          <h5>{postData ? postData.post_id : 'Loading...'}</h5>
        </div>
        <div className="items NumberOfComments">
          <div className="titleSession">
            <span className="material-symbols-outlined">sticky_note</span>
            <h5>Comments</h5>
          </div>
          <h5>150</h5>
        </div>
        <div className="items NumberOfLikes">
          <div className="titleSession">
            <span className="material-symbols-outlined">favorite</span>{" "}
            <h5>Likes</h5>
          </div>
          <h5>641</h5>
        </div>
        <div className="items NumberOfViews">
          <div className="titleSession">
            <span className="material-symbols-outlined">visibility</span>{" "}
            <h5>Views</h5>
          </div>
          <h5>641K</h5>
        </div>
        <div className="items TypeOfPost">
          <div className="titleSession">
            <span className="material-symbols-outlined">
              vertical_align_bottom
            </span>{" "}
            <h5>Type</h5>
          </div>
          <h5>{postData ? postData.post_type : 'Loading...'}</h5>
          <img src="https://unblast.com/wp-content/uploads/2018/07/Instagram-Mockup-1.jpg"></img>
        </div>
        <div className="items RatingOfComments">
          <div className="titleSession">
            <span className="material-symbols-outlined">clock_loader_20</span>{" "}
            <h5>Rating</h5>
          </div>
          <div className="RatingDisplay">
            <div className="positiveC">
              <span className="material-symbols-outlined">
                sentiment_satisfied
              </span>
              60%
            </div>
            <div className="NegativeC">
              <span className="material-symbols-outlined">
                sentiment_dissatisfied
              </span>
              40%
            </div>
          </div>
        </div>
        <div className="items CommentSession">
          <h5>Analyse Comments</h5>
          <div className="CommentSessionParts">
            <div className="CommentSession1"></div>
            <div className="CommentSession2"></div>
          </div>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dashboard;
