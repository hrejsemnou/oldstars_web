import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'

// Directory of productions
const pagesDirectory = join(process.cwd(), 'public/productions')
const newsDirectory = join(process.cwd(), 'public/news');

// Form slugs from the markdown names
export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir)
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 */
export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, realSlug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  const imagesFolder = join(dir, realSlug, 'images');
  const imageNames = fs.readdirSync(imagesFolder);
  items.images = imageNames;

  return items
}

// Returns contents of a page in the public/productions directory
export function getPageContentBySlug(slug, fields = []) {
  return getBySlug(pagesDirectory, slug, fields)
}

// Returns pages in the public/productions directory
export function getAllSnippets(fields = []) {
  const slugs = getSlugsFromDirectory(pagesDirectory)
  const pages = slugs.map((slug) => getPageContentBySlug(slug, fields))
  return pages
}

// Returns dates of all productions in the public/productions directory
export function getProgram() {
  const slugs = getSlugsFromDirectory(pagesDirectory)
  return slugs.map((slug) => getBySlug(pagesDirectory, slug, ['slug', 'title', 'note', 'reruns']));
}

export function getNews(fields = []) {
  const slugs = getSlugsFromDirectory(newsDirectory)
  return slugs.map(slug => getBySlug(newsDirectory, slug, fields));
}
