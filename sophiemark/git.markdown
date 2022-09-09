# Git.Bash vs Git Hub #

### - Versionner un nouveau git sur Git Hub (à distance) :alien:

![gitbash_commandes](git_bash.png) 


- Versionner un Git Commandes 💯 avec Git Bash ou le terminal VSCode

- Aller sur son dossier source cd (nom du dossier source ; ex: /C:/Acs/git-moi/doc1)
  
-  vérifier si il y'a un git , git status
  
- écrire  sur Git Bash ou le terminal  VisualCode " git add "
  
- Puis git commit -m "nom" (nom de notre commit souvent "Initial commit)
Regarder le status de notre git ave la commande " git status" 
  
- Ecrire la commande git log  pour vérifier si le commit à bien été fait
  
  GIT HUB Versionner
- le mettre sur git Hub si on souhaite  avec la commande " git push "
  
- Autoriser l'accès VS à notre compte Git Hub 
  
- Vérifier notre onglet "Repositories" dans notre page d'acceuil Git Hub
  
  Autre description
-  1) mettre sur un git hub existant: git push ( ouverture d'une page git autoriser sur le navigateur et ensuite se connecter , rafraichir son repisitories, remarquer les projets locals au Github à distance )


Commande incroyable qui fait tout en même temps :  git commit -am

#### - Quelques commandes sympathiques: 

![commandes_git](versionner.png)


### Commandes indispensable pour nos projets ###

git add -A
git commit
git pull origin develop (branche distante)
git push origin "bodysophie" (branchelocale) (local)


Autres : Installer Git Graph !

[id_gitgraph](mhutchie.git-graph)
[Lien de git graph sur VS Code](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)


# Autres commandes Git importantes #


1.
Mettre Clé SSH sur vS Code :

eval `ssh-agent -s`

ssh-add /home/slambert-dev/.ssh/id_rsa_gl (exemple)


--GIT NANO (pour les commits)--

O (enregistrer)

X (quitter)


1 Git commit 
COMMANDE

git switch (aller sur une branche)

git merge 
git branch 
git switch (nom de ma branche)
git add ""(dossier modifié)


# COMMANDES AUTRES #

git status (voir statut du git)


git log (voir les nouveaux gits)


## 1 Commit en GROUPE/ ##

git clone (lien SSH)
git init
git pull

git add .
git commit -m
git push (mettre un dossier sur une branche)
git status 

GROUPE

## CREER UNE BRANCHE (develop), ne pas push sur main ##

git pull origin (nom de branche) 
" git pull origin dev Solene ou git checkout "
/ je vais chercher un fichier dans la branche solene / (exemple)

git merge (fusinner plsr git puller, sur une branche)










<! -- OUBLIER --> 

<! --MERGER PROJET :
git push (branche main)
git pull origin main

git remote remove origin

git remote add origin git@gitlab.com:onlineformapro/ofp-working/01-logistockpro/03-sophie-oussama-solene-logistockpro.git


git push origin main-->
