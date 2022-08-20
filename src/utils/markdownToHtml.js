import { remark } from 'remark';
import html from 'remark-html';
import MarkdownIt from 'markdown-it';

export const markdownToHtml = (value) => {
	const md = new MarkdownIt({
		html: true,
		linkify: true,
		// typographer: true,
	});
	return md.render(value);
};

export default async function (markdown) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
	// return result;
}
