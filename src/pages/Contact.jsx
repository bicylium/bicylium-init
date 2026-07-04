import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
  };

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-header">
          <h2>İletişim Formu</h2>
          <p>
            +905365667974 üzerinden iletişim kurabilir veya aşağıdaki formu doldurabilirsiniz
          </p>
        </section>

        <section className="contact-content">
          <form className="contact-form-grid" onSubmit={handleSubmit}>
            
            {/* Adınız */}
            <div className="form-field-group span-full">
              <label htmlFor="name">Adınız</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                required 
              />
            </div>

            {/* Mağazanızın Adı */}
            <div className="form-field-group">
              <label htmlFor="shopName">Mağazanızın Adı</label>
              <input 
                type="text" 
                id="shopName" 
                name="shopName" 
                value={formData.shopName} 
                onChange={handleChange}
              />
            </div>

            {/* İl - İlçe */}
            <div className="form-field-group">
              <label htmlFor="location">İl - İlçe</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
              />
            </div>

            {/* İletişim (Telefon) */}
            <div className="form-field-group">
              <label htmlFor="phone">İletişim</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
              />
            </div>

            {/* E-posta */}
            <div className="form-field-group">
              <label htmlFor="email">E-posta</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                required 
              />
            </div>

            {/* Konu */}
            <div className="form-field-group span-full">
              <label htmlFor="subject">Konu</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
              />
            </div>

            {/* Mesaj */}
            <div className="form-field-group span-full">
              <label htmlFor="message">Mesaj</label>
              <textarea 
                id="message" 
                name="message" 
                rows="8" 
                value={formData.message} 
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit & Status */}
            <div className="contact-submit-row">
              <button type="submit" className="btn btn-primary">
                Gönder
              </button>
              
              {status === 'success' && (
                <div className="status-message success">
                  Formunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
                </div>
              )}
              
              {status === 'error' && (
                <div className="status-message error">
                  Lütfen gerekli alanları doldurun (Adınız, E-posta ve Mesaj).
                </div>
              )}
            </div>

          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
