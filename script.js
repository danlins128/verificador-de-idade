function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('nascimento')
var res = document.getElementById('res')

if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO!!!] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex [0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 14){
            // Criança
            img.setAttribute('src', 'crianca-m.png')
            res.innerHTML = `Detectamos criança com ${idade} ano(s).`
        }else if (idade > 14 && idade < 21){
            // Jovem
            img.setAttribute('src', 'jovem-m.png')
            res.innerHTML = `Detectamos jovem com ${idade} ano(s).`
        }else if (idade >= 21 && idade < 50){
            // Adulto
            img.setAttribute('src', 'adulto-m.png')
            res.innerHTML = `Detectamos adulto com ${idade} ano(s).`
        }else {
            //Idoso
            img.setAttribute('src', 'idoso-m.png')
            res.innerHTML = `Detectamos idoso com ${idade} ano(s).`
        }
    } else if (fsex [1].checked){
        genero = "Mulher"
        if (idade >= 0 && idade < 14){
            // Criança
            img.setAttribute('src', 'crianca-f.png')
            res.innerHTML = `Detectamos criança com ${idade} ano(s).`
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'jovem-f.png')
            res.innerHTML = `Detectamos jovem com ${idade} ano(s).`
        } else if (idade < 49){
            // Adulto
            img.setAttribute('src', 'adulta-f.png')
            res.innerHTML = `Detectamos adulta com ${idade} ano(s).`
        } else {
            // Idosa
            img.setAttribute('src', 'idosa-f.png')
            res.innerHTML = `Detectamos idosa com ${idade} ano(s).`
        }

    }
    res.style.textAlign = 'center'
   // res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
    res.appendChild(img)
}






}
