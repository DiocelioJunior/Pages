# D.coder — portfólio com quatro demonstrações

Site independente em **HTML, CSS e JavaScript puro**, pronto para o GitHub Pages. Não precisa instalar dependências ou compilar arquivos.

## Páginas

| Arquivo | Página |
| --- | --- |
| `index.html` | Portfólio principal, com quatro projetos e filtros |
| `barbearia.html` | HighTop — visual preto e branco, preservado da versão anterior |
| `maquiagem.html` | Aura Makeup — visual delicado em tons rosados |
| `petshop.html` | Pata & Prosa — visual acolhedor em creme e verde |
| `quadras.html` | Arena Move — visual esportivo escuro com detalhes em verde-lima |

A página inicial abre cada demonstração. Todas oferecem um link para voltar ao portfólio. Os três novos estabelecimentos e seus preços são exemplos fictícios, identificados nas páginas.

## Visualizar

Abra `index.html` diretamente no navegador ou acesse `http://localhost/easyappointments/github-pages/` com o XAMPP ativo. Os recursos são locais e usam caminhos relativos.

## Editar

- **Portfólio:** `index.html` e `assets/css/portfolio.css`.
- **Barbearia:** `assets/js/config.js`, `barbearia.html` e `assets/css/style.css`.
- **Maquiagem, petshop e quadras:** `assets/js/demos-config.js`. Nesse arquivo você pode alterar marca, textos, serviços, valores e links de cada segmento.
- **Aparência dos três novos modelos:** `assets/css/demos.css`; as classes `demo-beauty`, `demo-pets` e `demo-sports` definem cada identidade.
- **Fotografias e logo:** `assets/images/`.

O HTML já inclui o conteúdo inicial. Se atualizar os arquivos de configuração, o JavaScript aplicará os novos textos. Atualize também o HTML correspondente se quiser que a mesma alteração apareça com JavaScript desativado.

## Conectar agendamentos

Na configuração da página desejada, preencha `bookingUrl` com a URL pública do sistema, por exemplo:

```js
bookingUrl: "https://seu-dominio.com/easyappointments/index.php/booking",
```

Na barbearia, os IDs dos serviços foram mantidos da versão exportada. Nos novos modelos, os IDs são `null`: preencha com os IDs reais do seu sistema se quiser abrir um serviço específico. Os links acrescentam `service=ID` somente quando há um ID válido.

Com a URL vazia, os botões levam à seção de contato/demonstração. O portfólio não realiza reservas e não apresenta horários fictícios como disponíveis. O GitHub Pages hospeda as páginas estáticas; o sistema PHP de agendamento continua na hospedagem compatível.

## Publicar no GitHub Pages

1. Crie um repositório para o portfólio.
2. Envie **o conteúdo desta pasta** para a raiz do repositório, incluindo as cinco páginas HTML, `assets/` e `.nojekyll`.
3. Abra **Settings → Pages**.
4. Escolha **Deploy from a branch**, branch **main** e pasta **/(root)**.
5. Salve e aguarde o endereço de publicação informado pelo GitHub.

Também é possível extrair `portfolio-github-pages.zip` e enviar o conteúdo extraído. Não envie o restante do projeto PHP ou arquivos privados do sistema.

Documentação oficial: [fonte de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [criar um site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Imagens e fontes

As imagens são ilustrativas e foram geradas por IA. Os arquivos, dimensões e prompts das novas imagens estão em `IMAGENS.md`. As fontes são servidas localmente e suas licenças OFL estão em `assets/fonts/`.


## Endereço e SEO

Repositório: https://github.com/DiocelioJunior/Pages

Endereço previsto do portfólio: https://dioceliojunior.github.io/Pages/

A configuração de publicação deve usar **Settings → Pages → Deploy from a branch → main → /(root)**. O conector usado para enviar os arquivos não oferece alteração das configurações administrativas do Pages.

O projeto inclui títulos e descrições específicos, URLs canônicas, Open Graph e Twitter Cards com imagens JPEG, dados estruturados WebPage/CollectionPage, navegação por breadcrumbs, `sitemap.xml`, `robots.txt`, favicon e página 404. As páginas demonstrativas não são marcadas como empresas locais reais e não recebem avaliações fictícias.

As imagens de compartilhamento ficam em `assets/images/social/`. Ao trocar o nome ou o domínio, atualize as metatags e os dados estruturados em cada HTML, além do sitemap. As configurações JavaScript usam `seoTitle` e `seoDescription` para preservar esses textos após o carregamento.

Após a publicação, você pode verificar a propriedade do endereço no Google Search Console e enviar o sitemap https://dioceliojunior.github.io/Pages/sitemap.xml. Essa verificação depende da sua conta; nenhum código de verificação foi inventado ou adicionado. SEO técnico não garante posição nos resultados nem indexação imediata.

Em um site de projeto do GitHub Pages, os rastreadores consultam o robots.txt na raiz do domínio, e não em `/Pages/robots.txt`. O arquivo deste projeto está incluído para portabilidade; o sitemap pode ser informado diretamente no Search Console. Um robots.txt de outro repositório na raiz do domínio continua tendo prioridade.

Referências: [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [URLs canônicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
