# SEA_Salon
Tugas Umum Seleksi Comfest.id Academy ~ Software Engineering
# Usage
## prerequisite
1. nodejs v20.2.0
2. mysql/mariadb database
3. run database migration from file `schema.sql` on mysql/mariadb  
Example:  
![img](https://drive.google.com/uc?export=view&id=1KRT2reL-dpcb8cmOALLYndTt__Fim6Ir)   
## Installation
1. clone this repo
```
git clone https://github.com/W-ptra/SEA_Salon.git
```
2. download dependencies
```
npm install
```
3. run the application
```
node .
```
4. open browser and paste following address on url
```
http://localhost:8000/home
```
5. Here the credential for login  
```
# login as customer
# email
Sebastian@yahoo.com

# password
bibi
```
```
# login as admin
# email
thomas.n@compfest.id

# password
Admin123
```
# Docker Usage  
I personally recommended this, as I awalys use it almost on all my project eliminate the term `It work on my machine`.  
1. Create Network and databases container
```
sudo docker network create seasalon_network

docker run -d --name mariadb --network seasalon_network -e MYSQL_ROOT_PASSWORD=root wisnup001binus/mariadb_seasalon:1.0
sudo docker network inspect seasalon_network
```
2. Copy the `ipv4 address of mariadb container` to `-e HOST={ipv4 address}` when run `wisnup001binus/seasalon:1.0` container  
  
![img](https://drive.google.com/uc?export=view&id=1Z4XXvzQ6Hw1OBHGPAfM80mhUWuDH33ha)   
```
docker run -d -p 8000:8000 --name seasalon --network seasalon_network -e PORT=8000 -e SESSION_KEY="secret" -e DB_HOST="172.19.0.2" -e DB_USER="root" -e DB_PASSWORD="root" -e DB_DATABASE="seasalon" wisnup001binus/seasalon:1.0 

```  
3. open browser and paste following address on url  
```
http://localhost:8000/home
```  
4. To clean up run this script
```
docker stop seasalon mariadb
docker remove seasalon mariadb
docker network remove seasalon_network
```