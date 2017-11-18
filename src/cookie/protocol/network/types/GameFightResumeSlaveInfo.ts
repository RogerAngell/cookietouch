import GameFightSpellCooldown from "./GameFightSpellCooldown";
export default class GameFightResumeSlaveInfo {
  public spellCooldowns: GameFightSpellCooldown[];
  public slaveId: number;
  public summonCount: number;
  public bombCount: number;
  constructor(slaveId = 0, summonCount = 0, bombCount = 0, spellCooldowns: GameFightSpellCooldown[]) {

    this.spellCooldowns = spellCooldowns;
    this.slaveId = slaveId;
    this.summonCount = summonCount;
    this.bombCount = bombCount;

  }
}
