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

function decreaseQuality(item: Item) {
  item.quality = item.quality - 1
}

function decreaseSellIn(item: Item) {
  item.sellIn = item.sellIn - 1;
}

function increaseQuality(item: Item) {
  item.quality = item.quality + 1
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') return;

      if (item.name === 'Aged Brie') {
        if (item.quality < 50) {
          increaseQuality(item);
        }
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality < 50) {
          increaseQuality(item);
          if (item.sellIn < 11 && item.quality < 50) {
            increaseQuality(item);
          }
          if (item.sellIn < 6 && item.quality < 50) {
            increaseQuality(item);
          }
        }
      } else if (item.quality > 0) {
        decreaseQuality(item);
      }

      decreaseSellIn(item);

      if (item.sellIn < 0) {
        if (item.name === 'Aged Brie') {
          if (item.quality < 50) {
            increaseQuality(item);
          }
        } else {
          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = item.quality - item.quality
          } else {
            if (item.quality > 0) {
              decreaseQuality(item)
            }
          }
        }
      }
    })

    return this.items;
  }
}
