{
    //! === Explicacion ===

    // * Crear un componente con composición
    // Ahora veremos cómo podemos componer múltiples componentes de React juntos. Imagina que estás construyendo una aplicación y has creado tres componentes: un Navbar, Dashboard y Footer.
    // Para componer estos componentes juntos, se podría crear un componente App parent que renderiza cada uno de estos tres componentes como children. Para renderizar un componente como hijo en un componente React, se incluye el nombre del componente escrito como una etiqueta HTML personalizada en el JSX. Por ejemplo, en el método render se puede escribir:
    /*👉return (
        <App>
            <Navbar />
            <Dashboard />
            <Footer />
        </App>
    )👈*/

    // Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto en < /> como en este ejemplo), renderiza el marcado de ese componente en la ubicación de la etiqueta. Esto debería ilustrar la relación padre/hijo entre el componente App y Navbar, Dashboard, y Footer.
}

{
    //! === Desafio ===

    // En el editor de código, hay un componente funcional simple llamado ChildComponent y un componente de clase llamado ParentComponent. Compón los dos juntos renderizando el ChildComponent dentro del ParentComponent. Asegúrate de cerrar la etiqueta ChildComponent con una barra diagonal.

    //! Nota: ChildComponent se define con una función de flecha ES6 porque es una práctica muy común al usar React. Sin embargo, has de saber que se trata de una función simple. Si no estás familiarizado con la sintaxis de la función flecha, consulta la sección de JavaScript.

    const ChildComponent = () => (
        <div>
            <p>I am the child</p>
        </div>
    );

    class ParentComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>I am the parent</h1>
                    <ChildComponent />
                </div>
            );
        }
    };
}
{
    //!  === Solucion ===

    // En el editor de código, hay un componente funcional simple llamado ChildComponent y un componente de clase llamado ParentComponent. Compón los dos juntos renderizando el ChildComponent dentro del ParentComponent. Asegúrate de cerrar la etiqueta ChildComponent con una barra diagonal.

    //! Nota: ChildComponent se define con una función de flecha ES6 porque es una práctica muy común al usar React. Sin embargo, has de saber que se trata de una función simple. Si no estás familiarizado con la sintaxis de la función flecha, consulta la sección de JavaScript.

    const ChildComponent = () => { //* ==> Componente funcional simple
        return (
            <div>
                <p>I am the child</p>
            </div>
        );
    };

    class ParentComponent extends React.Component { //* ==> componente de clase 
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>I am the parent</h1>
                    { /* Cambia el código debajo de esta línea */}
                    <ChildComponent />
                    { /* Cambia el código encima de esta línea */}
                </div>
            );
        }
    };


}
