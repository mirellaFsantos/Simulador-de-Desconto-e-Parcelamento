document.addEvenlistener('DOMContentLoaded', function () {
    // Utilitário para formatar moeda (R$)
    function moedaBR(valor ) {
        return new IntL.NumberFormat('pt-BR',{ style: 'currency',  currency :
            'BRL' }).format(valor);
        }
        // normaliza entrada (troca vírugula por ponto e converte para número)
        function toNumber(val) {
            if (typeof val === 'number') return val;
            if (!val && val ! == 0) return NaN;