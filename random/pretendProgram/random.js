/*
      ItemManagerProt
            |
            |
            |
       ItemCreator
            |
            |
            |
*/
const ItemManager = (function () {
  let base = {};

  base.items = [];
  base.update = function (sku, obj) {
    let keys = Object.keys(obj);

    base.items.forEach(item => {
      if (item.sku === sku) {
        keys.forEach(key => item[key] = obj[key]);
      }
    }
    );
  }
    ;
  base.delete = function (sku) {
    base.items = base.items.filter(item => {
      return item.sku != sku;
    }
    );
  }
    ;
  base.inStock = function () {
    return base.items.filter(item => {
      return item.quantity > 0;
    }
    );
  }
    ;
  base.itemsInCategory = function (category) {
    return base.items.filter(item => {
      return item.category === category;
    }
    )
  }
    ;
  base.create = function (...args) {
    let newItem = new ItemCreator(args);
    if (newItem.notValid) {
      return false;
    }
    this.items.push(newItem);
  }
    ;

  const ItemCreator = function (args) {
    Object.setPrototypeOf(this, base);
    // this is bad!
    this.notValid = true;

    const checkLength = function (string) {
      let len = string.replace(/ /gi, '').length;
      return len >= 5;
    };
    const processCategory = function (category) {
      let noSpaces = category.search(/ /) === -1;
      let longEnough = checkLength(category);
      return noSpaces && longEnough;
    };

    if (args.length === 3) {
      let [name, category, quantity] = args;
      if (checkLength(name) && processCategory(category)) {
        this.notValid = false;
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.sku = `${name.replace(/ /gi, '').slice(0, 3)}${category.slice(0, 2)}`.toUpperCase();
      }
    }
  }

  return base;
}
)();

const ReportManager = (function () {
  return {
    init(theItemManager) {
      this.items = theItemManager.items;
    },
    reportInStock() {
      let list = this.items;

      let resString = list.filter(item => {
        return item.quantity > 0;
      }
      ).map(item => {
        return item.name;
      }
      ).join(',');

      console.log(resString);
    },
    createReporter(sku) {
      let self = this.items.filter(item => {
        return item.sku === sku;
      })[0];

      let result = {
        skuCode: self.sku,
        itemName: self.name,
        category: self.category,
        quantity: self.quantity,
      };

      result.itemInfo = function () {
        for (const key in this) {
          if (this.hasOwnProperty(key) && typeof self[key]) {
            console.log(`${key}: ${this[key]}`)
          }
        }
      }
      return result;
    },
  }
}
)();

ItemManager.create('basket ball', 'sports', 0);
// valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);
// valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);
// valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);
// valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', {
  quantity: 0
});
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot

ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter;
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
console.log(ItemManager.items);



// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10
