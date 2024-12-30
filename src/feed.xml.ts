import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  if (!context.site) {
    return;
  }
  const blog = await getCollection("blog");
  return rss({
    title: "大连理工大学网络与开源协会",
    description: "DLUT Network And Open Source Institute",
    site: context.site,
    items: blog
      .sort((a, b) => {
        return b.data.date.getTime() - a.data.date.getTime();
      })
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.body,
        link: `/blog/${post.slug}/`,
      })),
  });
}
