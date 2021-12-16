/**
 * Compile template and create renderer
 */
import VueNext from './VueNext';
import { compileUtil } from './utils/compile-util';

class Compiler {
  private readonly el: HTMLElement;
  private readonly vm: VueNext;

  constructor(vm: VueNext) {
    this.vm = vm;
    this.el = vm.$el;
    const fragment = Compiler.nodeToFragment(this.el);
    this.compile(fragment);
    this.el.appendChild(fragment);
  }

  /**
   * Is node a Node.ELEMENT_NODE, such as: <p> <div>
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
   */
  static isElementNode(node: Node) {
    return node.nodeType === 1;
  }

  /**
   * Convert HTMLElement to DocumentFragment
   * https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment
   */
  static nodeToFragment(node: HTMLElement) {
    const fragment = document.createDocumentFragment();
    let firstChild = node.firstChild;
    while (firstChild) {
      fragment.appendChild(firstChild);
      firstChild = node.firstChild;
    }
    return fragment;
  }

  /**
   * Compile the template - entry function
   */
  compile(node: DocumentFragment | Node) {
    const childNodes = node.childNodes;
    childNodes.forEach((child) => {
      if (Compiler.isElementNode(child)) {
        this.compile(child);
      } else {
        this.compileText(child);
      }
    });
  }

  /**
   *  Compile the text node, such as: 'Hello {{name}}'
   */
  compileText(node: Node) {
    const content = node.textContent;
    // Match {{}}
    if (/\{\{(.+?)\}\}/.test(content!)) {
      compileUtil.handleText(node, content!, this.vm);
    }
  }
}

export { Compiler };
