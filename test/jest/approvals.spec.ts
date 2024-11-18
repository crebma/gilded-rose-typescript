import {Item, GildedRose, CONJURED} from '@/gilded-rose';

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item(CONJURED, 3, 10)];

describe('Gilded Rose Approvals', () => {
  const gildedRose: GildedRose = new GildedRose(items);
  const days: number[] = [...Array(31).keys()];

  afterEach(()=> {
    gildedRose.updateQuality();
  });

  it.each(days)('Day %i', (day) => {
    const itemList = `-------- day ${day} --------\n${items.map(element => `${element.name}, ${element.sellIn}, ${element.quality}`).join('\n')}`;

    expect(itemList).toMatchSnapshot();
  });
});
