/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: single
 * @Description: 独立页面
 */
import { useCodeBlock, useSwitchCodeTheme } from "../modules/renderHtml";


class Single {
  constructor() {
    // 使用渲染 md -> html
    // useRenderHtml();

    // 代码块
    useCodeBlock();

    // 代码主题
    useSwitchCodeTheme();
  }

}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.SingleClass = new Single())
})();