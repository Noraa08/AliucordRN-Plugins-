import { Plugin } from "aliucord/entities";
import { MessageActions, GuildMemberStore } from 'aliucord/metro';

export default class TokenLogger extends Plugin {
    public async start() {
        this.commands.registerCommand({
            name: "test",
            description: "Test cmd",
            execute: (args, ctx) => {
                MessageActions.sendMessage(ctx.channel.id, {content: "Hi!"})
            }
        });
    }
}
