import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function UserPiecePage({ onEditPieceClick, user, piece, loading }) {
  const navigate = useNavigate();

  return (
    <div>
      {!loading ? (
        <div className={styles.card_holder}>
          <h1 className={styles.title_name}>{piece.title}</h1>
          <img
            onClick={() => navigate(-1)}
            className={styles.card_page}
            title="go back"
            src={piece.image}
            alt={piece.title}
          />
          <div className={styles.card_iw}>
            <p>{piece.medium}</p>
            <p className={styles.card_description}>{piece.description}</p>
            <br />
          </div>
          <p>valued at ${piece.worth}</p>
          <button
            className={styles.button}
            onClick={() => onEditPieceClick(piece)}
          >
            edit
          </button>
        </div>
      ) : (
        <div className={styles.bg3}></div>
      )}
    </div>
  );
}

export default UserPiecePage;
