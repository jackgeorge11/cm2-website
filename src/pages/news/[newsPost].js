import React from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import blogPosts from "../../assets/components/__BlogSeeds";
import _Image from "../../assets/components/common/_Image";
import "../../assets/styles/styles.scss";

function BlogPostPage() {
  const post = null

  const calculateReadingTime = (body) => {
    let words = 0;

    body?.forEach((section) => {
      if (section.type !== "image") {
        const wordCount = section.content.length / 5.75;
        words += wordCount;
      }
    });

    const time = Math.floor(words / 200);
    return time;
  };

  return (
    <>
      <Helmet>
        <title>CM2: {post?.title ? `"${post.title}"` : 'Blog Post'}</title>
        <meta
          name="description"
          content="ConnecMe2's blog is a fantastic place to learn about different careers and industries, the application process, motivation and work ethic, and everything else that will help you succeed in your professional and life goals."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Helmet>
      <PageWrapper page="news">
        <div className="blog-post">
          <div className="block">
            <div className="card-intro card-40">
              <h1>{post?.title}</h1>
              <h2>
                by <span className="bold">{post?.author}</span>
              </h2>
              <h2>
                published on <span className="bold">{"January 5th, 2021"}</span>
              </h2>
              <h2>
                <span className="bold">
                  {calculateReadingTime(post?.body)} minute
                </span>{" "}
                read
              </h2>
              <div className="bubble-intro" />
            </div>
            <_Image
              src="/images/idea.png"
              className="image-intro"
              hide={true}
            />
          </div>
          <div className="block">
            <div className="card-90 card-description">
              {post?.body.map((section) => {
                return section.type === "header" ? (
                  <h1>{section.content}</h1>
                ) : section.type === "text" ? (
                  <h2>{section.content}</h2>
                ) : section.type === "image" ? (
                  <_Image
                    src={`/images/blog/${section.content.src}`}
                    alt={section.content.alt}
                    className="image-description"
                  />
                ) : null;
              })}
              <div className="bubble-description"></div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default BlogPostPage;
