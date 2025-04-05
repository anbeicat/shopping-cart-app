/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 15:31:06
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-03-31 15:34:49
 * @description: 
 * @FilePath: /shopping-cart-app/postcss.config.ts
 */
// postcss.config.js (ES Module 写法)
export default {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            unitPrecision: 6,
            viewportUnit: 'vw',
            selectorBlackList: ['ignore'],
            minPixelValue: 1,
            mediaQuery: false,
        },
    },
}
