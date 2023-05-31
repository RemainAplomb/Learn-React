//  There are two ways to create a component,
//  We can use Javascript class
//  We can also use a function-based component
//  It is easier to use function-based components

function GreetWho (name: any) {
    // const name = "Rahms";
    if (name)
        return "Hello " + name
    return "Hello World"
}

//  PascalCasing Convention
//  In this, we capitalize the first letter in each word
function Message () {
    //  This is Javascript XML or JSX
    //  Basically, it will be compiled to javascript
    //  If you want to see h ow this gets compiled,
    //  go to babeljs.io/repl
    // return <h1>Hello World</h1>;

    //  For dynamic expressions:
    const name = "Rahms";
    return <h1>{GreetWho(name)}</h1>;
}

export default Message;