import React, { useEffect } from "react";
import styles from "../appStyles.module.css";

function Galleries({ onFetchGalleries, galleries, onGalleryClick }) {
  useEffect(() => {
    fetch("/galleries").then((r) => {
      if (r.ok) {
        r.json().then((venues) => onFetchGalleries(venues));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }, []);

  return (
    <div className={(styles.gallery_container)}>
      {galleries.map((gallery) => {
        return (
          <div
            className={styles.gallery_name}
            key={gallery.name}
            style={{ textDecoration: "none" }}
            onClick={() => onGalleryClick(gallery)}
          >
            <p>{gallery.name} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Galleries;
