const projetos = [
    {
        nome:"PetShop em Node",
        descricao:"Petshop feito em node",
        tecnologia:"Node"
    },
    {
        nome:"Site Landseeker",
        descricao:"Site feito em HTML",
        tecnologia:"HTMl & CSS"
    },
    {
        nome:"Pizzaria",
        descricao:"Sistema Feito com Express",
        tecnologia:"Express"
    }
]

const pegarProjetos = ()=>{
    return projetos;
}

module.exports = {pegarProjetos}