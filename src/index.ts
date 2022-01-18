export type TupleArr<K, V> = [K, V][];

export class BiMap<K, V> {
  kvMap: Map<K, V>;
  vkMap: Map<V, K>;

  constructor(tupleArr: TupleArr<K, V>) {
    this.kvMap = new Map(tupleArr);
    this.vkMap = new Map(tupleArr.map((v) => [v[1], v[0]]));
  }
}
