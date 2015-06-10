# PI Player v0.8 #

O π é um player interativo baseado no video element do HTML5 e no polyfill Polymer da Google, a ideia principal do π é oferecer todos os recursos do embed do YouTube mas te deixar livre para estilizar seu player como quiser.

## Instalação ##
Para ter o Pi em seu site você precisa baixar as dependencias do Polymer, Para isso baixe o projeto e entre na pasta do projeto
em seguida use o comando
``` $ bower install ```
no terminal ou no CMD

Após isso é só adicionar o script do **webcomponents.js** no seu projeto
``` <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script> ```
e em seguida importar o PI em sua aplicação
``` <link rel="import" href="PI_Data/PI.html"> ```

depois disso é só adicionar o player no seu código HTML, quantas vezes quiser

``` <pi-player id="player1" youtube="ID_DO_VÍDEO"></pi-player> ```

## A Pasta PI_Data ##
A pasta PI_Data é onde fica armazenado todos os arquivos e componentes do PI,
que são eles
- PI.html
- pi-theme.css
- pi.js

O PI.html é o componente em sí.
O pi-theme.css é a folha de estilo do pi, nela você pode editar todos os componentes do player.
O pi.js é os código de ações e de eventos do player, que faz com que ele possa pegar os dados do YouTube e mostrar na tela

## JavaScript ##
O Pi vem com algumas funções já pre-programadas, como a ideia é dar livre escolha ao desenvolvedor, tudo do player é manipulável, desde as labels dos botões até o estilo.
Para ter acesso a esses comandos você deve utilizar o objeto ``` control ``` presente no elemento.
esse objeto contém funções de controle do vídeo, como play e pause. e também contém funções de edição de layout.


# ATENÇÃO #

O Pi ainda está em faze de testes, então cuidado ao colocar no seu projeto.

## Licença
[MIT License](http://opensource.org/licenses/MIT)