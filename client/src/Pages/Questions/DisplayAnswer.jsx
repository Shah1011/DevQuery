import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";

const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div style={{ borderBottom: "3px solid #2d2e2f" }}>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p style={{fontSize: "15px", fontWeight: "400"}}>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "start", gap: "5px", backgroundColor: "#2d2e2f", padding: "10px", borderRadius: "5px" }}>
              <p style={{fontSize: "12px"}} >Answered {moment(ans.answeredOn).fromNow()} by</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "orange", fontSize: "12px", fontWeight: "500" }}
              >
                <>{ans.userAnswered}</>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
