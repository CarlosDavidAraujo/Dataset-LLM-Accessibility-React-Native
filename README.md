# Dataset-LLM-Accessibility-React-Native

Este repositório contém os **prompts**, **códigos gerados por LLMs**, e os **relatórios de análise de acessibilidade** utilizados no artigo:

> **"Accessibility Evaluation of LLM-Generated Android Code in React Native"**  
> Carlos D. Ventura, Daniel M. F. Rabelo, Ticianne G. R. Darin, Windson Viana (UFC)  
> _IHC 2025 – Brazilian Symposium on Human Factors in Computing Systems_

## Objetivo

Avaliar a capacidade de LLMs em gerar interfaces acessíveis para apps móveis usando React Native, considerando:

- Estratégias de prompt (_zero-shot_ vs _few-shot_)
- Idiomas dos prompts (português vs inglês)
- Três LLMs diferentes:
  - ChatGPT 4.o mini  
  - DeepSeek V3  
  - Gemini 2.0 Flash

## Estrutura do Repositório
- A pasta `/Prompts` contém todas a variações de prompts utilizados para a geracão de cada tipo de tela, cada um segundo a estratégia de prompt e idioma utilizados.
- Cada pasta em `/LLMs/` contém os arquivos `.tsx` gerados pelos modelos para diferentes **telas** e **estratégias de prompt**.
- Os arquivos `.zip` seguem a mesma nomenclatura dos `.tsx` e contêm:
  - A **imagem** da tela gerada;
  - O **relatório de acessibilidade** correspondente.

### Nomenclatura dos arquivos

Os nomes dos arquivos `.tsx` e `.zip` seguem o padrão:

`<tipo_prompt>-<idioma>-<tentativa>`

Exemplos:

- `fs-en-1.tsx` → Few-shot, inglês, tentativa 1  
- `zs-pt-2.tsx` → Zero-shot, português, tentativa 2  
- `fs-pt-3.zip` → Arquivo compactado com imagem e relatório da 3ª tentativa usando few-shot em português

## Dados e Análises

- O arquivo `dataset.csv` contem todos os erros de acessibilidade identificados, incluindo tipo de erro, modelo utilizado, tipo de tela, idioma do prompt, estratégia de prompt, entre outros atributos relevantes.
- O notebook `notebook.ipynb` apresenta os artefatos analíticos derivados desse dataset. 

## Contato

- Carlos Ventura: cdavidav19@gmail.com  
- Daniel Rabelo: dmesquita861@gmail.com  
- Ticianne Darin: ticianne@virtual.ufc.br  
- Windson Viana: windson@virtual.ufc.br

