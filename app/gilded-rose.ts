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

const decreaseQuality = (item: Item) => item.quality = item.quality - 1

const decreaseSellIn = (item: Item) => item.sellIn = item.sellIn - 1

const increaseQuality = (item: Item) => item.quality = item.quality + 1

const belowMaximumQuality = (item: Item) => item.quality < 50

const expiresInLessThan = (item: Item, days: number) => item.sellIn < days

const isValuable = (item: Item) => item.quality > 0

const hasExpired = (item: Item) => item.sellIn < 0

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') return;

      if (item.name === 'Aged Brie') {
        if (belowMaximumQuality(item)) {
          increaseQuality(item);
        }
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (belowMaximumQuality(item)) {
          increaseQuality(item);
          if (expiresInLessThan(item, 11) && belowMaximumQuality(item)) {
            increaseQuality(item);
          }
          if (expiresInLessThan(item, 6) && belowMaximumQuality(item)) {
            increaseQuality(item);
          }
        }
      } else if (isValuable(item)) {
        decreaseQuality(item);
      }

      decreaseSellIn(item);

      if (hasExpired(item)) {
        if (item.name === 'Aged Brie') {
          if (belowMaximumQuality(item)) {
            increaseQuality(item);
          }
        } else {
          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = 0;
          } else {
            if (isValuable(item)) {
              decreaseQuality(item);
            }
          }
        }
      }
    })

    return this.items;
  }
}
