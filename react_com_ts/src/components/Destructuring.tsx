type Props = {
	title: string;
	content: string;
	comentQty: number;
	tags: string[];
	category: Category;
};

export enum Category {
	TS = "TypeScript",
	JS = "JavaScript",
	P = "Python"
}

const Destructuring = ({ title, content, comentQty, tags, category }: Props) => {
	return (
		<div className="container">
			<h2>{title}</h2>
			<p>
				{content}, quantidade de comentários: {comentQty}
			</p>
			<div>
				{tags.map((tag) => (
					<span>#{tag} </span>
				))}
			</div>
			<h4>Categoria: {category}</h4>
		</div>
	);
};

export default Destructuring;
