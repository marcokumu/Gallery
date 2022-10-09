import React, { useEffect } from "react";
import styles from "../appStyles.module.css";

function ProfilePage({
  onDeleteAccountClick,
  onFetchUserPieces,
  onProfilePieceClick,
  user,
  pieces,
}) {
  useEffect(() => {
    fetch(`users/${user.id}/pieces`)
      .then((res) => res.json())
      .then((pieces) => onFetchUserPieces(pieces));
  }, []);

  return (
    <>
      <button
        style={{ marginLeft: "88%" }}
        className={styles.edit_button}
        onClick={() => onDeleteAccountClick(user)}
      >
        DELETE ACCOUNT
      </button>
      <div className={styles.card_holder}>
        <h1 className={styles.title_name}>{user.username}</h1>
        <img
          className={styles.profile_image}
          src={user.image_url}
          alt={user.username}
        />
        <div className={styles.card_iw}>
          <p className={styles.card_description}>{user.bio}</p>
        </div>
        <br />
        <div style={{ backgroundColor: "#7796af" }}>
          <h3 style={{ padding: "30px" }}>Owned Pieces</h3>
          <div
            style={{ marginRight: "9%" }}
            className={styles.gallery_container}
          >
            {pieces.map((piece) => {
              return (
                <div key={piece.id}>
                  <img
                    className={styles.gallery_card}
                    title="more info"
                    src={piece.image}
                    alt={piece.title}
                    onClick={() => onProfilePieceClick(piece)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
