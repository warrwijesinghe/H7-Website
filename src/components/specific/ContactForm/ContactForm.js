import React from 'react';
import styles from './ContactForm.module.css';
import Button from '../../common/Button/Button';


const ContactForm = () => {
  return (
    <div>
      <form className={styles.form}>
              <div className="grid col-2">
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Salutation</label>
                  <select className={styles.form_combo}>
                    <option value="volvo">- Please Choose an Option -</option>
                  </select>
                </div>
              </div>
              <div className="grid col-2">
                <div className={styles.form_group}>
                  <label className={styles.form_label}>First Name *</label>
                  <input type="text" className={styles.form_input} />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Last Name *</label>
                  <input type="text" className={styles.form_input} />
                </div>
              </div>
              <div className="grid col-2">
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Email *</label>
                  <input type="text" className={styles.form_input} />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Phone No *</label>
                  <input type="text" className={styles.form_input} />
                </div>
              </div>
              <div className="grid">
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Message *</label>
                  <textarea rows={6} className={styles.form_textArea}></textarea>
                </div>
              </div>

              <div className={styles.form_submit}>
              <div className={styles.submit}>

              <Button type="submit" variant="primary" fullWidth={true}>
                Send
              </Button>
              </div>
              </div>
            </form>
    </div>
  )
}

export default ContactForm
