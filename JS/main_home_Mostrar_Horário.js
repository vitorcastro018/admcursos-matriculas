

function MostrarHorário(){

    let select = document.querySelector('#cursos');
    let optionValue = select.options[select.selectedIndex];
    
    let curso = optionValue.value;

    console.log(curso)
    
    
    
    
    
    if(curso === "INFO EMPRESARIAL"){
        Horários_Informática.style.display = 'block';

        Horários_ADM_LOG.style.display = 'none'
        Horários_Class_Grãos.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_Marketing.style.display = 'none'
        Horários_MrObras.style.display= 'none'

        
    }

    if(curso === "ASS. ADM E FINANCEIRO/LOGÍSTICA E CONTROLE DE ESTOQUE"){
        Horários_ADM_LOG.style.display = 'block';
        
        Horários_Informática.style.display = 'none';
        Horários_Class_Grãos.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_Marketing.style.display = 'none'
        Horários_MrObras.style.display= 'none'

    }

    if(curso === "Selecione o curso desejado"){
        optgroup.style.display = 'none'


    }
    
    /*if(curso === "ASSIS. DE FARMÁCIA E CLÍN. MÉDICAS"){
        Horários_Farmácia.style.display = 'block';
      
        Horários_Informática.style.display = 'none';
        Horários_ADM.style.display = 'none'
        Horários_Class_Grãos.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_Marketing.style.display = 'none'
        Horários_MrObras.style.display= 'none'

    
    }*/
    /*if(curso === "ASSIS. DE LOGÍSTICA E CONT. DE ESTOQUE"){
        Horários_Logística.style.display = 'block';

        Horários_Informática.style.display = 'none';
        Horários_ADM.style.display = 'none'
        Horários_Class_Grãos.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_Marketing.style.display = 'none'
        Horários_MrObras.style.display= 'none'


    }*/

    if(curso === "CLASS. DE GRÃOS"){
        Horários_Class_Grãos.style.display = 'block';

        Horários_Informática.style.display = 'none';
        Horários_ADM_LOG.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_Marketing.style.display = 'none'
        Horários_MrObras.style.display= 'none'

    }

    /*if(curso === "MANUTENÇÃO DE CEL E COMP"){
        Horários_Manutenção.style.display = 'block'

        Horários_Informática.style.display = 'none';
        Horários_ADM_LOG.style.display = 'none'
        Horários_Class_Grãos.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Marketing.style.display = 'none'
        Horários_MrObras.style.display= 'none'


    }*/

   if(curso === "MARKETING DIGITAL"){
        Horários_Marketing.style.display = 'block'

        Horários_Informática.style.display = 'none';
        Horários_ADM_LOG.style.display = 'none'
        Horários_Class_Grãos.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_MrObras.style.display= 'none'


   }

   if(curso === "MESTRE DE OBRAS"){
        Horários_MrObras.style.display = 'block';

        Horários_Informática.style.display = 'none';
        Horários_ADM_LOG.style.display = 'none'
        Horários_Class_Grãos.style.display = 'none'
        Horários_Farmácia.style.display = 'none'
        Horários_Logística.style.display = 'none'
        Horários_Manutenção.style.display = 'none'
        Horários_Marketing.style.display = 'none'


   }


}