/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-04 15:56:37
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-10 16:34:25
 * @description: 
 * @FilePath: /shopping-cart-app/src/components/IconFont.tsx
 */
import React from 'react';

interface IconFontProps {
    name: string;              // 图标名称（不含 #icon-）
    size?: number | string;    // 图标大小
    color?: string;            // 图标颜色
    className?: string;        // 自定义类名
    style?: React.CSSProperties; // 额外样式
}

const IconFont: React.FC<IconFontProps> = ({ name, size = 24, color = '', className = '', style }) => (
    <svg className={`iconfont ${className}`} style={{
        width: size,
        height: size,
        // fill: color,
        color,
        ...style,
    }}
        aria-hidden="true">
        <use xlinkHref={`#icon-${name}`} fill="currentColor" />
    </svg>
);

export default IconFont;
