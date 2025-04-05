/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 15:05:42
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-03-31 15:05:50
 * @description: 
 * @FilePath: /shopping-cart-app/babel.config.js
 */
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "49",
                    ios: "10"
                }
            }
        ]
    ]
};
