const Projeto = require('../models/Projeto');
const Email = require('../configs/email');

const indexController = {
    inicio: (req, res)=>{
        let listaDeProjetos = Projeto.pegarProjetos();
        return res.render('index', {listaDeProjetos,msg:''})
    },
    emailContato: (req, res) =>{
          
       const {nome, email, texto} = req.body;

       let enviarEmail = {
           from:'asovitorio@gmail.com',
           to:'alebvitorio@gmail.com',
           subject:'Proposta Via Portifólio',
           html:`<ul>
                    <h1>Proposta Via Portifólio</h1>
                    <li>De: ${nome}</li>
                    <li>${texto}</li>
                    <li>Para mais informação entre em contato atraves do E-mail: ${email}</li>
                 </ul>`
       }
      
        Email.sendMail(enviarEmail,(erro)=>{
            if(erro){
                console.log('DEU RUIM: ' + erro );
            }
        });
        let listaDeProjetos = Projeto.pegarProjetos();
        return res.render('index', {listaDeProjetos,msg:"Enviada com Sucesso! Obrigado..."});
        


      

    }
}

module.exports = indexController