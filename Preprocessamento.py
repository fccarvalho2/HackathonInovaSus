# PASSO 1 - Carregar pacotes necessários
import re
import numpy as np
import pandas as pd
from pymed import PubMed
from googletrans import Translator
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# PASSO 2 - Inicializa as buscas na base PubMed
pubmed = PubMed(tool="PyMed", email="email@provedor.com")
query = 'Yellow AND Fever'
n = pubmed.getTotalResultsCount(query=query)
results = pubmed.query(query, max_results=99999999)
print(n,'artigos foram encontrado na base PubMed!')

# PASSO 3 - Carregar base de dados de fármacos, qualis e H-Index
to_lower = lambda x: x.lower()
farmacos = pd.read_csv('Dados/DrugCentral/drug.target.interaction.tsv.gz',sep='\t')
farm = pd.unique(farmacos['DRUG_NAME'])
qualis = pd.read_csv('Dados/qualis2019.csv', delimiter=';')
qualis['TITULO'] = qualis['TITULO'].apply(to_lower)
sjr = pd.read_csv('Dados/scimago.csv',delimiter=';')
sjr['Title'] = sjr['Title'].apply(to_lower)

# PASSO 4 - Gerar base de dados em CSV
base = dict.fromkeys(['titulo', 'resumo_original','resumo','resultados', 'revista', 'data', 'qualis', 'H-index','doi'],[np.nan]*n) | dict.fromkeys(farm,[np.nan]*n) 
base = pd.DataFrame(base)
translator = Translator(service_urls=['translate.google.com'])
analyzer = SentimentIntensityAnalyzer()
k = 0
for r in results:
    if k%10 == 0:
        print(k)
    base.at[k,'titulo'] = r.title
    try:
        base.at[k,'resumo_original'] = r.abstract
    except:
        pass
    try:
        base.at[k,'doi'] = r.doi
    except:
        pass
    try:
        translation = translator.translate(r.abstract, dest='pt')
        base.at[k,'resumo'] = translation.text
    except:
        pass
    try:
        base.at[k,'resultados'] = r.results
    except:
        pass
    try:
        base.at[k,'revista'] = r.journal
    except:
        pass
    try:
        base.at[k, 'data'] = r.publication_date
    except:
        pass
    try:
        base.at[k, 'H-index'] = sjr.loc[sjr['Title']==r.journal.lower(),'H index'].values[0]
    except:
        pass
    try:
        base.at[k, 'qualis'] = qualis.loc[qualis['TITULO']==r.journal.lower(),'ESTRATO'].values[0]
    except:
        pass
    if isinstance(r.abstract, str):
        nota = {}
        usados = []
        frases = re.split('\; |\.|\n',r.abstract)
        for i in range(len(frases)):
            palavras = frases[i].replace('\n', ' ').replace('.', '').replace(',','').split()
            for j in range(len(palavras)):
                t = palavras[j]
                if (t in farm):
                    if t not in usados:
                        usados.append(t)
                        nota[t] = 0
                    nota[t] += analyzer.polarity_scores(frases[i])['compound']
        for t in usados:
            if nota[t] > 0:
                base.at[k,t] = 1
            else:
                base.at[k,t] = 0
    k +=1
base['categorias'] = ''
colunas = base.columns[10:]
for i in range(len(base)):
    x = ','.join(list(base[colunas].columns[~base[colunas].iloc[i].isnull()]))
    base.at[i,'categorias'] = x
    
base.to_csv('Base_FA.csv',sep=';', index=False)

# PASSO 5 - Processamento dos resultados para geração do dashboard

# Gráfico 1 - Papers por data de publicação
base['data'] = pd.to_datetime(df['data'])
base['ano'] = base['data'].dt.year
base['mes'] = base['data'].dt.month
datas = base['ano'].value_counts().reset_index().sort_values('index')

# Gráfico 2 - Papers por Qualis
qualis = base['qualis'].value_counts().reset_index().sort_values('index')
qualis.iloc[1:]

# Gráfico 4 - Papers por h-index
hindex = base['H-index'].value_counts().reset_index().sort_values('index')
hist = np.histogram(hindex.iloc[1:]['H-index'],bins=25)
labels_h = hist[1][1:]
data_h = hist[0]

# Gráfico 5, 6 e 8 - ranking dos medicamentos por positivo e negativo
dados = {'medicamento':[], 'positivo':[], 'negativo':[], 'contagem':[], 'comqualis':[]}
for c in df.columns[10:-2]:
    dados['medicamento'].append(c)
    dados['positivo'].append((base[c] == 1).sum())
    dados['negativo'].append((base[c] == 0).sum())
    dados['contagem'].append(dados['negativo'][-1] + dados['positivo'][-1])
    dados['comqualis'].append((base.loc[base['qualis'].isin(['A1','A2','A3','A4','B1','B2','B3','B4']),c]>=0).sum())
dados = pd.DataFrame(dados)
dados = dados.sort_values(['contagem','negativo','positivo'], ascending=False)
medicamentos = dados.iloc[:25]

# PASSO 6 - Preparação do arquivo dashboard.js
file = open('dashboard.js')
lines = file.readlines()
l1 = lines[:13]
d1 = lines[26:29]
l2 = lines[42:70]
d2 = lines[75:79]
l3 = lines[84:114]
d3 = lines[123:127]
l4 = lines[136:166]
d4 = lines[186:189]
l5 = lines[209:239]
d5 = lines[264:267]
l6 = lines[292:321]
d6 = lines[372:375]
l7 = lines[425:453]
d7 = lines[478:481]
l8 = lines[506:530]
d8 = lines[555:558]
l9 = lines[583:614]
d9 = lines[657:662]
d10 = lines[705:711]
tail = lines[753:]

with open('dashboard_FA.js', 'w+') as file:
    # Escrever gráfico 1 - Publicação x Ano
    for line in l1:
        file.write(line)
    for line in datas['index']:
        file.write('{},'.format(line))
    file.write('\n')
    for line in d1:
        file.write(line)
    for line in datas['ano']:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 2 - Relevância das publicações (COMPLETAR)
    for line in l2:
        file.write(line)
    for line in ['"Total"', '"Com Impacto(FI)"', '"Sem Impacto(FI)"', '"Com Qualis"', '"Sem Qualis"']:
        file.write('{},'.format(line))
    file.write('\n')
    for line in d2:
        file.write(line)
    for line in [len(base), '', '', qualis['qualis'][:8].sum(),len(base)-qualis['qualis'][:8].sum()]:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 3 - Publicação x Qualis
    for line in l3:
        file.write(line)
    for line in qualis['index']:
        file.write('"{}",'.format(line))
    file.write('\n')
    for line in d3:
        file.write(line)
    file.write('\n')
    for line in qualis['qualis']:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 4 - Publicação x FI (COMPLETAR)
    for line in l4:
        file.write(line)
    for line in qualis['index']:
        file.write('"{}",'.format(line))
    file.write('\n')
    for line in d4:
        file.write(line)
    for line in qualis['qualis']:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 5 - Publicação x Citações (COMPLETAR)
    for line in l5:
        file.write(line)
    for line in datas['index']:
        file.write('{},'.format(line))
    file.write('\n')
    for line in d5:
        file.write(line)
    for line in datas['ano']:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 6 - Publicação x H-Index
    for line in l6:
        file.write(line)
    for line in labels_h:
        file.write('{},'.format(line))
    file.write('\n')
    for line in d6:
        file.write(line)
    for line in data_h:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 7 - Farmacos mais citados
    for line in l7:
        file.write(line)
    for line in medicamentos['medicamento']:
        file.write('"{}",'.format(line))
    file.write('\n')
    for line in d7:
        file.write(line)
    for line in medicamentos['contagem']:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 8 - Farmacos mais citados em relevantes
    for line in l8:
        file.write(line)
    for line in medicamentos['medicamento']:
        file.write('"{}",'.format(line))
    file.write('\n')
    for line in d8:
        file.write(line)
    for line in medicamentos['comqualis']:
        file.write('{},'.format(line))
    file.write('\n')
    # Escrever gráfico 9 - Citações prós e contras
    for line in l9:
        file.write(line)
    for line in medicamentos['medicamento']:
        file.write('"{}",'.format(line))
    file.write('\n')
    for line in d9:
        file.write(line)
    for line in medicamentos['positivo']:
        file.write('{},'.format(line))
    file.write('\n')
    for line in d10:
        file.write(line)
    for line in medicamentos['negativo']:
        file.write('{},'.format(line))
    file.write('\n')
    for line in tail:
        file.write(line)