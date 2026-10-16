<div align="center">
  <img src="assets/infernal-seal.svg" alt="Infernal OS sigil" width="120" />
  <h1>HELLAVERSE — INFERNAL OS</h1>
  <p><strong>Uma interface infernal para roleplay narrativo no SillyTavern.</strong></p>
  <p>Sete anéis · localização dinâmica · elenco de cena · relógio do Extermínio · preset Gemini · lorebook</p>
</div>

> Projeto de fã, não oficial e sem vínculo com os titulares de *Hazbin Hotel*, *Helluva Boss*, Hellaverse ou SillyTavern.

## O que vem no repositório

- `manifest.json`, `index.js` e `style.css` na raiz: a extensão instalável do SillyTavern.
- `assets/infernal-seal.svg`: selo vetorial original para a identidade visual do projeto.
- `presets/Hellaverse_Gemini_Infernal_Roleplay.json`: preset de Chat Completion para o conector Google AI Studio/Gemini.
- `lorebook/Hellaverse_Infernal_Grimoire.json`: World Info com 58 entradas, incluindo quatro entradas globais constantes.
- `tests/check_package.py`: verificações estruturais e de conteúdo.

## Instalar pelo GitHub no SillyTavern

1. Publique este diretório como um repositório no GitHub. O `manifest.json` precisa ficar na raiz do repositório, ao lado de `index.js` e `style.css`.
2. No SillyTavern, abra **Extensions → Install Extension** (Extensões → Instalar extensão).
3. Cole a URL do repositório, por exemplo `https://github.com/SEU-USUARIO/hellaverse-infernal-os`, e confirme a instalação. Substitua `SEU-USUARIO` pelo nome real da conta proprietária.
4. Abra **Extensions → Manage Extensions**, habilite **HELLAVERSE — INFERNAL OS** se necessário e recarregue a interface.
5. Use o botão **INFERNAL OS** no canto inferior da interface. O estado inicial é o **Anel da Preguiça**, com violeta, ameixa, magenta, rosa e lilás.

O instalador de repositórios Git do SillyTavern exige Git disponível no servidor/instalação que baixa a extensão. Instale somente repositórios em que você confia.

## Preset Gemini

1. Configure o conector **Google AI Studio** no SillyTavern e informe sua chave API diretamente nas configurações oficiais; nunca coloque a chave no preset, no código ou no GitHub.
2. Abra os presets de **Chat Completion**, importe `presets/Hellaverse_Gemini_Infernal_Roleplay.json` e selecione-o.
3. O identificador padrão do modelo no arquivo é `gemini-3.8-flash`. Caso ele não esteja disponível no menu da sua versão, selecione um modelo Gemini compatível e salve seu próprio preset.

## Lorebook / World Info

1. Importe `lorebook/Hellaverse_Infernal_Grimoire.json` no gerenciador **World Info / Lorebooks**.
2. Associe o livro à conversa ou ao cartão de personagem e confira se o World Info está habilitado.
3. Ajuste o orçamento de tokens à janela de contexto disponível. Quatro entradas iniciais são constantes; outras entram por palavras-chave.

## Funcionalidades

### Mudança de anel e localização

A detecção procura frases explícitas, incluindo “indo para o Anel da Preguiça”, “teleporta pro Anel da Ganância”, “chegamos a Ozzie's” e “vamos para Pentagram City”. O painel também oferece seleção manual e controles separados para detecção de localização e de anel. Em mensagens ambíguas, prefira o seletor manual; menção incidental de um lugar pode não significar deslocamento físico.

### Painel de cena

As cinco abas são **Painel**, **Anéis**, **Elenco**, **Relógio** e **Sistema**. O elenco automático é baseado em nomes presentes nas últimas 12 mensagens; isso é uma pista de menção, não uma confirmação de presença física. É possível fixar NPCs manualmente.

As barras de Tensão, Humor ácido, Afeto e Caos são heurísticas locais baseadas em palavras, não inferências psicológicas nem valores canônicos. O contador do Extermínio fica não sincronizado até ser configurado com uma data ou um número manual — o painel não inventa prazos para uma cronologia não definida.

### Paletas

- **Orgulho:** vinho, vermelho, coral e dourado.
- **Ganância:** verde-petróleo, esmeralda, néon-lima e ouro envelhecido.
- **Ira:** ferrugem, vermelho queimado, cobre e âmbar.
- **Luxúria:** azul-noite, índigo, violeta e ciano elétrico.
- **Gula:** coral, mel, amarelo-sol e verde-cítrico.
- **Preguiça:** violeta, ameixa, magenta, rosa e lilás.
- **Inveja:** azul profundo, cobalto, púrpura e turquesa.

### Tema global e estado no prompt

A extensão aplica um tema CSS reversível a partes da interface e acrescenta uma nota temporária à geração com local, anel, paleta, era, relógio e personagens mencionados. Você pode desligar a injeção dinâmica ou o tema visual separadamente na aba **Sistema**. Temas e extensões de terceiros podem estilizar alguns elementos de maneira diferente.

## Compatibilidade e limites

O código importa `event_types` de `../../../../script.js`, o padrão usado por extensões third-party do SillyTavern. O pacote usa a arquitetura de extensões de UI e o `manifest.json` do SillyTavern. A verificação local cobre sintaxe JavaScript, JSON, SVG e expectativas essenciais. A execução dentro de uma instalação concreta — incluindo composição real do prompt e integração Google AI Studio — deve ser confirmada no seu ambiente e na versão instalada.

As ilustrações externas de anéis são carregadas de um host remoto e podem deixar de funcionar por indisponibilidade, alterações de URL ou bloqueio a hotlink. As paletas continuam ativas mesmo sem elas.

O lorebook é uma referência resumida e autoral para continuidade de roleplay, não uma cópia exaustiva de todas as páginas de uma wiki. Onde a obra deixa lacunas, o texto orienta a não apresentar inferências como fatos canônicos.

## Verificação local

Requer Node.js e Python 3. Na raiz do repositório:

```bash
node --check index.js
python tests/check_package.py
```

O workflow `.github/workflows/validate.yml` executa essas verificações em pushes e pull requests.

## Fontes de referência

- [SillyTavern — UI Extensions](https://docs.sillytavern.app/for-contributors/writing-extensions/)
- [SillyTavern — Installable Extensions](https://docs.sillytavern.app/extensions/)
- [Gemini API — Models](https://ai.google.dev/gemini-api/docs/models)
- [Hellaverse Wiki — Rings of Hell](https://hazbinhotel.fandom.com/wiki/Rings_of_Hell)
- [Hellaverse Wiki — Seven Deadly Sins](https://hazbinhotel.fandom.com/wiki/Seven_Deadly_Sins)
- [Hellaverse Wiki — Extermination](https://hazbinhotel.fandom.com/wiki/Extermination)
- [Hellaverse Wiki — Pentagram City](https://hazbinhotel.fandom.com/wiki/Pentagram_City)

## Licença

O código está sob MIT (consulte `LICENSE.txt`). Essa licença não concede direitos sobre personagens, marcas, episódios, screenshots ou outras artes de Hellaverse.
