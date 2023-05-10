import { createContext } from "react";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";
import Context from "./components/Context";

const name: string = "Caio";
const age: number = 27;
const isWorking: boolean = true;

//type
type textOrNull = string | null;

//context
interface IappContext {
	language: string;
	framework: string;
	projects: number;
}

export const AppContext = createContext<IappContext | null>(null);

function App() {
	const userGreeting = (name: string): string => {
		return `Olá, ${name}`;
	};

	//type
	const firstText: textOrNull = "é uma string!";
	let secondText: textOrNull = null;
	secondText = "opa";

	type fixed = "Olá" | "Bom dia";
	const testandoFixed: fixed = "Olá";

	//context
	const contextValue: IappContext = {
		language: "JavaScript",
		framework: "Express",
		projects: 5
	};

	return (
		<AppContext.Provider value={contextValue}>
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
					tags={["python"]}
					category={Category.P}
				/>
				<Destructuring
					title="Segundo post"
					content="algum conteúdo"
					comentQty={10}
					tags={["ts", "js"]}
					category={Category.TS}
				/>
				<State />
				<div className="container">
					<h3>Types</h3>
					{firstText && <p>tem texto na variável</p>}
					{secondText && <p>tem texto na variável</p>}
					{testandoFixed}
				</div>
				<Context />
			</div>
		</AppContext.Provider>
	);
}

export default App;
