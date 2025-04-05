import React, { useState } from "react";
import styles from "./content.module.css";
import { contentData } from "../../constants";

const Content = () => {
  const [selected, setSelected] = useState(contentData[0]); // Default selection

  return (
    <div className={styles.contentContainer}>
      {/* Buttons */}
      <div className={styles.buttons}>
        {contentData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={selected.id === item.id ? styles.selectedButton : ""}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className={styles.contentData}>
        {/* Image */}
        {selected.img && (
          <div className={styles.contentDataImg}>
            <img src={selected.img} alt={selected.name} />
          </div>
        )}

        {/* Description */}
        <div className={styles.contentDescription}>
          {Array.isArray(selected.description) ? (
            <ul>
              {selected.description.map((desc) => (
                <li key={desc.id}>{desc.value}</li>
              ))}
            </ul>
          ) : (
            <p>{selected.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
