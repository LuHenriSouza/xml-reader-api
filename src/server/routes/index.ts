import express, { RequestHandler, Router } from 'express';
import { redbull } from '../controllers';
import { parseStringPromise } from 'xml2js';

const router = Router();
const rawTextBodyParser = express.text({ type: 'application/xml' });

// FUNCAO TESTE
const verify: RequestHandler = async (req, res) => {
    try {
        const result = await parseStringPromise(req.body, { explicitArray: false, ignoreAttrs: true });
        // console.log('---------------------------------------------')
        // console.log(result)
        // console.log('---------------------------------------------')
        // const cnpj = result.nfeProc.NFe.infNFe.emit.CNPJ;
        // if (cnpj === '05402904002615' /*REDBULL*/) return res.json(redbull.getAll(result));
        // if (cnpj === '61186888002137' /*REDBULL*/) return res.json(redbull.getAll(result));
        return redbull.getAll(result);
        // return res.json({ Server: "CNPJ Não conhecido!" });
    } catch (e) {
        console.error(e);
        return res.json({ Server: "Ocorreu um erro", Error: e })
    }
}
// /FUNCAO TESTE

router.post('/test', rawTextBodyParser, verify);

export { router };