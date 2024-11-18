import { Biblioteca } from "./biblioteca";
import { Livro } from "./livro";

function main()
{
    // Inicializando a biblioteca e os livros
    const biblioteca = new Biblioteca();
    const HarryPotterPedraFilosofal = new Livro(1, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", true);
    const ASociedadeDoAnel = new Livro(2, "Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", true);
    const MarDeMonstros = new Livro(3, "Percy Jackson e o Mar de Monstros", "Rick Riordan", false);

    // Adicionando os livros com a função adicionarLivro
    biblioteca.adicionarLivro(HarryPotterPedraFilosofal);
    biblioteca.adicionarLivro(ASociedadeDoAnel);
    biblioteca.adicionarLivro(MarDeMonstros);

    // Registro de empréstimo e consulta de disponibilidade com códigos existentes
    biblioteca.registrarEmprestimo(1);
    biblioteca.consultarDisponibilidade(3);

    // Registro de empréstimo e consulta de disponibilidade com códigos inexistentes
    biblioteca.consultarDisponibilidade(4);
    biblioteca.registrarEmprestimo(4);
}

main();

