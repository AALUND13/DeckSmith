type CardRarity =
  | 'Trinket'
  | 'Common'
  | 'Scarce'
  | 'Uncommon'
  | 'Exotic'
  | 'Rare'
  | 'Epic'
  | 'Legendary'
  | 'Mythical'
  | 'Divine'
  | 'Unique'
  | 'Exordium';
type CardColor =
  | 'DestructiveRed'
  | 'FirepowerYellow'
  | 'DefensiveBlue'
  | 'TechWhite'
  | 'EvilPurple'
  | 'PoisonGreen'
  | 'NatureBrown'
  | 'ColdBlue'
  | 'MagicPink';
type Stat =
  | 'damage'
  | 'health'
  | 'reload'
  | 'ammo'
  | 'projectiles'
  | 'bursts'
  | 'timeBetweenBullets'
  | 'attackSpeed'
  | 'bounces'
  | 'bulletSpeed'
  | 'blocksamount'
  | 'blockhealamount'
  | 'blockcooldown'
  | 'respawns'
  | 'lifesteal'
  | 'numberofjumps'
  | 'slow'
  | 'movementspeed'
  | 'knockback'
  | 'gravity'
  | 'spread'
  | 'projectilesize'
  | 'ammoregeneration'
  | 'size'
  | 'armorHealth' // Armor Stat Below
  | 'armorRegen'
  | 'regenCooldownSeconds'
  | 'reactivateAfterSeconds';
type SimpleAmount =
  | 'notAssigned'
  | 'aLittleBitOf'
  | 'Some'
  | 'aLotOf'
  | 'aHugeAmountOf'
  | 'slightlyLower'
  | 'lower'
  | 'aLotLower'
  | 'slightlySmaller'
  | 'smaller';

interface StatInfo {
  displayName: string;
  additive: boolean;
  integer: boolean;
  unit: string;
  min: number;
  max: number;
  requires: Stat[];
  addedCardEffect?: boolean;
}

const rarityColorValues: { [key: string]: string } = {
  Trinket: '#aa9080',
  Common: '#000b20',
  Scarce: '#009035',
  Uncommon: '#009cc5',
  Exotic: '#0000dd',
  Rare: '#f000a3',
  Epic: '#c60011',
  Legendary: '#f7eb00',
  Mythical: '#00c900',
  Divine: '#dbc47e',
  Unique: '#FFFFFF',
  Exordium: '#c7d100',
};

const cardColorValues = {
  DestructiveRed: 'rgb(80.19% 27.61% 27.61%)',
  FirepowerYellow: 'rgb(79.25% 73.38% 22.8%)',
  DefensiveBlue: 'rgb(31.37% 51.55% 81.96%)',
  TechWhite: 'white',
  EvilPurple: 'rgb(47.77% 31.37% 81.96%)',
  PoisonGreen: 'rgb(0% 57.55% 29.95%)',
  NatureBrown: 'rgb(57.12% 80.19% 12.48%)',
  ColdBlue: 'rgb(31.37% 73.69% 81.96%)',
  MagicPink: 'rgb(81.96% 31.37% 53.44%)',
};

const statInfoConstraints: { [key: string]: StatInfo } = {
  damage: {
    displayName: 'Damage',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  health: {
    displayName: 'Health',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  reload: {
    displayName: 'Reload Time',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  ammo: {
    displayName: 'Ammunition',
    additive: true,
    integer: true,
    unit: '',
    min: -100,
    max: 10000,
    requires: [],
  },
  projectiles: {
    displayName: 'Projectiles',
    additive: true,
    integer: true,
    unit: '',
    min: 1,
    max: 10000,
    requires: [],
  },
  bursts: {
    displayName: 'Bursts',
    additive: true,
    integer: true,
    unit: '',
    min: 1,
    max: 10000,
    requires: ['timeBetweenBullets'],
  },
  timeBetweenBullets: {
    displayName: 'Time Between Bullets',
    additive: true,
    integer: false,
    unit: ' seconds',
    min: -100,
    max: 100,
    requires: ['bursts'],
  },
  attackSpeed: {
    displayName: 'Attack Speed',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  bounces: {
    displayName: 'Bounces',
    additive: true,
    integer: true,
    unit: '',
    min: 1,
    max: 10000,
    requires: [],
  },
  bulletSpeed: {
    displayName: 'Bullet Speed',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  blocksamount: {
    displayName: 'Additional Blocks',
    additive: true,
    integer: true,
    unit: '',
    min: -100,
    max: 100,
    requires: [],
  },
  blockhealamount: {
    displayName: 'Heal Amount',
    additive: true,
    integer: true,
    unit: '',
    min: -100,
    max: 1000000,
    requires: [],
  },
  blockcooldown: {
    displayName: 'Block Cooldown',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  respawns: {
    displayName: 'Respawns',
    additive: true,
    integer: true,
    unit: '',
    min: 1,
    max: 10000,
    requires: [],
  },
  lifesteal: {
    displayName: 'Lifesteal',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  numberofjumps: {
    displayName: 'Total Jumps',
    additive: true,
    integer: true,
    unit: '',
    min: 1,
    max: 10000,
    requires: [],
  },
  slow: {
    displayName: 'Slow',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  movementspeed: {
    displayName: 'Movement Speed',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  knockback: {
    displayName: 'Knockback',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  gravity: {
    displayName: 'Gravity',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  spread: {
    displayName: 'Spread',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  projectilesize: {
    displayName: 'Projectile Size',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  ammoregeneration: {
    displayName: 'Ammo Regeneration',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  size: {
    displayName: 'Size',
    additive: false,
    integer: false,
    unit: '%',
    min: -100,
    max: 100,
    requires: [],
  },
  armorHealth: {
    displayName: 'Armor Health',
    additive: true,
    integer: false,
    unit: '',
    min: 0,
    max: 1000000,
    requires: [],
    addedCardEffect: true,
  },
  armorRegen: {
    displayName: 'Armor Regeneration',
    additive: true,
    integer: false,
    unit: '',
    min: 0,
    max: 1000000,
    requires: [],
    addedCardEffect: true,
  },
  regenCooldownSeconds: {
    displayName: 'Regen Cooldown',
    additive: true,
    integer: false,
    unit: '',
    min: 0,
    max: 1000000,
    requires: [],
    addedCardEffect: true,
  },
  reactivateAfterSeconds: {
    displayName: 'Reactivation Time',
    additive: true,
    integer: false,
    unit: ' Seconds',
    min: 0,
    max: 1000000,
    requires: [],
    addedCardEffect: true,
  },
};

interface StatChange {
  value: number;
  stat: Stat;
  positive: boolean;
  simpleAmount: SimpleAmount;
}

interface CardProps {
  cardName: string;
  cardArtUrl: string;
  cardDescription: string;
  cardRarity: CardRarity;
  cardColor: CardColor;
  cardStats: StatChange[];
}

function buildCard(modName: string, cardProps: CardProps) {
  return `
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using ModsPlus;
using ModdingUtils;
using RarityLib.Utils;
using JARL.Armor;
using JARL.Armor.Builtins;
using JARL.Armor.Bases;

public class ${cardProps.cardName.replaceAll(' ', '')} : SimpleCard
{
    public override CardDetails Details => new CardDetails
    {
        Title       = "${cardProps.cardName}",
        Description = "${cardProps.cardDescription}",
        ModName     = "${modName}",
        Rarity      = RarityUtils.GetRarity("${cardProps.cardRarity}"),
        Theme       = CardThemeColor.CardThemeColorType.${cardProps.cardColor},
        Art         = DeckSmithUtil.Instance.GetArtFromUrl("${
          cardProps.cardArtUrl
        }"),
        Stats = new CardInfoStat[]
        {
${cardProps.cardStats.map(statToInfo).join(',\n')}
        }
    };

    public override void SetupCard(CardInfo cardInfo, Gun gun, ApplyCardStats cardStats, CharacterStatModifiers statModifiers, Block block)
    {
        Dictionary<string, Action<float>> actions = new Dictionary<string, Action<float>>
        {
            { "damage",                   (val) => { gun.damage = val;  } },
            { "health",                   (val) => { statModifiers.health = val; } },
            { "reload",                   (val) => { gun.reloadTime = val; } },
            { "ammo",                     (val) => { gun.ammo = (int)val; } },
            { "ammoregeneration",         (val) => { gun.ammoReg = val; } },
            { "projectiles",              (val) => { gun.numberOfProjectiles = Mathf.Max(1, (int)val); } },
            { "projectilesize",           (val) => { gun.projectileSize = val; } },
            { "bursts",                   (val) => { gun.bursts = (int)val; } },
            { "timeBetweenBullets",       (val) => { gun.timeBetweenBullets = val; } },
            { "knockback",                (val) => { gun.knockback = val; } },
            { "attackSpeed",              (val) => { gun.attackSpeed = val; } },
            { "bounces",                  (val) => { gun.reflects = (int)val; } },
            { "bulletSpeed",              (val) => { gun.projectileSpeed = val; } },
            { "blocksamount",             (val) => { block.additionalBlocks = (int)val; } },
            { "blockhealamount",          (val) => { block.healing = (int)val; } },
            { "blockcooldown",            (val) => { block.cdMultiplier = val; } },
            { "lifesteal",                (val) => { statModifiers.lifeSteal = val; } },
            { "respawns",                 (val) => { statModifiers.respawns = (int)val; } },
            { "numberofjumps",            (val) => { statModifiers.numberOfJumps = (int)val; } },
            { "gravity",                  (val) => { statModifiers.gravity = val; } },
            { "size",                     (val) => { statModifiers.sizeMultiplier = val; } },
            { "movementspeed",            (val) => { statModifiers.movementSpeed = val; } }
        };
${cardProps.cardStats.map((sc) => statToInvocation(sc)).join('\n')}
    }

    protected override void Added(Player player, Gun gun, GunAmmo gunAmmo, CharacterData data, HealthHandler health, Gravity gravity, Block block, CharacterStatModifiers characterStats) {
        ArmorBase armor = ArmorFramework.ArmorHandlers[player].GetArmorByType<DefaultArmor>();
        Dictionary<string, Action<float>> actions = new Dictionary<string, Action<float>>() {
            { "armorHealth", (val) => armor.MaxArmorValue = val },
            { "armorRegen", (val) => armor.ArmorRegenerationRate = val },
            { "armorRegenCooldown", (val) => armor.ArmorRegenCooldownSeconds = val },
            { "regenCooldownSeconds", (val) => { armor.reactivateArmorType = ArmorReactivateType.Second; armor.reactivateArmorValue = val; } },
        };
${cardProps.cardStats.map((sc) => statToInvocation(sc, true)).join('\n')}
    }
}`.trim();
}

function statToInvocation(stat: StatChange, Added: boolean = false) {
  if (!statInfoConstraints[stat.stat].addedCardEffect && Added) {
    return '';
  } else if (statInfoConstraints[stat.stat].addedCardEffect && !Added) {
    return '';
  }
  return `        actions["${stat.stat}"].Invoke(${stat.value}f);`;
}

function statToInfo(stat: StatChange) {
  const statInfo = getStatInfo(stat.stat);

  var amountString: string;
  if (statInfo.additive) {
    amountString = `${stat.value < 0 ? stat.value : `+${stat.value}`}${
      statInfo.unit
    }`;
  } else {
    const amountPercent = Math.floor((stat.value - 1) * 100);
    amountString = `${amountPercent < 0 ? '' : '+'}${amountPercent}%`;
  }

  return `          new CardInfoStat()
          {
            positive = ${stat.positive},
            stat = "${statInfo.displayName}",
            amount = "${amountString}",
            simepleAmount = CardInfoStat.SimpleAmount.${stat.simpleAmount},
          }`;
}

function getStatInfo(stat: Stat) {
  return statInfoConstraints[stat];
}

function getRarityColor(rarity: CardRarity) {
  return rarityColorValues[rarity];
}

function getCardColor(cardColor: CardColor) {
  return cardColorValues[cardColor];
}

export default buildCard;
export { getStatInfo, getRarityColor, getCardColor };
export type {
  CardRarity,
  CardColor,
  SimpleAmount,
  StatChange,
  Stat,
  CardProps,
};
