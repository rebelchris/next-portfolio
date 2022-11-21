import fs from 'fs';
import matter from "gray-matter";

export function getPostBySlug(slug) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        frontmatter,
        content
    }
}

export function getAllPosts() {
    const files = fs.readdirSync('./posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const { frontmatter } = getPostBySlug(slug);
        return {
            slug,
            ...frontmatter,
        };
    }).sort((post1, post2) => post1.date > post2.date ? -1 : 1);

    return posts;
}

export function getAllPostsByTag({tag}) {
    const posts = getAllPosts();
    return posts.filter((post) => post.tags.includes(tag))
}

export function getAllWork() {
    const data = fs.readFileSync('json/data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData.work;
}