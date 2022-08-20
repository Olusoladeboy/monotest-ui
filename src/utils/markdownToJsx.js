import Markdown from 'markdown-to-jsx';

export default (markdown) => {
	return <Markdown options={{ wrapper: 'article' }}>{markdown}</Markdown>;
};
