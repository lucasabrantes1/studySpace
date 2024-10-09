# Escalando Vue com Nuxt



O vue cli não é uma estrutura  pronta para a produção,  e também existe alguns problemas por exemplo

1. como faço para combinar bibliotecas ?
2. Como faço para organizar meu código?
3. Como faço para otimizar para SEO?
4. Como  faço para otimizar velocidade ?

Esses são alguns problemas que o Nuxt.js se propõe a resolver.

Respondendo as perguntas acima.

 1.  ## Como faço para combinar bibliotecas ?

O nuxt não apenas vem pré-configurado com as bibliotecas (Vuex, Vue Router, Vue Meta), mas também configura seu projeto com padrão inteligentes baseado em boas praticar do mercado que o vue por si só não oferece. Para criar um projeto no Nuxt, é tão fácil só utilizar o npx create-nuxt-app e ele ira perguntar quais bibliotecas vc gostaria de utilizar.

2. ## Como faço para organizar meu código ?

A estrutura padrão do do vue possui uma pasta src com assets e components

![Untitled](https://user-images.githubusercontent.com/62405928/124048209-2e771f00-d9ec-11eb-896e-6fb6af5657f0.png)


já a estrutura do Nuxt possui diversas opções de páginas com base em boas práticas.

![Untitled (1)](https://user-images.githubusercontent.com/62405928/124048236-3c2ca480-d9ec-11eb-956f-252efa89d52b.png)

  3. ## Como faço para otimizar para SEO?**

Aplicações feitas como vue, react e angular não, são favoráveis para o SEO isso porque quando utilizamos algum, desses frameworks estamos criando uma aplicação SPA, esse tipo de aplicação(SPA) que por sua vez tem seu conteúdo carregado dinamicamente via javascript, que não tem um html por trás.

 Só que iremos querer que a nossa página seja indexada corretamente pelos mecanismos de pesquisa como o Google, para que assim sejam facilmente encontrados pela busca. 

  A melhor solução, é o **SERVER SIDE RENDERING,** em outras palavras, pré-renderizar as páginas no servidor , e ter o HTML palpável no browser, no vue fazer isso é uma tarefa muito árdua, mas o Nuxt já faz isso automaticamente para a gente.

4. ## Como faço para otimizar para velocidade?**

 O carregamento inicial das aplicações do vue pode ser lento,

mas com o nuxt temos duas opções de renderização, podendo assim optarmos por renderizar de maneira STATIC,  ou seja html, css e js, podendo jogar em uma hospedagem estática, até mesmo porque são linguagens nativa que navegadores podem interpretar  essa implementação estatica já é o que o Vue CLI consegue implementar, mas dessa maneira não teremos  o recurso de SERVER SIDE RENDERING, por isso no nuxt nos temos a implementação de **SERVER** ou servidor  no qual o html é renderizado no servidor e isso fara com que a sua página  seja carregada mais rapídamente pelo navegador e com code displayd, o javascript só vai carregar onde ele de fato for utilizado preservando a boa perfomance da aplicação.
