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
    const info = items.map((det: Detalhe) => {
        return {
            nomeProduto: det.prod.xProd,
            quantidade: det.prod.qCom
        };
    })

    return info;
}