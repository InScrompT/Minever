import * as net from 'net';

class MineverProxy {
    private socket: net.Socket;
    private listner: net.Server;

    private proxy() {
        return this.listner = net.createServer(socket => {
            this.socket = socket;
            this.handleConnection();
        });
    }

    private handleConnection() {
        // Code to handle connections
    }

    public start(port: number = 25565) {
        this.listner.listen(port);
        console.log('[MINEVER] -> Bootstrapped proxy for Minever');
    }
}

export default MineverProxy;
