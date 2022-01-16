import { configure, makeAutoObservable } from "mobx";
import moment from "moment";

configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class ItemsStore {
  constructor() {
    makeAutoObservable(this);
  }

  items = [];
  item = {
    name: "",
    enter: "",
    expire: "",
  };

  itemsCreate() {
    this.items.push({
      name: this.item.name,
      enter: moment().format("YYYY-MM-DD"),
      expire: moment().add(2, "weeks").format("YYYY-MM-DD"),
    });
    console.log("Done ItemsCreate", this.items);
  }
  itemsRead() {
    this.items = [
      {
        name: "홍길동",
        enter: "2022-01-16",
        expire: "2022-01-30",
      },
      {
        name: "춘향이",
        enter: "2022-01-16",
        expire: "2022-01-30",
      },
    ];
    console.log("Done itemsRead", this.items);
  }
}

export const itemsStore = new ItemsStore();
