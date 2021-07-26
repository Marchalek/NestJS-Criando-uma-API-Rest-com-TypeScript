import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    livros: Livro[] = [
        // new Livro("LIV01", "Livro TDD e BDD na prática", 29.90),
        // new Livro("LIV02", "Livro BDD na prática", 39.90),
        // new Livro("LIV03", "Livro TDD na prática", 49.90)
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros[0]
    }

    criar(livro: Livro) {
        this.livros.push(livro)
    }

    alterar(livro: Livro):Livro {
        return livro;
    }

    apaagr(id: number) {
        this.livros.pop()
    }
}