/* eslint-disable import/no-relative-packages, import/no-extraneous-dependencies  */
import RSS from "rss";
import { writeFileSync } from "fs";

import { allPosts } from "../.contentlayer/generated/index.mjs";

async function generate() {
  const feed = new RSS({
    title: "Martin Sione",
    site_url: "https://martinsione.com",
    feed_url: "https://martinsione.com/feed.xml",
  });

  allPosts
    .map((post) => ({
      title: post.title,
      description: post.description,
      url: `https://martinsione.com/${post.slug}`,
      date: post.date,
    }))
    .forEach((item) => {
      feed.item(item);
    });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
