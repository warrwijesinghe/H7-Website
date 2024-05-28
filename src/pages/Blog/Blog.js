import React from "react";
import styles from "./Blog.module.css";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import dropIco from "../../assets/icons/drop-down-ico.svg";
import NewsletterForm from "../../components/specific/NewsletterForm/NewsletterForm";
import BlogCard from "../../components/specific/BlogCard/BlogCard";

const Blog = () => {
  return (
    <div>
      <HeroSection />
      <section className={styles.blog_section}>
        <div className="container">
          <div className={styles.blog_grid}>
            <div className={styles.blog_grid_left}>
              <div className={styles.blog_with_img}>
                <img
                  src="https://picsum.photos/400"
                  alt="Heaven Seven Hotel"
                  className={styles.blog_img}
                />
                <div className={styles.blog_content}>
                  <h1 className={styles.blog_title}>
                    Blog 1 Lorem ipsum dolor
                  </h1>
                  <p className={styles.blog_description}>
                    Lorem ipsum dolor sit amTo be a top-tie
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.blog_grid_middle}>
              <div className={styles.blog_with_img}>
                <img
                  src="https://picsum.photos/400"
                  alt="Heaven Seven Hotel"
                  className={styles.blog_img}
                />

                <div className={styles.blog_content}>
                  <p className={styles.blog_description}>
                    Lorem ipsum dolor sit amTo be a top-tie
                  </p>
                </div>
              </div>
              <div className={styles.blog_with_img}>
                <img
                  src="https://picsum.photos/400"
                  alt="Heaven Seven Hotel"
                  className={styles.blog_img}
                />

                <div className={styles.blog_content}>
                  <p className={styles.blog_description}>
                    Lorem ipsum dolor sit amTo be a top-tie
                  </p>
                </div>
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
            </div>
          </div>
        </div>
      </section>
      <section className={styles.category_blog_section}>
        <div className="container">
          <dir className={styles.category_blogs}>
          
            <dir className={styles.category_blog}>
            <div className={styles.medium_blogs_title}>
                <h1>Lorem ipsum dolor</h1>
                <span>View all</span>
              </div>
              <dir className={styles.category_blog_logo}>
                <img
                  src="https://picsum.photos/400"
                  alt="Heaven Seven Hotel"
                  className={styles.blog_img}
                />
              </dir>
              <dir className={styles.category_blog_content}>
                <h1>Lorem ipsum dolor</h1>
                <p>
                  Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit
                  amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
                  ipsum dolor
                </p>
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
              </dir>
            </dir>
            <dir className={styles.category_blog}>
            <div className={styles.medium_blogs_title}>
                <h1>Lorem ipsum dolor</h1>
                <span>View all</span>
              </div>
              <dir className={styles.category_blog_logo}>
                <img
                  src="https://picsum.photos/400"
                  alt="Heaven Seven Hotel"
                  className={styles.blog_img}
                />
              </dir>
              <dir className={styles.category_blog_content}>
                <h1>Lorem ipsum dolor</h1>
                <p>
                  Lorem ipsum dolor sit amTo be a top-tieLorem ipsum dolor sit
                  amTo be a top-tieLorem ipsum dolor sit amTo be a top-tieLorem
                  ipsum dolor
                </p>
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
              </dir>
            </dir>
            <dir className={styles.stay_connected}>
            <div className={styles.medium_blogs_title}>
                <h1>Satay Conecteed</h1>
                <span>View all</span>
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
                  Lorem ipsum dolor Lorem ipsum dolor
                  </h2>
                  <div className={styles.news_card_post_detail}>
                    <p>By Johenn</p>
                    <p>20 / 12 / 2024</p>
                  </div>
                </div>
              </div>
              <NewsletterForm />
            </dir>
          </dir>
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
              <div className={styles.card_list} >
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
              <div className="grid" >
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
    </div>
  );
};

export default Blog;
