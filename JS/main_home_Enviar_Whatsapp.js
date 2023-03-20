
function enviar_wpp(){
    /*DADOS ALUNO*/
    
    /*Vendedor*/ 
    let vendedor = document.querySelector('#Vendedor')
    let vendedor_pronto = vendedor.value
    /*Variável final: vendedor_pronto*/ 
    
    /*Nome do aluno*/
    let nome_do_aluno = document.querySelector('#nome_do_aluno')
    let nome_do_aluno_pronto = nome_do_aluno.value
    /*Variável final: nome_do_aluno_pronto*/
    
    /*RG Do Aluno*/
    let rg_aluno = document.querySelector('#rg_aluno')
    let rg_aluno_pronto = rg_aluno.value
    /*Variável final: rg_aluno_pronto*/

    /*CPF do Aluno*/
    let cpf_aluno = document.querySelector('#cpf_aluno')
    let cpf_aluno_pronto = cpf_aluno.value
    /*Variável final: cpf_aluno_pronto*/

    /*Data de nascimento do aluno*/
    let data_nascimento_aluno = document.querySelector('#data_nascimento_aluno')
    let data_nascimento_aluno_pronto = data_nascimento_aluno.value
    /*Variável final: data_nascimento_aluno_pronto*/

    /*Naturalidade do aluno*/
    let naturalidade_aluno = document.querySelector('#naturalidade_aluno')
    let naturalidade_aluno_pronto = naturalidade_aluno.value
    /*Variável final: naturalidade_aluno_pronto*/

    /*CEP do aluno*/
    let cep_aluno = document.querySelector('#cep_aluno')
    let cep_aluno_pronto = cep_aluno.value
    /*Variável final: cep_aluno_pronto*/

    /*Endereço do aluno*/
    let endereço_aluno = document.querySelector('#endereço_aluno')
    let endereço_aluno_pronto = endereço_aluno.value
    /*Variável final: endereço_aluno_pronto*/

    /*Bairro do aluno*/
    let bairro_aluno = document.querySelector('#bairro_aluno')
    let bairro_aluno_pronto = bairro_aluno.value
    /*Variável final: bairro_aluno_pronto*/

    /*Número da casa do aluno*/
    let número_casa_aluno = document.querySelector('#número_casa_aluno')
    let número_casa_aluno_pronto = número_casa_aluno.value
    /*Variável final: número_casa_aluno_pronto*/

    /*Contato do aluno*/
    let contato_aluno = document.querySelector('#contato_aluno')
    let contato_aluno_pronto = contato_aluno.value
    /*Variável final: contato_aluno_pronto*/

    /*Curso do ALuno*/
    let cursos_aluno = document.querySelector('#cursos')
    let cursos_aluno_pronto = cursos_aluno.value
    /*Variável final: cursos_aluno_pronto*/

    /*Horário do ALuno*/
    let horário_aluno = document.querySelector('#Horário')
    let horário_aluno_pronto = horário_aluno.value
    /*Variável final: horário_aluno_pronto*/


    /*Dados Do Responsável*/
    
    /*Nome do Responsável*/
    let nome_responsável = document.querySelector('#nome_responsável')
    let nome_responsável_pronto = nome_responsável.value
    /*Variável final: nome_responsável_pronto*/

    /*RG do Responsável*/
    let rg_responsável = document.querySelector('#rg_responsável')
    let rg_responsável_pronto = rg_responsável.value
    /*Variável final: rg_responsável_pronto*/
    
    /*CPF do Responsável*/
    let cpf_responsável = document.querySelector('#cpf_responsável')
    let cpf_responsável_pronto = cpf_responsável.value
    /*Variável final: cpf_responsável_pronto*/

    /*Data de Nascimento do Responsável */
    let data_nascimento_responsável = document.querySelector('#data_nascimento_responsável')
    let data_nascimento_responsável_pronto = data_nascimento_responsável.value
    /*Variável final: data_nascimento_responsável_pronto*/

    /*Naturalidade do Responsável*/
    let naturalidade_responsável = document.querySelector('#naturalidade_responsável')
    let naturalidade_responsável_pronto = naturalidade_responsável.value
    /*Variável final: naturalidade_responsável_pronto*/

    /*Contato do Responsável*/
    let contato_responsável = document.querySelector('#contato_responsável')
    let contato_responsável_pronto = contato_responsável.value
    /*Variável final: contato_responsável_pronto*/

    /*Observação*/
    let observação = document.querySelector('#observação')
    let observação_pronto = observação.value
    /*Variável final: observação_pronto*/

    /*Enviar Dados pro Whatsapp*/

    location.href = 'https://wa.me/5564992274457?text=*Vendedor*%3A+'+ vendedor_pronto + '%0A%0A*Nome*+*Do*+*Aluno*%3A+' + nome_do_aluno_pronto + '%0A*RG*+*Do*+*Aluno*%3A+' + rg_aluno_pronto + '%0A*CPF*+*Do*+*Aluno*%3A+' + cpf_aluno_pronto + '%0A*Data*+*De*+*Nascimento*+*Do*+*Aluno*%3A+' + data_nascimento_aluno_pronto + '%0A*Naturalidade*+*Do*+*Aluno*%3A+' + naturalidade_aluno_pronto + '%0A%0A*Cep*+*Do*+*Aluno*%3A+' + cep_aluno_pronto + '%0A*Endereço*+*Do*+*Aluno*%3A+' + endereço_aluno_pronto + '%0A*Bairro*%3A+' + bairro_aluno_pronto + '%0A*Número*%3A+' + número_casa_aluno_pronto + '%0A*Contato*+*Do*+*Aluno*%3A+' + contato_aluno_pronto + '%0A%0A*Curso*%3A+' + cursos_aluno_pronto + '%0A*Horário*+*Da*+*Aula*%3A+' + horário_aluno_pronto + '%0A%0A*Nome*+*Do*+*Responsável*%3A+' + nome_responsável_pronto + '%0A*RG*+*Do*+*Responsável*%3A+' + rg_responsável_pronto + '%0A*CPF*+*Do*+*Responsável*%3A+'+ cpf_responsável_pronto + '%0A*Data*+*De*+*Nascimento*+*Do*+*Responsável*%3A+' + data_nascimento_responsável_pronto + '%0A*Naturalidade*+*Do*+*Responsável*%3A+' + naturalidade_responsável_pronto + '%0A*Número*+*De*+*Contato*+*Do*+*Responsável*%3A+' + contato_responsável_pronto + '%0A*Observação*+*Da*+*Matrícula*%3A+' + observação_pronto 



    
    




    








    





}