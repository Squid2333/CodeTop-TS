class LRUCache {
  capacity: number;
  content: Map<number, number>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.content = new Map();
  }

  get(key: number): number {
    if (!this.content.has(key)) {
      return -1;
    } else {
      const value = this.content.get(key);
      this.content.delete(key);
      this.content.set(key, value as number);
      return this.content.get(key) as number;
    }
  }

  put(key: number, value: number): void {
    if (this.content.has(key)) {
      this.content.delete(key);
    } else if (this.content.size === this.capacity) {
      const oldKey = this.content.keys().next().value;
      this.content.delete(oldKey as number);
    }
    this.content.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2);
var param_1 = obj.get(1);
console.log(param_1);
obj.put(2, 2);
console.log(obj.get(2));
