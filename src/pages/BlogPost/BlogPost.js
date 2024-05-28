import React from "react";
import styles from "./BlogPost.module.css";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import dropIco from "../../assets/icons/drop-down-ico.svg";
import NewsletterForm from "../../components/specific/NewsletterForm/NewsletterForm";
import BlogCard from "../../components/specific/BlogCard/BlogCard";
import Partners from "../../components/specific/Partners/Partners";
import PostComment from "../../components/specific/PostComment/PostComment";

const BlogPost = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.blog_section}>
        <div className="container">
          <div className={styles.blog_grid}>
            <div className={styles.left_post}>
              <div className={styles.post_banner}>
                <img
                  src="https://picsum.photos/1000"
                  alt="Heaven Seven Hotel"
                  className={styles.banner_img}
                />
              </div>
              <div className={styles.post_title}>
                <h1>Lorem ipsum dolor ipsum dolor ipsum dolor</h1>
                <p>By Jhonn / 02 02 2024</p>
              </div>

              <p className={styles.post_description}>
                Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit
                amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
                ipsum dolor Lorem ipsum dolor sit amTo be a top-tieLorem ipsum
                dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a
                top-tieLorem ipsum dolor Lorem ipsum dolor sit amTo be a
                top-tieLorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor
                sit amTo be a top-tieLorem ipsum dolor
              </p>
              <p className={styles.post_description}>
                Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit
                amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
                ipsum dolor Lorem ipsum dolor sit amTo be a top-tieLorem ipsum
                dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a
                top-tieLorem ipsum dolor
              </p>
              <p className={styles.post_description}>
                Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit
                amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
                ipsum dolor Lorem ipsum dolor sit amTo be a top-tieLorem ipsum
                dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a
                top-tieLorem ipsum dolor Lorem ipsum dolor sit amTo be a
                top-tieLorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor
                sit amTo be a top-tieLorem ipsum dolor
              </p>
              <p className={styles.post_description}>
                Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit
                amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
                ipsum dolor Lorem ipsum dolor sit amTo be a top-tieLorem ipsum
                dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a
                top-tieLorem ipsum dolor
              </p>
              <div className={styles.impotent_line}>
                <p className={styles.post_description}>
                Lorem ipsu - <span>Lorem ipsum dolor sit amTo be a top-tieLorem ipsum</span>
                </p>
                <p className={styles.post_description}>
                Lorem ipsu - <span>Lorem ipsum dolor sit amTo be a top-tieLorem ipsum</span>
                </p>
              </div>
              <div className={styles.comment_form}>
                    <h1>LEAVE A REPLY</h1>
                    <p className={styles.post_description}>
                    Lorem ipsum dolor sit amTo be a top-tieLorem ipsum
                    </p>
                    <PostComment />
              </div>
            </div>
            <div className={styles.blog_grid_right}>
              <div className={styles.news_title}>
                <h1>Featured News</h1>
                <img
                  src={dropIco}
                  alt="Heaven Seven Hotel"
                  className={styles.drop_ico}
                />
              </div>
              <div className={styles.news_card}>
                <div className={styles.news_card_banner}>
                  <img
                    src="https://picsum.photos/400"
                    alt="Heaven Seven Hotel"
                    className={styles.blog_img}
                  />
                </div>

                <div className={styles.news_card_content}>
                  <h2>
                    Blog 1 Lorem ipsum ipsum dolor Lorem ipsum ipsum dolor
                  </h2>
                  <div className={styles.news_card_post_detail}>
                    <p>By Johenn</p>
                    <p>20 / 12 / 2024</p>
                  </div>
                </div>
              </div>
              <div className={styles.news_card}>
                <div className={styles.news_card_banner}>
                  <img
                    src="https://picsum.photos/400"
                    alt="Heaven Seven Hotel"
                    className={styles.blog_img}
                  />
                </div>

                <div className={styles.news_card_content}>
                  <h2>
                    Blog 1 Lorem ipsum ipsum dolor Lorem ipsum ipsum dolor
                  </h2>
                  <div className={styles.news_card_post_detail}>
                    <p>By Johenn</p>
                    <p>20 / 12 / 2024</p>
                  </div>
                </div>
              </div>
              <div className={styles.news_card}>
                <div className={styles.news_card_banner}>
                  <img
                    src="https://picsum.photos/400"
                    alt="Heaven Seven Hotel"
                    className={styles.blog_img}
                  />
                </div>

                <div className={styles.news_card_content}>
                  <h2>
                    Blog 1 Lorem ipsum ipsum dolor Lorem ipsum ipsum dolor
                  </h2>
                  <div className={styles.news_card_post_detail}>
                    <p>By Johenn</p>
                    <p>20 / 12 / 2024</p>
                  </div>
                </div>
              </div>
              <div className={styles.news_card}>
                <div className={styles.news_card_banner}>
                  <img
                    src="https://picsum.photos/400"
                    alt="Heaven Seven Hotel"
                    className={styles.blog_img}
                  />
                </div>

                <div className={styles.news_card_content}>
                  <h2>
                    Blog 1 Lorem ipsum ipsum dolor Lorem ipsum ipsum dolor
                  </h2>
                  <div className={styles.news_card_post_detail}>
                    <p>By Johenn</p>
                    <p>20 / 12 / 2024</p>
                  </div>
                </div>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.blog_cards_section}>
        <div className="container">
          <div className={styles.blog_cards}>
            <div className={styles.left_cards}>
              <div className={styles.medium_blogs_title}>
                <h1>Lorem ipsum dolor</h1>
                <span>View all</span>
              </div>
              <div className={styles.card_list}>
                <BlogCard
                  cardImage="https://picsum.photos/400"
                  title="Lorem ipsum dolor"
                  author="By Johenn"
                  date="20 / 12 / 2024"
                  desc="Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit"
                />
                <BlogCard
                  cardImage="https://picsum.photos/400"
                  title="Lorem ipsum dolor"
                  author="By Johenn"
                  date="20 / 12 / 2024"
                  desc="Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit"
                />
                <BlogCard
                  cardImage="https://picsum.photos/400"
                  title="Lorem ipsum dolor"
                  author="By Johenn"
                  date="20 / 12 / 2024"
                  desc="Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit"
                />
              </div>
            </div>
            <div className={styles.right_cards}>
              <div className={styles.medium_blogs_title}>
                <h1>Lorem ipsum dolor</h1>
                <span>View all</span>
              </div>
              <div className="grid">
                <BlogCard
                  cardImage="https://picsum.photos/400"
                  title="Lorem ipsum dolor"
                  author="By Johenn"
                  date="20 / 12 / 2024"
                  desc="Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </div>
  );
};

export default BlogPost;
