import React, { useEffect, useState } from 'react';
import { contentfulClient } from '../contentful';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentfulClient.getEntries({ content_type: 'blogPost' })
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('İçerik yüklenirken hata:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <div className="container">
        <h2 className="blog-page-title">{t('blog.title')}</h2>
        
        <div className="blog-grid">
          {loading ? (
            <p style={{ color: '#aaa', gridColumn: '1 / -1', textAlign: 'center' }}>{t('blog.loading')}</p>
          ) : posts.length > 0 ? (
            posts.map(post => {
              const { baslik, ozet, goruntu, yazar } = post.fields;
              const date = new Date(post.sys.createdAt).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: '2-digit' });
              const imageUrl = goruntu?.fields?.file?.url;
              
              return (
                <Link to={`/blog/${post.sys.id}`} className="blog-card" key={post.sys.id} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <div className="blog-tags">
                    <span className="blog-tag">{t('blog.article')}</span>
                  </div>
                  {imageUrl ? (
                    <div className="blog-image-box" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  ) : (
                    <div className="blog-image-box"></div>
                  )}
                  <div className="blog-date">{t('blog.uploadedBy', { date, author: yazar?.fields?.isim || 'Bicylium' })}</div>
                  <h3>{baslik}</h3>
                  <p>{ozet}</p>
                </Link>
              );
            })
          ) : (
            <p style={{ color: '#aaa', gridColumn: '1 / -1', textAlign: 'center' }}>{t('blog.noContent')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
