##EZEQUIEL BOTELHO ROCHA
##RA: 22.126.025.0
##TURMA: 301
##PROFESSOR: MURILO


##CÓDIGO PARA PERGUNTAR AO USUÁRIO SE ELE QUER REALIZAR OU NÃO O CADASTRO DELE NA PLATAFORMA.
print("Escreva ''SIM'' para poder se cadastrar ou ''NAO'' para encerrar o cadastro: ")
while True:
    sim_ou_nao = input("Digite:")
    if sim_ou_nao == 'SIM':
        print("OK, vamos dar continuidade no seu cadastro.")
        break
    elif sim_ou_nao == 'NAO':
        print("OK, encerramos o processo do seu cadastro.")
        break
    else:
        print("ESCREVA 'SIM' OU 'NAO' ")

##CÓDIGO PARA CADASTRAR O NOVO USUÁRIO.
##  "\n" SERVE PARA PULAR UMA LINHA SEMPRE QUE CADASTRA UM NOVO USUARIO.
##  "a"  SERVE PARA SEMPRE ADICIONAR UM NOVO USUARIO SEM PERDER OS USUARIOS JA CADASTRADOS.

if sim_ou_nao == 'SIM':
    usuario = input("Digite o usuario para realizar o cadastro: ")
    senha = input("Digite a senha do usuario: ")
    
    with open("usuarios.txt", "a") as arquivo:
        arquivo.write(usuario + "," + senha + "\n")
        
print("Usuario Cadastrado com sucesso!")


##CÓDIGO ONDE É AS LISTAS QUE GUARDARAM TODA BIBLIOTECA DE FILMES QUE ESSA STREAMING TERÁ COM AS INFORMAÇÕES DE CADA UMA.        
filmes_acao = [["Titulo: Mad Max: Estrada da Fúria", "Tempo: 120 minutos", "Criador: George Miller", "Curtidas: 6925" ],
               ["Titulo: John Wick 4: Baba Yaga", "Tempo: 169 minutos", "Criador: Chad Stahelski", "Curtidas: 956"],
               ["Titulo: Batman: O Cavaleiro Das Trevas", "Tempo: 152 minutos", "Criador: Christopher Nolan", "Curtidas: 11665" ],
               ["Titulo: Top Gun: Maverick", "Tempo: 130 minutos", "Criador: Top Gun: Maverick", "Curtidas: 856.006"],
               ["Titulo: Missão Impossível - Acerto De Contas Parte Um", "Tempo: 160 minutos", "Criador: Christopher McQuarrie", "Curtidas: 326589"],
               ["Titulo: Matrix", "Tempo:  136 minutos", "Criador: Lana Wachowski e Lilly Wachowski", "Curtidas: 7260"],
               ["Titulo: Duro De  Matar", "Tempo:  132 minutos", "Criador: John McTiernan", "Curtidas: 1028656"],
               ["Titulo: O Exterminador Do Futuro 2: O Julgamento Final", "Tempo: 137 minutos", "Criador: James Cameron", "Curtidas: 1281648"],
               ["Titulo: Tudo Em Todo Lugar Ao Mesmo Tempo", "Tempo:  140 minutos", "Criador: Daniel Kwan e Daniel Scheinert", "Curtidas: 922"],
               ["Titulo: Logan", "Tempo: 137 minutos", "Criador: James Mangold", "Curtidas: 9094"]]

filmes_comedia = [["Titulo: As Branquelas", "Tempo: 109 minutos", "Criador: Keenen Ivory Wayans", "Curtidas: 850000"],
                  ["Titulo: Todo Mundo em Pânico", "Tempo: 88 minutos", "Criador: Keenen Ivory Wayans", "Curtidas: 650000"],
                  ["Titulo: Se Beber, Não Case", "Tempo: 100 minutos", "Criador: Todd Phillips", "Curtidas: 1200000"],
                  ["Titulo: Gente Grande", "Tempo: 102 minutos", "Criador: Dennis Dugan", "Curtidas: 900000"],
                  ["Titulo: Debi & Lóide", "Tempo: 107 minutos", "Criador: Peter Farrelly", "Curtidas: 780000"],
                  ["Titulo: Escola de Rock", "Tempo: 109 minutos", "Criador: Richard Linklater", "Curtidas: 670000"],
                  ["Titulo: Ace Ventura", "Tempo: 86 minutos", "Criador: Tom Shadyac", "Curtidas: 720000"],
                  ["Titulo: Click", "Tempo: 107 minutos", "Criador: Frank Coraci", "Curtidas: 950000"],
                  ["Titulo: O Máskara", "Tempo: 101 minutos", "Criador: Chuck Russell", "Curtidas: 1100000"],
                  ["Titulo: Norbit", "Tempo: 102 minutos", "Criador: Brian Robbins", "Curtidas: 600000"]]

filmes_romance = [["Titulo: Titanic", "Tempo: 195 minutos", "Criador: James Cameron", "Curtidas: 2000000"],
                  ["Titulo: Diário de uma Paixão", "Tempo: 123 minutos", "Criador: Nick Cassavetes", "Curtidas: 1500000"],
                  ["Titulo: Como Eu Era Antes de Você", "Tempo: 110 minutos", "Criador: Thea Sharrock", "Curtidas: 980000"],
                  ["Titulo: A Culpa é das Estrelas", "Tempo: 126 minutos", "Criador: Josh Boone", "Curtidas: 1200000"],
                  ["Titulo: Simplesmente Acontece", "Tempo: 102 minutos", "Criador: Christian Ditter", "Curtidas: 870000"],
                  ["Titulo: Orgulho e Preconceito", "Tempo: 129 minutos", "Criador: Joe Wright", "Curtidas: 1100000"],
                  ["Titulo: La La Land", "Tempo: 128 minutos", "Criador: Damien Chazelle", "Curtidas: 1300000"],
                  ["Titulo: Antes do Amanhecer", "Tempo: 101 minutos", "Criador: Richard Linklater", "Curtidas: 750000"],
                  ["Titulo: Um Amor para Recordar", "Tempo: 101 minutos", "Criador: Adam Shankman", "Curtidas: 890000"],
                  ["Titulo: 500 Dias com Ela", "Tempo: 95 minutos", "Criador: Marc Webb", "Curtidas: 920000"]]

todos_filmes = filmes_acao+filmes_comedia+filmes_romance


##CÓDIGO BUSCA POR FILMES 

print("Digite o nome do filme: ")
nome_filme = input("Digite: ")
print("Filmes Relacionados: ")

for filme in todos_filmes:
    if nome_filme in filme[0]:
        print(filme)