import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { contentfulClient } from '../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
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

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const contentType = node.data?.target?.sys?.contentType?.sys?.id;
        
        if (contentType === 'helperImageWrapper') {
          const fields = node.data?.target?.fields || {};
          const imageUrl = fields.image?.fields?.file?.url;
          const altText = fields.image?.fields?.title || fields.caption || '';
          const size = fields.size;
          const caption = fields.caption;

          let sizeClass = '';
          let inlineMaxWidth = '100%';
          
          if (size === 'small') {
            sizeClass = 'max-w-xs';
            inlineMaxWidth = '320px';
          } else if (size === 'medium') {
            sizeClass = 'max-w-2xl';
            inlineMaxWidth = '672px';
          } else if (size === 'large') {
            sizeClass = 'max-w-5xl';
            inlineMaxWidth = '1024px';
          }

          if (!imageUrl) return null;

          return (
            <div className="blog-post-image-wrapper">
              <img
                src={imageUrl}
                alt={altText}
                className="blog-post-image"
                style={{ maxWidth: inlineMaxWidth, width: '100%' }}
              />
              {caption && (
                <p className="blog-post-image-caption">
                  {caption}
                </p>
              )}
            </div>
          );
        }
        return null;
      }
    }
  };

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
          {icerik ? documentToReactComponents(icerik, renderOptions) : <p>{post.fields.ozet}</p>}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
