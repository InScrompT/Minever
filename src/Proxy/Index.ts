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
        this.decodeAddress();
    }

    private decodeAddress() {
        const address = this.socket.address() //only returns client IP, not the hostname
        // then find IP and PORT assigned to this hostname from DB
    }

    public start(port: number = 25565) {
        this.listner.listen(port);
        console.log('[MINEVER] -> Bootstrapped proxy for Minever');
    }
}

export default MineverProxy;
