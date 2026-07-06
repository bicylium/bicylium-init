import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { contentfulClient } from '../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTranslation } from 'react-i18next';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentfulClient.getEntry(id)
      .then((entry) => {
        setPost(entry);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Gönderi yüklenirken hata:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <p className="loading-text">{t('blog.loading')}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <h2>{t('notFound.title')}</h2>
          <Link to="/blog" className="btn btn-outline">{t('notFound.home')}</Link>
        </div>
      </div>
    );
  }

  const { baslik, icerik, goruntu, yazar } = post.fields;
  const date = new Date(post.sys.createdAt).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const imageUrl = goruntu?.fields?.file?.url;
  const authorName = yazar?.fields?.isim || 'Bicylium';

  return (
    <div className="blog-post-page">
      <div className="blog-post-hero">
        {imageUrl && <div className="blog-post-hero-bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>}
        <div className={`blog-post-hero-content container ${imageUrl ? 'has-bg' : ''}`}>
          <Link to="/blog" className="blog-post-back">← {t('footer.blog')}</Link>
          <div className="blog-tags">
            <span className="blog-tag">{t('blog.article')}</span>
          </div>
          <h1 className="blog-post-title">{baslik}</h1>
          <div className="blog-post-meta">
            {t('blog.uploadedBy', { date, author: authorName })}
          </div>
        </div>
      </div>
      
      <div className="container">
        <article className="blog-post-content">
          {icerik ? documentToReactComponents(icerik) : <p>{post.fields.ozet}</p>}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
