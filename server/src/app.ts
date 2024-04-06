import { setupExpress } from "./config/express/express";

class Main {
    public main(): void {
        setupExpress();
    }
}

const app = new Main()

app.main();