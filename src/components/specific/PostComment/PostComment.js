import React from "react";
import styles from "./PostComment.module.css";
import Button from "../../common/Button/Button";

const PostComment = () => {
  return (
    <div>
      <form className={styles.form}>
        <div className="grid">
          <div className={styles.form_group}>
            <label className={styles.form_label}>Comment *</label>
            <textarea rows={8} className={styles.form_textArea}></textarea>
          </div>
        </div>
        <div className="grid">
          <div className={styles.form_group}>
            <label className={styles.form_label}>Name *</label>
            <input type="text" className={styles.form_input} />
          </div>
        </div>
        <div className="grid">
          <div className={styles.form_group}>
            <label className={styles.form_label}>Email *</label>
            <input type="text" className={styles.form_input} />
          </div>
        </div>
        <div className="grid">
          <div className={styles.form_group}>
            <label className={styles.form_label}>Web Site *</label>
            <input type="text" className={styles.form_input} />
          </div>
        </div>
        
          <div className={styles.form_group_checkbox}>
            <input type="checkbox" className={styles.form_checkbox} />
            <label className={styles.form_label_checkbox}>Lorem ipsum dolor sit amTo be a top-tieLorem ipsum</label>
          </div>
        
        <div className={styles.form_submit}>
          <div className={styles.submit}>
            <Button type="submit" variant="primary" fullWidth={true}>
              POST COMMENT
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
