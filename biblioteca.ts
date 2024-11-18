// Importa a classe Livro que será utilizada para gerenciar o acervo.
import { Livro } from "./livro";

// Classe responsável por representar uma biblioteca e gerenciar seu acervo de livros.
export class Biblioteca {
    // Lista que contém todos os livros da biblioteca.
    private acervo: Livro[] = []; // Inicializa o array vazio.

    // Retorna o acervo completo da biblioteca.
    getAcervo(): Livro[] {
        return this.acervo;
    }

    // Adiciona um novo livro ao acervo da biblioteca.
    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro); // Insere o livro na lista de livros.
    }

    // Registra um empréstimo de livro com base no código.
    registrarEmprestimo(codigo: number): void {
        try {
            // Busca o livro pelo código no acervo.
            const livro = this.acervo.find(l => l.getCodigo() === codigo);
            if (livro) {
                // Verifica se o livro está disponível para empréstimo.
                if (livro.getDisponivel()) {
                    livro.setDisponivel(false); // Define o livro como não disponível.
                    console.log('Empréstimo registrado com sucesso!');
                } else {
                    console.log('O livro já está emprestado.');
                }
            }
        } catch {
            // Caso o código não seja encontrado, exibe um erro.
            console.error(`Livro com o código ${codigo} não encontrado!`);
        }
    }

    // Consulta a disponibilidade de um livro no acervo.
    consultarDisponibilidade(codigo: number): boolean | undefined {
        try {
            // Busca o livro pelo código no acervo.
            const livro = this.acervo.find(l => l.getCodigo() === codigo);
            if (livro) {
                // Exibe a disponibilidade do livro encontrado.
                console.log(`Disponibilidade do livro "${livro.getTitulo()}": ${livro.getDisponivel()}`);
                return livro.getDisponivel();
            }
        } catch {
            // Caso o código não seja encontrado, exibe um erro.
            console.error(`Livro com o código ${codigo} não encontrado!`);
        }
    }
}
