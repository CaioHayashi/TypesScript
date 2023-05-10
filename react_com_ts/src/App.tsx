import Destructuring from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

const name: string = "Caio";
const age: number = 27;
const isWorking: boolean = true;

function App() {
	const userGreeting = (name: string): string => {
		return `Olá, ${name}`;
	};

	return (
		<div className="App">
			<h1>TypeScript com React</h1>
			<h2>Nome: {name}</h2>
			<p>Idade: {age}</p>
			{isWorking && <p>Está trabalhando!</p>}
			<h3>{userGreeting(name)}</h3>
			<FirstComponent />
			<SecondComponent name="componente" />
			<Destructuring
				title="Primeiro post"
				content="algum conteúdo"
				comentQty={8}
				tags={["SQL", "python"]}
			/>
			<Destructuring
				title="Segundo post"
				content="algum conteúdo"
				comentQty={10}
				tags={["ts", "js"]}
			/>
      <State />
		</div>
	);
}

export default App;
