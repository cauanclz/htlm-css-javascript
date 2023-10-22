const filme=document.querySelector('#filme')
const sinopse=document.querySelector('#primeiro')
const btum=document.querySelector('#super')
const btdois=document.querySelector('#hanco')
const bttres=document.querySelector('#grito')
const btquatro=document.querySelector('#homem')


btum.addEventListener('click',troca1)
btdois.addEventListener('click',troca2)
bttres.addEventListener('click',troca3)
btquatro.addEventListener('click',troca4)


function troca1(){
filme.src="images/supernatural.webp"
sinopse.textContent="Após perderem a mãe em um incêndio suspeito há mais de vinte anos atrás, os irmãos Sam (Jared Padalecki) e Dean (Jensen Ackles) Winchester descobrem que seu pai desapareceu durante uma ''viagem de caça''. Mas John Winchester (Jeffrey Dean Morgan) não é um caçador comum: ele é especializado em capturar criaturas sobrenaturais e treinou seus filhos para que fizessem o mesmo quando crescessem. Enquanto procuram pistas sobre o paradeiro de seu pai, Sam e Dean salvam pessoas inocentes e enfrentam fantasmas, demônios e vampiros."
}
function troca2(){
filme.src="images/hancock.jpg"
sinopse.textContent="Hancock (Will Smith) é um super-herói que perdeu a popularidade que tinha, devido às suas tentativas de resgate pouco convencionais. Após salvar Ray Embrey (Jason Bateman), um agente de relações públicas, ele se oferece para ajudá-lo a melhorar sua imagem. A idéia não é bem aceita por Mary (Charlize Theron), a esposa de Ray, que mostra ao marido que Hancock teve uma ordem de prisão contra si lançada. Ray então sugere que Hancock se entregue, mesmo podendo escapar da prisão na hora que quisesse, para dar o exemplo e iniciar a mudança de sua imagem junto ao público. Ray acredita que, com Hancock preso, a criminalidade irá disparar e, com isso, a população chamará de volta seu herói."
}
function troca3(){
filme.src="images/o grito.jpg"
sinopse.textContent="No reboot de O Grito, em uma casa, uma maldição nasce após uma pessoa morrer em um momento de terrível terror e tristeza. Voraz, a entidade maligna não perdoa ninguém, fazendo vítima atrás de vítima e passando a maldição adiante."
}
function troca4(){
 filme.src="images/Poster_Ateoultimohomem-1.jpg"   
 sinopse.textContent="Em Até o Último Homem, durante a Segunda Guerra Mundial, o médico do exército Desmond T. Doss (Andrew Garfield) se recusa a pegar em uma arma e matar pessoas, porém, durante a Batalha de Okinawa ele trabalha na ala médica e salva mais de 75 homens, sendo condecorado. O que faz de Doss o primeiro Opositor Consciente da história norte-americana a receber a Medalha de Honra do Congresso."

}

