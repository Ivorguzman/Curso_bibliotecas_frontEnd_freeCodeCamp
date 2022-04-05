{
	//! === Explicacion ===

	//*     El último desafío fue un ejemplo sencillo de JSX, pero JSX también puede representar HTML más complejo.

	// Una cosa importante que debes saber sobre JSX anidado es que debe devolver un solo elemento.

	// Este elemento principal contendría a todos los demás niveles de elementos anidados.

	// Por ejemplo, varios elementos JSX escritos al mismo nivel sin elemento contenedor principal no se transpilarán.

	// Aquí va un ejemplo:




	{
		//* JSX válido: ()

		const JSX = <div>
			<p>Paragraph One</p>
			<p>Paragraph Two</p>
			<p>Paragraph Three</p>
		</div>
	}
	{
		//* JSX válido:
		const JSX = (<p>Paragraph One</p>)
			(<p>Paragraph Two</p>)
			(<p>Paragraph Three</p>)

	}

	{
		/**
			* !  JSX inválido:

				**<p>Paragraph One</p>
				**<p>Paragraph Two</p>
				**<p>Paragraph Three</p> */
	}
}

{

	//! === Desafio ===

	// Define una nueva constante JSX que renderice un div que contenga los siguientes elementos en orden:
	// Un h1, un p y una lista desordenada que contiene tres elementos li. Puedes incluir cualquier texto que desees dentro de cada elemento.

	// * Nota:  Al renderizar varios elementos de esta forma, puedes envolverlos todos entre paréntesis, pero no es estrictamente necesario. Observa también que este desafío usa una etiqueta div para envolver a todos los elementos hijos dentro de un solo elemento principal. Si eliminas el div, JSX ya no se podrá transpilar. Ten esto en cuenta, ya que también será así cuando devuelvas elementos JSX en los componentes de React.
	{
		//todo JSX válido:
		<div>
			<p>Paragraph One</p>
			<p>Paragraph Two</p>
			<p>Paragraph Three</p>
		</div>
	}

}
{

	//! === Solución ===

	// Define una nueva constante JSX que renderice un div que contenga los siguientes elementos en orden:
	// Un h1, un p y una lista desordenada que contiene tres elementos li. Puedes incluir cualquier texto que desees dentro de cada elemento.

	//! Nota:  Al renderizar varios elementos de esta forma, puedes envolverlos todos entre paréntesis, pero no es estrictamente necesario. Observa también que este desafío usa una etiqueta div para envolver a todos los elementos hijos dentro de un solo elemento principal. Si eliminas el div, JSX ya no se podrá transpilar. Ten esto en cuenta, ya que también será así cuando devuelvas elementos JSX en los componentes de React.

	{
		//todo JSX válido:
		const JSX =
			(<h1>nueva constante JSX</h1>)
				(<p></p>)
				(<ul>)
					(<li>lista desordenada</li>)
					(<li>lista desordenada</li>)
					(<li>lista desordenada</li>)
					(</ul>)

	}

	{
		const JSX =
			<div>
				<h1>nueva constante JSX</h1>
				<p></p>
				<ul>
					<li>lista desordenada</li>
					<li>lista desordenada</li>
					<li>lista desordenada</li>
				</ul>
			</div>
	}

}

