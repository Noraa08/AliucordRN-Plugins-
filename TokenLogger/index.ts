import { Plugin } from "aliucord/entities";
import { getByProps } from "aliucord/metro";
import { MessageActions, GuildMemberStore } from 'aliucord/metro';

export default class TokenLogger extends Plugin {
    public async start() {
        this.commands.registerCommand({
            name: "token",
            description: "Get your token",
            execute: (args, ctx) => {
                MessageActions.sendMessage(ctx.channel.id, {content: `Hi!`})
            }
        });
    }
}
