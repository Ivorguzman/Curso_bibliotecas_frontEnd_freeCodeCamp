{
    // Puede que recuerdes haber usado la API ReactDOM en un desafío anterior para renderizar elementos JSX al DOM. El proceso para renderizar los componentes de React será muy similar. Los últimos desafíos se centraron en los componentes y la composición, por lo que el renderizado se ha realizado tras bambalinas. Sin embargo, ninguna parte de código de React que escribas se procesará en el DOM sin realizar una llamada a la API de ReactDOM.

    // Aquí va un recordatorio de la sintaxis: ReactDOM.render(componentToRender, targetNode). El primer argumento es el componente de React que deseas renderizar. El segundo argumento es el nodo del DOM en el que deseas renderizar ese componente.

    // Los componentes de React se pasan a ReactDOM.render() de manera un poco diferente a como se hace con los elementos JSX. Para los elementos JSX, pasas el nombre del elemento que deseas representar. Sin embargo, para los componentes de React, debes usar la misma sintaxis que si estuvieras renderizando un componente anidado, por ejemplo, ReactDOM.render(<ComponentToRender />, targetNode). Se utiliza esta sintaxis tanto para los componentes de clase ES6 como para los componentes funcionales.
}

{

    //! Ejercicio
    // Los componentes Fruits y Vegetables se definen por ti tras bambalinas. Renderiza ambos componentes como hijos del componente TypesOfFood, y luego renderiza TypesOfFood al DOM. Hay un div con id='challenge-node' disponible para que lo uses.

    /*👉    
        class TypesOfFood extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div>
                        <h1>Types of Food:</h1>
                        {➡ Cambia el código debajo de esta línea ⬅}
    
                        {➡ Cambia el código encima de esta línea ⬅}
                    </div>
                );
            }
        };
    👈*/
    // Cambia el código debajo de esta línea
}
{

    //! Solucion

    // Los componentes Fruits y Vegetables se definen por ti tras bambalinas. Renderiza ambos componentes como hijos del componente TypesOfFood, y luego renderiza TypesOfFood al DOM. Hay un div con id='challenge-node' disponible para que lo uses.


    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>Types of Food:</h1>
                    {/* Cambia el código debajo de esta línea */}
                    < Fruits />
                    < Vegetables />
                    {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    };

    //*  para representar un componente de clase con componentes secundarios en el DOM utilizando el método ReactDOM render()y el método Document getElementbyId('element-id').




    // Cambia el código debajo de esta línea
    ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
}