
export class ServersService{

private servers =[
    {
        id : 1,
        name :  'production server',
        status : 'online'
    },
    {
        id : 2,
        name :  'Test server',
        status : 'offline'
    },   {
        id : 3,
        name :  'Dev server',
        status : 'offline'
    },
];

getServers(){
    return this.servers;
}

getServer(id :number){
    const server = this.servers.find(
        (s) => {
                return s.id === id ;
        }
    );
    return server;
}

updateServer (id: number, update: { name: any; status: string; }){
        this.servers[id].name = update.name;
        this.servers[id].status = update.status;
}

}