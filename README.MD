## CRITERIO PARA RODAR TYPESCRIPT NO NODE

- Instalar com o comando `npm i --save-dev @types/express` e depois  `yarn add typescript -D `

- para iniciar o typescript `yarn tsc --init`

- No arquivo tsconfig.json descomente a linha de codigo `"outDir": "./dist"`

- para buildar `yarn tsc` para rodar `node dist/server.js`   