// Classe que representa um livro dentro da biblioteca.
export class Livro {
    // Atributos privados que armazenam as informações do livro.
    private codigo: number;   // Código único do livro.
    private titulo: string;   // Título do livro.
    private autor: string;    // Autor do livro.
    private disponivel: boolean; // Indica se o livro está disponível para empréstimo.

    // Construtor que inicializa os atributos do livro.
    constructor(codigo: number, titulo: string, autor: string, disponivel: boolean) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    // Métodos "getter" para acessar as informações do livro.
    getCodigo(): number {
        return this.codigo;
    }
    getTitulo(): string {
        return this.titulo;
    }
    getAutor(): string {
        return this.autor;
    }
    getDisponivel(): boolean {
        return this.disponivel;
    }

    // Define a disponibilidade do livro.
    setDisponivel(disponivel: boolean): void {
        this.disponivel = disponivel;
    }
}
