import express, { RequestHandler, Router } from 'express';
import { parseStringPromise } from 'xml2js';


const router = Router();

// FUNCAO TESTE
const rawTextBodyParser = express.text({ type: 'application/xml' });

interface Produto {
    cProd: string;
    xProd: string;
    qCom: string;
}

interface Detalhe {
    prod: Produto;
}

const funcaoteste: RequestHandler = async (req, res) => {
    try {
        const result = await parseStringPromise(req.body, { explicitArray: false, ignoreAttrs: true });
        const items = result.nfeProc.NFe.infNFe.det;
        const info = items.map((det: Detalhe) => {
            return {
                nomeProduto: det.prod.xProd,
                quantidade: det.prod.qCom
            };
        })

        return res.json(info);
    } catch (error) {
        console.error('Erro ao parsear XML:', error);
        return res.status(500).send('Erro ao processar o XML');
    }
}

// /FUNCAO TESTE

router.post('/test', rawTextBodyParser, funcaoteste);

export { router };