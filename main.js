/* Estilos básicos */
body {
    font-family: Arial, sans-serif;
        margin: 0;
            padding: 0;
            }

            header {
                background-color: #f2f2f2;
                    padding: 20px;
                    }

                    nav ul {
                        list-style: none;
                            padding: 0;
                                margin: 0;
                                }

                                nav li {
                                    display: inline-block;
                                        margin-right: 10px;
                                        }

                                        const inputPesquisa = document.getElementById('pesquisa');
                                        const produtos = [...]; // Array com todos os produtos

                                        inputPesquisa.addEventListener('input', (event) => {
                                            const termoPesquisa = event.target.value.toLowerCase();
                                                const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(termoPesquisa));
                                                    // Atualize a exibição dos produtos filtrados
                                                    });