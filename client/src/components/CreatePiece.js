import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function CreatePiece({ gallery }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [medium, setMedium] = useState("");
  const [desc, setDesc] = useState("");
  const [worth, setWorth] = useState(1);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  console.log(gallery);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/pieces`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        title: title,
        medium: medium,
        description: desc,
        worth: worth,
        gallery_id: gallery.id,
      }),
    }).then((r) => {
      console.log({
        image: image,
        title: title,
        medium: medium,
        description: desc,
        worth: worth,
        gallery_id: gallery.id,
      });
      if (r.ok) {
        r.json()
          .then(alert("Posted to the gallery successfully"))
          .then(navigate("/gallery_page"));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className={styles.bg3}>
      <div className={styles.wrapper_pc}>
        <button
          className={styles.button_2}
          onClick={() => navigate("/gallery_page")}
        >
          Back To Gallery 
        </button>
        <h2 className={styles.title_name}>Upload a Piece</h2>
        <p className={styles.form_f_desc}>Upload work to {gallery.name}</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <label>
              {"Image of piece: "}
              <input
                placeholder="upload a picture!"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.form_field}>
            <label>
              {"Title of Piece: "}
              <input
                placeholder="maximum 30 characters"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.form_field}>
            <label>
              {"Piece Medium: "}
              <input
                placeholder="maximum 50 characters"
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.form_field}>
            <label>
              {"description: "}
              <textarea
                className={styles.lg_input_field}
                placeholder="Descriptions aren't necessary, however, giving the viewer a bit of insight on the inspiration and background doesn't hurt! The description can't exceed 500 characters"
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              {"Worth: $"}
              <input
                placeholder="Dollar amount"
                type="number"
                min="0"
                max="9999"
                value={worth}
                onChange={(e) => setWorth(e.target.value)}
              />
            </label>
          </div>
          <br />
          <button className={styles.button} type="submit">
            Upload Piece
          </button>
        </form>
      </div>
      <div className={styles.errors_su}>
        {errors.map((err) => {
          return <p key={err}>{err}</p>;
        })}
      </div>
    </div>
  );
}

export default CreatePiece;
