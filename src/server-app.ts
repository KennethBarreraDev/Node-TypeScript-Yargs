
import {saveTable, readTable}  from "./app.logic"

interface RunOption{
    base:number,
    limit: number,
    fileName: string,
    fileDestination: string,
    showTable: boolean
}

export class ServerApp{
    static run (runOption:RunOption){
        console.log("Server running...")
        saveTable(runOption.base, runOption.limit, runOption.fileName, runOption.fileDestination);
        if(runOption.showTable){
             const content = readTable(runOption.fileName, runOption.fileDestination)
             console.log(content)
        }
    }
}