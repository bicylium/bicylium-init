import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    location: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    if (formData['bot-field']) {
      setStatus('success');
      return;
    }

    const encode = (data) => Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setStatus('success');
        setFormData({
          name: '',
          shopName: '',
          location: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        setStatus('error');
        console.error(error);
      });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-header">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </section>

        <section className="contact-content">
          <form className="contact-form-grid" onSubmit={handleSubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" style={{ display: 'none' }}>
              <label>Don’t fill this out if you're human: <input name="bot-field" onChange={handleChange} /></label>
            </p>
            
            <div className="form-field-group span-full">
              <label htmlFor="name">{t('contact.name')}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-field-group">
              <label htmlFor="shopName">{t('contact.shopName')}</label>
              <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} />
            </div>

            <div className="form-field-group">
              <label htmlFor="location">{t('contact.location')}</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
            </div>

            <div className="form-field-group">
              <label htmlFor="phone">{t('contact.phone')}</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="form-field-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-field-group span-full">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
            </div>

            <div className="form-field-group span-full">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea id="message" name="message" rows="8" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <div className="contact-submit-row">
              <button type="submit" className="btn btn-primary">{t('contact.send')}</button>
              
              {status === 'success' && (
                <div className="status-message success">{t('contact.success')}</div>
              )}
              
              {status === 'error' && (
                <div className="status-message error">{t('contact.error')}</div>
              )}
            </div>

          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
