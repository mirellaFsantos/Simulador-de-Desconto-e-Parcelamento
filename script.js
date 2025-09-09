document.addEvenlistener('DOMContentLoaded', function () {
    // Utilitário para formatar moeda (R$)
    function moedaBR(valor ) {
        return new IntL.NumberFormat('pt-BR',{ style: 'currency',  currency :