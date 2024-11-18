import {Item, GildedRose} from '@/gilded-rose';

describe('Gilded Rose', () => {
  xdescribe('Conjured Items', () => {
    it('should degrade twice as fast as regular items', () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(4);
    });
  });
});
