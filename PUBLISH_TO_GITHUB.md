# Publicar este projeto no GitHub

O repositório ainda não foi enviado para uma conta GitHub. Este pacote está preparado para envio: a extensão fica na raiz, de modo que o instalador Git do SillyTavern encontre `manifest.json` logo após clonar.

## Método pelo navegador

1. Entre na sua conta em https://github.com/new.
2. Em **Repository name**, use `hellaverse-infernal-os`.
3. Selecione **Public** se quiser instalar pelo SillyTavern usando URL. Não marque para adicionar README, `.gitignore` ou licença — esses arquivos já estão neste pacote.
4. Crie o repositório vazio.
5. Extraia `Hellaverse_Infernal_OS_GitHub_Repository.zip` no dispositivo onde vai fazer o upload.
6. No repositório, selecione **Add file → Upload files**, envie os arquivos e pastas extraídos, confirme que `manifest.json`, `index.js` e `style.css` estão na raiz e finalize com **Commit changes**.
7. Abra a página do repositório e copie a URL HTTPS. Ela será algo como `https://github.com/SEU-USUARIO/hellaverse-infernal-os`.
8. No SillyTavern, abra **Extensions → Install Extension** e cole essa URL.

Se o navegador móvel não aceitar upload de pastas inteiras, use GitHub Desktop ou Git instalado em um computador. Não publique chave de API, senha, token de acesso ou arquivos privados.

## Método com Git em computador

Depois de extrair o ZIP, abra o terminal na pasta `hellaverse-infernal-os-github` e execute:

```bash
git init
git branch -M main
git add .
git commit -m "Initial HELLAVERSE Infernal OS release"
git remote add origin https://github.com/SEU-USUARIO/hellaverse-infernal-os.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo nome da conta. O GitHub pode pedir autenticação pelo navegador ou por um método aprovado; não cole tokens ou senhas em conversas.

## Depois de publicar

Confira se estes caminhos funcionam na página do repositório:

- `/manifest.json`
- `/index.js`
- `/style.css`
- `/presets/Hellaverse_Gemini_Infernal_Roleplay.json`
- `/lorebook/Hellaverse_Infernal_Grimoire.json`

O primeiro trio precisa estar na raiz para a instalação da extensão. Preset e lorebook são importados separadamente dentro do SillyTavern.
