import { IModule } from "../../../lib/models";
import NeoModel from "../../helpers/neo-models";

export default class Module extends NeoModel<Module> implements IModule {
  public name: string;
  public submodules: Module[];

  constructor(name?: string) {
    super();
    this.name = name || "";
    this.submodules = [];
  }

  public async matchSubmodule(): Promise<Module[]> {
    const res = await this.execute(`MATCH (m:MetzModule {name: "${this.name}"})-[:MetzSubModule]->(module:MetzModule) RETURN module`);
    console.log(res.records[0].get("module"));
    return res.records.map<Module>((r) => {
      const m = new Module(r.get("module").properties.name);
      console.log(m.name);
      return m;
    })
  }
  
  public async match(): Promise<Module[]> {
    const res = await this.execute("MATCH (module:MetzModule) RETURN module.name as module");
    return res.records.map<Module>((r) => {
      const m = new Module(r.get("module"));
      return m;
    });
  }

  public async create(): Promise<void> {
    const res = await this.execute(`CREATE (m:MetzModule { name: '${this.name}' }) RETURN m`);
  }

  public async addSubmodule(m: Module): Promise<void> {
    const res = await this.execute(`MATCH (m:MetzModule),(m1:MetzModule) WHERE m.name = '${this.name}' AND m1.name = '${m.name}' CREATE (m)-[r:MetzSubModule]->(m1)`);
    this.submodules.push(m);
  }
}
