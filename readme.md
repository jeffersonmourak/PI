# ENGLISH VERSION #
# PI Player v0.9 #

The π is a interactive player based in HTML5 Video Element and Google's Polymer, The main idea is offers all youtube's features of a embed video, but let you free to stylize as you wish.

## Install ##
To use π in your site, you need download polymer's dependencies. to do this, enter in project directory, and run this command in terminal or Command Prompt.

``` $ bower install ```

before that, add **webcomponents.js** on your project.

``` <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script> ```

and the PI on your HTML page

``` <link rel="import" href="PI_Data/PI.html"> ```

so, now can you use the PI on the app.

You have two ways to use the PI.

Getting the video from youtube
``` 
	<pi-player id="player1" youtube="ID_DO_VÍDEO"></pi-player> 
```

Getting the a local source
```
	<pi-player id="player1">
		<source src="http://www.w3schools.com/tags/movie.mp4" type="video/mp4">
  		<source src="http://www.w3schools.com/tags/movie.ogg" type="video/ogg">
	</pi-player> 
```
## PI_Data directory ##

PI_Data/ is the place where all components of PI was seved,
They are.
- PI.html
- pi-theme.css
- pi.js

The PI.html Is the web component
The pi-theme.css is the stylesheet of your player.
The pi.js is the code of events and the request of source vídeo in youtube

## JavaScript ##
The π have some pre-programed functions, the idea of this player is let you free as developer, **EVERYTHING** is manipulable, buttons, labels, and the style.
to access this, use ```control``` object in element.  

# ATENTION #

The π still in development, use in production is not recommended.

## LICENCE
[MIT License](http://opensource.org/licenses/MIT)

# PORTUGUESE VERSION #
# PI Player v0.9 #
O π é um player interativo baseado no video element do HTML5 e no polyfill Polymer da Google, a ideia principal do π é oferecer todos os recursos do embed do YouTube mas te deixar livre para estilizar seu player como quiser.


## Instalação ##
Para ter o π em seu site você precisa baixar as dependencias do Polymer, Para isso baixe o projeto e entre na pasta do projeto
em seguida use o comando

``` $ bower install ```

no terminal ou no CMD

Após isso é só adicionar o script do **webcomponents.js** no seu projeto

``` <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script> ```

e em seguida importar o PI em sua aplicação

``` <link rel="import" href="PI_Data/PI.html"> ```

depois disso é só adicionar o player no seu código HTML, quantas vezes quiser

Você pode utilizar PI com id do youtube
``` <pi-player id="player1" youtube="ID_DO_VÍDEO"></pi-player> ```

Ou pode adicionar um source local.

```
	<pi-player id="player1">
		<source src="http://www.w3schools.com/tags/movie.mp4" type="video/mp4">
  		<source src="http://www.w3schools.com/tags/movie.ogg" type="video/ogg">
	</pi-player> 
```
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

O Pi ainda está em fase de testes, então cuidado ao colocar no seu projeto.

## Licença
[MIT License](http://opensource.org/licenses/MIT)