import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div style={{ fontWeight: "400", marginTop: "15px" }}>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px"}}>
            <h4>Tags watched - </h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4 style={{ fontWeight: "600", fontSize: "20px" }}>About: </h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
