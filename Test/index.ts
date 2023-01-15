import { Plugin } from "aliucord/entities"; 
import { MessageActions, GuildMemberStore } from 'aliucord/metro'; 
  
export default class Test extends Plugin { 
    public async start() { 
  
        this.commands.registerCommand({ 
            name: "test", 
            description: "test plugin", 
            options: [], 
            execute(_, ctx) { 
                MessageActions.sendMessage(ctx.channel.id, {content: "Hello! This is working"}) 
            } 
        }); 
    } 
 }
