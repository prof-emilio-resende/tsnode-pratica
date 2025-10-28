function main(): void {
    console.log("Hello, TypeScript with Node.js!");
    basics();

    const logger = loggerBuilder("closure diz:");
    logger("Primeira mensagem de log");
    logger("Segunda mensagem de log");
}

function basics(): void {
    const greeting: string = "Hello, World!";
    const integer: number = 42;
    const decimal: number = 3.14;
    const isTypeScriptFun: boolean = true;

    const numbers: number[] = [1, 2, 3, 4, 5];
    const tuple: [string, number] = ["Age", 30];

    const dictionary: Record<string, number | string> = {
        "one": 1,
        "two": 2,
        "three": 3,
        4: "4"
    };

    console.log(typeof greeting);
    console.log(typeof integer);
    console.log(typeof decimal);
    console.log(typeof isTypeScriptFun);
    console.log(typeof numbers);
    console.log(typeof tuple);
    console.log(typeof dictionary);

    console.log(Object.getPrototypeOf(numbers).constructor.name);
    console.log(Object.getPrototypeOf(dictionary).constructor.name);
}

function loggerBuilder(prefixo: string): (message: string) => void {
    // area de memoria compartilhada ... (escopo léxico)
    const nome = "Emilio";
    return (message: string) => {
        // isso é um closure
        console.log(`[${prefixo}] ${message}`);
    };
}

main();