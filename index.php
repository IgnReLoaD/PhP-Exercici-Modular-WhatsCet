<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Ignasi Ortiz" />
    <meta name="description" content="test arrays php" />
    <title>WhatsCet - Exercici PhP Modular</title>    
</head>
<body>
    <link rel="stylesheet" type="text/css" href="./styles/styles.css"> 
    <header class="cabecera">        
        <nav>
            <img class="logo" src="./assets/logo_cet.png">        
            <h2>WhatsCet</h2>                    
            <menu>
                <ul>
                    <li>opcio1</li>
                    <li>opcio2</li>
                </ul>
            </menu>
        </nav>
    </header>
    
    <H1> Exercici en PHP - practicar funcions </H1>  
    
    <main>
        <section id="contacts">
            <p>Secció de contactes</p>
        </section>
        <section id="messages">
            <p>Secció de missatges</p>
            <article id="conversa">
                <p>Article de conversa</p>
            </article>
            <article id="nouMissatge">
                <form action="index.php" method="post">
                <label for="newMsg">Nou missatge: </label>
                <input type="text" id="newMsg" name="newMsg" placeholders="escriu..."/>
                <input type="submit" value="Enviar"/>
            </article>
        </form>
        </section>
    </main>
    
</body>
</html>