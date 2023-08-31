function segurosValor () {
    let txt;
    let kind = document.getElementById('seg').value;
    if (kind == 'basico') {
        txt = '<h2>El seguro de tipo Básico cuesta $500 al mes.</h2>';
    }
    else if (kind == 'intermedio') {
        txt = '<h2>El seguro de tipo Intermedio cuesta $1000 al mes.</h2>';
    }
    else if (kind == 'premium') {
        txt = '<h2>El seguro de tipo Premium cuesta $1500 al mes.</h2>';
    }
    document.getElementById('txt').innerHTML = txt;
}segurosValor()