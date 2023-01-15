import { Plugin } from "aliucord/entities"; 
import { MessageActions, GuildMemberStore, getByProps } from 'aliucord/metro'; 
  
export default class Test extends Plugin { 
    public async start() { 
        
        const ClydeUtils = getByProps("sendBotMessage");

        this.commands.registerCommand({ 
            name: "test", 
            description: "test plugin", 
            options: [], 
            execute(_, ctx) { 
                const embed = {
                            type: 'rich',
                            title: "EmbedTest",
                            color: 0x303136,
                            fields: []
                        } as any;
                ClydeUtils.sendBotMessage(ctx.channel.id, "Hello! This is working", [embed]) 
            } 
        }); 
    } 
 }
