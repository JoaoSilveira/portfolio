+++ 
draft = false
date = 2023-06-27T14:58:45-03:00
title = "Iniciando um Portfólio com Hugo"
description = ""
slug = "portfolio-1-inicio"
authors = ["João Pedro Silveira"]
tags = []
categories = ["Portfólio com Hugo"]
externalLink = ""
series = []
+++

Nesta série de posts vou falar sobre o processo de fazer o meu portfólio usando o framework [Hugo](https://gohugo.io).
Isto não é para ser um tutorial, mas sim um relatório de atividades desempenhadas.

## O que é Hugo?

Hugo é um framework para criação de sites estáticos, sua velocidade e flexibilidade o fez subir em popularidade,
hoje é um dos frameworks open-source mais populares da área. A ferramenta foi escrita em [Go](https://go.dev) e é
otimizada para velocidade, o código fonte é disponibilizado pelo [GitHub](https://github.com/gohugoio/hugo).

## Por que Hugo?

Existem diversas alternativas para gerar sites estáticos, como [11ty](https://www.11ty.dev), [Jekyll](https://jekyllrb.com), [Gatsby](https://www.gatsbyjs.com).
Por que escolher Hugo?

Hugo me pareceu a ferramenta mais apropriada para a minha finalidade de criar um blog/portfólio, é um framework bem
autossuficiente, isto é, não depende de plugins ou outras ferramentas externas para realizar tarefas corriqueiras, é
uma ferramenta simples mas bem flexível, e muito mais performática que as alternativas escritas em JavaScript.

# Planejamento

A finalidade deste site é apresentar a mim, meu currículo, projetos e competências. Atualmente planejo dividir o conteúdo
em duas grandes sessões: blog e projetos. No blog vou relatar o desenvolvimento de meus projetos, demonstrar competências
que não estão contidas em um projeto, e possívelmente escrever sobre coisas que me interessam. A ala de projetos será
dedicada a apresentar os meus projetos, estejam eles em fase de planejamento, em andamento ou concluído, e falar
brevemente sobre os conceitos e técnicas empregadas no desenvolvimento.

# Primeiros passos

## Ambiente

Tudo se inicia preparando o ambiente, isto é, instalando Hugo e suas "dependências", optei primeiramente pela opção
[Build from source](https://gohugo.io/installation/windows/#build-from-source), então segui as instruções presentes na página.
Já tinha Go instalado na minha máquina (Windows 10), porém era uma versão antiga, fiz o update para uma versão que suporta o Hugo.
Também é necessário ter um compilador GCC instalado caso queira buildar a versão extendida, portanto baixei uma versão [apontada por eles](https://discourse.gohugo.io/t/41370).
Com as dependências resolvidas, continuando os passos indicados pelo link tentei executar o comando:

```
go install -tags extended github.com/gohugoio/hugo@latest
```

O que falhou por um erro no linker do GCC, não estava encontrando duas bibliotecas. Testei sem sucesso com diferentes versões
do GCC que se encontram no mesmo link. Decidi então mudar para a opção [Prebuilt binaries](https://gohugo.io/installation/windows/#prebuilt-binaries),
fiz o download do arquivo, extraí o conteúdo para uma pasta, adicionei o diretório no **PATH** do sistema, e então, a ferramenta funcionou.

## Projeto

Com base no [Quick Start](https://gohugo.io/getting-started/quick-start/) deles, eu criei um projeto novo pelo terminal:

```
hugo new site portfolio
```

Existem diversos temas disponíveis para uso [no site deles](https://themes.gohugo.io), gostei especialmente do [Coder](https://themes.gohugo.io/themes/hugo-coder/),
então instalei ele:

```
git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
```

Ajustei o arquivo `hugo.toml` para utilizar o tema correto `theme = 'hugo-coder'`, e iniciei o servidor local com o comando:

```
hugo server -D
```

A partir deste ponto eu passei a ajustar as [configurações do tema](https://github.com/luizdepra/hugo-coder/blob/main/docs/configurations.md),
escrever este post e estudar mais Hugo.