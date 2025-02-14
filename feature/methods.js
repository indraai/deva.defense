export default {
  /**************
  method: defense
  params: packet
  describe: The global defense feature that installs with every agent
  ***************/
  defense(packet) {
    this.context('feature');
    return new Promise((resolve, reject) => {
      const defense = this.defense();
      const agent = this.agent();
      const global = [];
      defense.global.forEach((item,index) => {
        global.push(`::begin:global:${item.key}:${item.id}`);
        for (let x in item) {
          global.push(`${x}: ${item[x]}`);
        }
        global.push(`::end:global:${item.key}:${this.lib.hash(item)}`);
      });
      const concerns = [];
      defense.concerns.forEach((item, index) => {
        concerns.push(`${index + 1}. ${item}`);
      })
      
      const info = [
        '::BEGIN:DEFENSE',
        '### Client',
        `::begin:client:${defense.client_id}`,
        `id: ${defense.client_id}`,
        `client: ${defense.client_name}`,
        '**concerns**',
        concerns.join('\n'),
        `::end:client:${this.lib.hash(defense)}`,
        '### Global',
        global.join('\n'),
        '::END:DEFENSE'
      ].join('\n');
      this.question(`${this.askChr}feecting parse ${info}`).then(feecting => {
        return resolve({
          text: feecting.a.text,
          html: feecting.a.html,
          data: defense.concerns,
        });
      }).catch(err => {
        return this.error(err, packet, reject);
      })
    });
  },
};
