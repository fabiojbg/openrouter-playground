---
name: app-deploy
description: Esta skill automatiza a atualização e o deploy da aplicação no servidor remoto Ubuntu.
---

## Passos para Execução:

Siga exatamente estes passos no terminal.

1.  **Conexão e Execução Remota**:
    Execute o comando abaixo, no terminal, para conectar ao servidor via SSH, navegar até o diretório do projeto, atualizar o código e reiniciar os contêineres Docker:

    ```bash
    ssh -i ~/Certs/ssh-key root@botelho.cc -t "cd /github/openrouter-playground && git pull && docker compose up --build -d; exec bash"
    ```

## Detalhes Técnicos:
- **SSH Key**: Usa a chave em `~/Certs/ssh-key`.
- **Diretório Remoto**: `/github/openrouter-playground`.
- **Docker**: Reconstrói as imagens e sobe os contêineres em modo detached (`-d`).
- **Terminal**: O comando `exec bash` ao final mantém a sessão SSH aberta para que você possa visualizar os logs iniciais ou o status do sistema.

