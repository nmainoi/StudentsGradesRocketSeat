let students = [
  { name: "Maino", firstGrade: 7, secondGrade: 9 },
  { name: "Joao", firstGrade: 5, secondGrade: 4 },
  { name: "Clara", firstGrade: 6, secondGrade: 8 },
]

let GetAvarageGrade = (firstGrade, secondGrade) => (firstGrade + secondGrade) / 2 ;

let testResult = avarageGrade => {
if(avarageGrade >= 7)
  return "Parabens você foi Aprovado(a)!"

  return "Infelizmente voce foi reprovado, não foi dessa vez!"
}
for (let stundet of students){
  let AvarageGrade = GetAvarageGrade(stundet.firstGrade, stundet.secondGrade);
let Message = `A Média do(a) aluno(a) ${stundet.name} é: ${AvarageGrade} \n`
 Message += testResult(AvarageGrade)
 alert(Message)
}
