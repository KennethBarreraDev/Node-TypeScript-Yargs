
import { ServerApp} from "./server-app";
import { yarg } from "./plugins/yargs.plugin";

(async ()=>{
    await main();
})();

async function main(){
    const {b: base, l: limit, s: showTable, n: fileName, d:fileDestination } = yarg;
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}
