import {Item, GildedRose, CONJURED} from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Conjured Items', () => {
    it('should degrade twice as fast as regular items', () => {
      const gildedRose = new GildedRose([new Item(CONJURED, 3, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(4);
    });
  });
});
