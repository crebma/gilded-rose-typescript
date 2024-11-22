export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const decreaseQuality = (item: Item, quality: number) => item.quality = Math.max(0, item.quality - quality);

const decreaseSellIn = (item: Item, quality: number) => item.sellIn = item.sellIn - quality;

const increaseQuality = (item: Item, quality: number) => item.quality = Math.min(50, item.quality + quality);

const expiresInDays = (item: Item, days: number) => item.sellIn <= days;

const expired = (item: Item) => item.sellIn <= 0;

const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const BRIE = 'Aged Brie';
const PASSES = 'Backstage passes to a TAFKAL80ETC concert';
export const CONJURED = 'Conjured Mana Cake';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === SULFURAS) return;

      if (item.name === BRIE) {
        let amount = 1;
        if (expired(item)) amount++;

        increaseQuality(item, amount);
      } else if (item.name === PASSES) {
        if (expired(item)) {
          item.quality = 0;
        } else {
          let amount = 1;
          if (expiresInDays(item, 10)) amount++;
          if (expiresInDays(item, 5)) amount++;

          increaseQuality(item, amount);
        }
      } else {
        let amount = 1;
        if (expired(item)) amount++;
        if (item.name === CONJURED) amount *= 2;

        decreaseQuality(item, amount);
      }

      decreaseSellIn(item, 1);
    })

    return this.items;
  }
}
