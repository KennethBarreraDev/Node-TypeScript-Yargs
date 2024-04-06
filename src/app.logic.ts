import fs from "fs";
import { options } from "yargs";


export const saveTable=(base:number, limit: number, fileName: string, fileDestination: string)=> {
      let table: string = '========================================\nTabla del 5\n========================================\n'

    for(let x=1; x<=limit; x++){
      table+=`${base}x${x}=${base*x}\n`
    }

    const dir = fileDestination;

    if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    }

    fs.writeFileSync(`${fileDestination}/${fileName}`, table, 'utf8');
}


export const readTable=(fileName: string, fileDestination: string)=> {
  console.log(fileDestination + fileName);
 const table = fs.readFileSync(`${fileDestination}/${fileName}`, 'utf8')
 return table;
}
