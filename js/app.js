let listaAmigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    // Não permite inserir um nome vazio
    if(amigo.value == ''){
        alert('Insira um nome do amigo!');
        return;
    } 

    // Não permite add nomes iguais
    if(listaAmigos.includes(amigo.value)){
        alert('Já existe esse nome! Altere por favor.');
        return;
    }

    //add os amigos na array
    let lista = document.getElementById('lista-amigos');
    (listaAmigos.push(amigo.value)); 

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    // Número mínimo de amigos para o sorteio
    if(listaAmigos.length < 4){
        alert('Adicione pelo menos 4 nomes.');
        return;
    }

    embaralhar(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigos.length; i++) {

        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' -->' + listaAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' -->' + listaAmigos[i + 1] + '<br>';
        }
    }
}

function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaAmigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
