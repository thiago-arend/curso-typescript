import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => res.status(200).send("I'm Ok!"));
app.get("/today", (req: Request, res: Response) => {
  res.send({
    today: new Date().toLocaleDateString("pt-br")
  })
});

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));

/*

instalar os pacotes necessários:
  npm i -D typescript ts-node nodemon @types/express @types/node
  npm i express ...... e todos os demais pacotes para api's

executar
  npx tsc --init                        --> gera o tsconfig.json

e usar a configuração:
  {
    "compilerOptions": {
      "outDir": "dist",
      "esModuleInterop": true,
      "module": "CommonJS",
      "moduleResolution": "Node",
      "baseUrl": "src",
    },
    "ts-node": {
      "esm": true
    },
  }

alterar os scripts do package.json:     --> para rodar no ambiente ts (as pastas dependem do jeito que está desenvolvendo)
  "scripts": {
      "start": "node ./dist/index.js",
      "dev": "nodemon ./src/index.ts"
    },

remover do package.json a linha:        --> é necessário remover, pois a informação de módulo já está presente no ts config.json e evita o erro "ReferenceError: exports is not defined in ES module scope
    “type”:”module”

*/
