import { CommandInteraction } from 'discord.js';
import { Discord, SimpleCommand, SimpleCommandMessage, SlashOption, Slash } from 'discordx';

@Discord()
class Fball {
  protected replies = [
    'ofc',
    'dis so',
    'undoubtederably',
    'yassss deffff',
    'rely on it, queen **uwu**',
    'imo? ya',
    'prolly',
    'loikely',
    'ngl it b lukken gud (like u **uwu**)',
    'yassss',
    'signs b pointerin 2 de yass',
    "reply hazy... try again when I's b dun wif ur mum",
    "ask again l8r 'bater",
    "ngl I's shudnt b tellerin u now",
    'unpredicterable',
    'concentrate n ask again wif more respect, loser **uwu**',
    'dun b counterin on it :MingLow:',
    'no. hecc u',
    'ma source code says no',
    "outlook not so good... like microsoft's outlook (gottem)",
    '¡ayy! muchos doubtidos, famigo',
    'yasss o nah',
  ];

  @SimpleCommand('fball')
  simple(command: SimpleCommandMessage) {
    command.message.reply(this.getMessage());
  }

  @Slash('fball', { description: 'Fball' })
  async slash(
    @SlashOption('message', { type: 'STRING', required: false })
    message: string,
    interaction: CommandInteraction,
  ) {
    let reply = this.getMessage();
    if (message) {
      reply = `${message} - ${reply}`;
    }
    interaction.reply(reply);
  }

  private getMessage() {
    return this.replies[Math.floor(Math.random() * this.replies.length)];
  }
}
