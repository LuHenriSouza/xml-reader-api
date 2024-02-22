import { Request, Response } from "express";

interface Produto {
    cProd: string;
    xProd: string;
    qCom: string;
}

interface Detalhe {
    prod: Produto;
}
interface RequestParams {

}
export const getAll = (result: any) => {

    const items = result.nfeProc.NFe.infNFe.det;

    const detalhes: Detalhe[] = Array.isArray(items) ? items : [items];

    // Mapeando todos os detalhes para extrair as informações desejadas
    const info = detalhes.map((det) => {
        return {
            nomeProduto: det.prod.xProd,
            quantidade: det.prod.qCom
        };
    });

    // Não é necessário usar if/else aqui, pois o mapeamento acima já cuida tanto de um único item quanto de múltiplos itens
    return info;


}