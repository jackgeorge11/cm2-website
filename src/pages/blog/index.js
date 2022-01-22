import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import _Image from "../../assets/components/common/_Image";
import { Link } from "gatsby";
import Cta from "../../assets/components/common/Cta";
import blogPosts from "../../assets/components/__BlogSeeds";

function index() {
  return (
    <>
      <Helmet>
        <title>CM2: Blog</title>
        <meta
          name="description"
          content="ConnecMe2's blog is a fantastic place to learn about different careers and industries, the application process, motivation and work ethic, and everything else that will help you succeed in your professional and life goals."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="blog">
        <div className="blog">
          <div className="block">
            <div className="card-intro card-50">
              <h1>ConnecMe2 Blog</h1>
              <h2>
                Tips, tricks and advice for all your personal and professional
                goals, written by{" "}
                <Link href="/seekers" className="hover-link">
                  seekers
                </Link>{" "}
                from the ConnecMe2 community.
              </h2>
              <h2>Interested in blogging with ConnecMe2?</h2>
              <Cta href="/blog/contribute">contribute</Cta>
              <div className="bubble-intro" />
            </div>
            <_Image
              src="/images/people-blog.png"
              className="image-intro"
              hide={true}
            />
          </div>
          <div className="block scroll-to" id="recent-stories">
            <div className="posts">
              {blogPosts?.length ? (
                blogPosts.map((post, i) => {
                  return (
                    <div className="card-blog-post card-30" key={i}>
                      <Link href={`/blog/${post.slug}`} className="hover-link">
                        {post.title}
                      </Link>
                      <Link href={`/blog/${post.slug}`} passHref={true}>
                        <_Image
                          src={post.coverPhoto}
                          alt={post.coverPhoto}
                          className="image-blog-post"
                          hide={true}
                        />
                      </Link>
                      <h2>
                        by <span className="bold">{post.author}</span>
                      </h2>
                      <h2>January 5th, 2021</h2>
                      <div className="bubble-blog-post"></div>
                    </div>
                  );
                })
              ) : (
                <h1>There are no blog posts yet</h1>
              )}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default index;
