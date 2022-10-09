import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function PiecePage({ onEditPieceClick, piece, user }) {
  const navigate = useNavigate();

  return (
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
      <p>Valued At ${piece.worth}</p>
      <p style={{ textDecoration: "none" }}>
        Owner: {piece.user.username}
      </p>
      {user.id === piece.user_id ? (
        <button
          className={styles.button}
          onClick={() => onEditPieceClick(piece)}
        >
          edit
        </button>
      ) : null}
    </div>
  );
}

export default PiecePage;
