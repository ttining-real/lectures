class Pokemon {
  constructor(
    public name: string,
    public skill: string,
    readonly type: string
  ) {}

  getName(): string {
    return this.name;
  }

  setSkill(skill: string): void {
    this.skill = skill;
  }
}

const pikachu = new Pokemon("피카츄", "백만볼트", "전기");
pikachu.getName();
pikachu.setSkill("천만볼트!");
