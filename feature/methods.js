export default {
  /**************
  method: defense
  params: packet
  describe: The global defense feature that installs with every agent
  ***************/
  async defense(packet) {
    const defense = await this.methods.sign('defense', 'default', packet);
    return defense;
  },
};
