function sexo(alunos) {
  let quantidade = alunos.length;
  let masculino = 0;
  let feminino = 0;

  for (let i = 0; i < quantidade; i++) {
    if (alunos[i].sexo === "Masculino") {
      masculino++;
    } else if (alunos[i].sexo === "Feminino") {
      feminino++;
    }
  }
  
  return [quantidade, masculino, feminino];
}

const alunos1 = [
  {email: "aluno1@email.com", matricula: "001", nome: "Aluno 1", nascimento: "01/01/2000", sexo: "Feminino", naturalidade: "Cidade 1", turma: "Turma A"},
  {email: "aluno2@email.com", matricula: "002", nome: "Aluno 2", nascimento: "02/02/2000", sexo: "Feminino", naturalidade: "Cidade 2", turma: "Turma B"},
  {email: "aluno3@email.com", matricula: "003", nome: "Aluno 3", nascimento: "03/03/2000", sexo: "Feminino", naturalidade: "Cidade 3", turma: "Turma C"},
  {email: "aluno4@email.com", matricula: "004", nome: "Aluno 4", nascimento: "04/04/2000", sexo: "Feminino", naturalidade: "Cidade 4", turma: "Turma D"}, 
  {email: "aluno1@email.com", matricula: "005", nome: "Aluno 5", nascimento: "05/05/2000", sexo: "Feminino", naturalidade: "Cidade 5", turma: "Turma E"}, 
  {email: "aluno1@email.com", matricula: "006", nome: "Aluno 6", nascimento: "06/06/2000", sexo: "Feminino", naturalidade: "Cidade 6", turma: "Turma F"},
  {email: "aluno1@email.com", matricula: "007", nome: "Aluno 7", nascimento: "07/07/2000", sexo: "Feminino", naturalidade: "Cidade 5", turma: "Turma G"}, 
  {email: "aluno1@email.com", matricula: "008", nome: "Aluno 8", nascimento: "08/08/2000", sexo: "Feminino", naturalidade: "Cidade 1", turma: "Turma H"},
  {email: "aluno1@email.com", matricula: "009", nome: "Aluno 9", nascimento: "09/09/2000", sexo: "Feminino", naturalidade: "Cidade 5", turma: "Turma I"}, 
  {email: "aluno1@email.com", matricula: "010", nome: "Aluno 10", nascimento: "10/10/2000", sexo: "Masculino", naturalidade: "Cidade 1", turma: "Turma J"},
  {email: "aluno1@email.com", matricula: "011", nome: "Aluno 11", nascimento: "11/11/2000", sexo: "Masculino", naturalidade: "Cidade 5", turma: "Turma K"},  
  {email: "aluno1@email.com", matricula: "012", nome: "Aluno 12", nascimento: "12/12/2000", sexo: "Masculino", naturalidade: "Cidade 1", turma: "Turma L"},
  {email: "aluno1@email.com", matricula: "013", nome: "Aluno 13", nascimento: "01/01/2001", sexo: "Masculino", naturalidade: "Cidade 5", turma: "Turma M"}, 
  {email: "aluno1@email.com", matricula: "014", nome: "Aluno 14", nascimento: "02/02/2001", sexo: "Masculino", naturalidade: "Cidade 1", turma: "Turma N"},
  {email: "aluno1@email.com", matricula: "015", nome: "Aluno 15", nascimento: "03/03/2001", sexo: "Masculino", naturalidade: "Cidade 5", turma: "Turma O"}, 
  {email: "aluno1@email.com", matricula: "016", nome: "Aluno 16", nascimento: "04/04/2001", sexo: "Masculino", naturalidade: "Cidade 1", turma: "Turma P"},
  {email: "aluno1@email.com", matricula: "017", nome: "Aluno 17", nascimento: "05/05/2001", sexo: "Masculino", naturalidade: "Cidade 5", turma: "Turma Q"}, 
  {email: "aluno1@email.com", matricula: "018", nome: "Aluno 18", nascimento: "06/06/2001", sexo: "Masculino", naturalidade: "Cidade 1", turma: "Turma R"},
  {email: "aluno1@email.com", matricula: "019", nome: "Aluno 19", nascimento: "07/07/2001", sexo: "Masculino", naturalidade: "Cidade 5", turma: "Turma S"}, 
  {email: "aluno1@email.com", matricula: "020", nome: "Aluno 20", nascimento: "08/08/2001", sexo: "Masculino", naturalidade: "Cidade 1", turma: "Turma T"},
 




];

console.log(sexo(alunos1));
