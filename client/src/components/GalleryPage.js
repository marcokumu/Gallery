import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function GalleryPage({ onPieceClick, gallery }) {
  const [pieces, setPieces] = useState([]);
  const navigate = useNavigate();

  console.log(gallery.id);

  useEffect(
    () => {
      fetch(`/galleries/${gallery.id}/pieces`)
        .then((r) => r.json())
        .then((pieces) => setPieces(pieces));
    },
    [],
    gallery.id
  );

  return (
    <div>
      <h1 style={{ marginTop: 0 }} className={styles.title_name}>
        {gallery.name}
      </h1>
      <button
        style={{ marginLeft: "30px" }}
        className={styles.button}
        onClick={() => navigate("/galleries")}
      >
        Back
      </button>
      <h2 className={styles.text}>{gallery.address}</h2>
      <button
        onClick={() => navigate("/create_piece")}
        className={styles.add_piece}
      >
        + P
      </button>
      <div className={styles.gallery_container}>
        {pieces.map((piece) => {
          return (
            <div key={piece.id}>
              <img
                onClick={() => onPieceClick(piece)}
                title="more info"
                className={styles.gallery_card}
                src={piece.image}
                alt={piece.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryPage;
