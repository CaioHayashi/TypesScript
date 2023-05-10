type Props = {
	title: string;
	content: string;
	comentQty: number;
	tags: string[];
};

const Destructuring = ({ title, content, comentQty, tags }: Props) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>
				{content}, quantidade de comentários: {comentQty}
			</p>
			<div>
				{tags.map((tag) => (
					<span>#{tag} </span>
				))}
			</div>
		</div>
	);
};

export default Destructuring;
