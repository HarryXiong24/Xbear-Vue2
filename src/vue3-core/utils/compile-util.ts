/**
 * Compile Utils
 */
import VueNext from '../VueNext';

const compileUtil = {
  handleText(node: Node, expr: string, vm: VueNext) {
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(vm, args[1]) as unknown as string;
    });
    this.nodeUpdater.textUpdater(node, content);
  },
  nodeUpdater: {
    textUpdater(node: Node, value: string) {
      node.textContent = value;
    },
  },
  getValue(vm: VueNext, expr: string) {
    const { setupReturned } = vm;
    type setupReturnedType = typeof setupReturned;
    return expr.split('.').reduce((data, current: keyof setupReturnedType) => {
      return data[current];
    }, setupReturned);
  },
};

export { compileUtil };
