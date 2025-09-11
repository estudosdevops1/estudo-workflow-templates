export function hello(name: string): string {
  return `Olá, ${name}!`; 
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // Executado diretamente
  console.log(hello('Mundo'));
}
