let scoreJoueur = 0
let scoreOrdinateur = 0

const possibilités = ['pierre', 'feuille', 'ciseaux']

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const choixJoueur = document.querySelector('#player-choice').value
  const choixOrdinateur = possibilités[Math.floor(Math.random() * possibilités.length)]
  const result = document.querySelector('#result')
  const labelScoreJoueur = document.querySelector('#joueur')
  const labelScoreOrdinateur = document.querySelector('#ordinateur')

  if (choixJoueur === choixOrdinateur) {
    result.textContent = "Egalité !"
  }
  if (choixJoueur === 'pierre' && choixOrdinateur === 'feuille' || choixJoueur === 'feuille' && choixOrdinateur === 'ciseaux' || choixJoueur === 'ciseaux' && choixOrdinateur === 'pierre') {
    result.textContent = `L'ordinateur a choisi ${choixOrdinateur} ! Vous perdez cette manche`
    scoreOrdinateur++
    labelScoreOrdinateur.textContent = scoreOrdinateur
  }
  if (choixJoueur === 'pierre' && choixOrdinateur === 'ciseaux' || choixJoueur === 'feuille' && choixOrdinateur === 'pierre' || choixJoueur === 'ciseaux' && choixOrdinateur === 'feuille') {
    result.textContent = `L'ordinateur a choix ${choixOrdinateur} ! Vous gagnez cette manche`
    scoreJoueur++
    labelScoreJoueur.textContent = scoreJoueur
  }
})