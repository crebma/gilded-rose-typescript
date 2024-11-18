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

const decreaseQuality = (item: Item, quality: number) => item.quality = item.quality - quality

const decreaseSellIn = (item: Item, quality: number) => item.sellIn = item.sellIn - quality

const increaseQuality = (item: Item, quality: number) => item.quality = item.quality + quality

const belowQuality = (item: Item, quality: number) => item.quality < quality

const expiresInLessThan = (item: Item, days: number) => item.sellIn < days

const aboveQuality = (item: Item, quality: number) => item.quality > quality

const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const BRIE = 'Aged Brie';
const PASSES = 'Backstage passes to a TAFKAL80ETC concert';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === SULFURAS) return;

      if (item.name === BRIE) {
        if (belowQuality(item, 50)) {
          increaseQuality(item, 1);

          if (expiresInLessThan(item, 1) && belowQuality(item, 50)) {
            increaseQuality(item, 1);
          }
        }
      } else if (item.name === PASSES) {
        if (expiresInLessThan(item, 1)) {
          item.quality = 0;
        } else if (belowQuality(item, 50)) {
          increaseQuality(item, 1);

          if (expiresInLessThan(item, 11) && belowQuality(item, 50)) {
            increaseQuality(item, 1);
          }

          if (expiresInLessThan(item, 6) && belowQuality(item, 50)) {
            increaseQuality(item, 1);
          }
        }
      } else {
        if (aboveQuality(item, 0)) {
          decreaseQuality(item, 1);

          if (expiresInLessThan(item, 1) && aboveQuality(item, 0)) {
            decreaseQuality(item, 1);
          }
        }
      }

      decreaseSellIn(item, 1);
    })

    return this.items;
  }
}
