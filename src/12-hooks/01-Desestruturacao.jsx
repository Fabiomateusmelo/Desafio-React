// props = exibe as propriedades daquele objeto

/*export default function ObjProps(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}!</h1>
    </div>
  );
}*/

// Ou usar desestruturação para exibir apenas o nome

/*export default function ObjProps({name}) {
  console.log(name);
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
}*/

export default function ObjProps() {
  const [, , third] = ['Fábio', 'Alex', 'Anna']
  console.log(third)
  return (
    <div>
      <h1>Desestruturação</h1>
      <h2>Hello {(third)}!</h2>
    </div>
  );
}

/*export default function ObjProps() {
  const pessoas = ['Fábio', 'Alex', 'Anna']
  console.log(pessoas[0])
  return (
    <div>
      <h1>Hello {pessoas[1]}!</h1>
    </div>
  );
}*/
