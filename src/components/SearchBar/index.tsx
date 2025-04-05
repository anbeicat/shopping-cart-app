/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 22:07:35
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-05 22:08:04
 * @description: 
 * @FilePath: /shopping-cart-app/src/components/TabBar/SearchBar.tsx
 */
import React from 'react';
import { Input, Button } from 'antd-mobile';
import { CameraOutline, SearchOutline } from 'antd-mobile-icons';
import './SearchBar.scss';

interface SearchBarProps {
    placeholder?: string; // 搜索框的占位符
    onSearchChange?: (value: string) => void; // 输入框内容变化时的回调
    onSearchClick?: () => void; // 点击搜索按钮时的回调
    showCameraIcon?: boolean; // 是否显示相机图标
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = '请输入搜索内容',
    onSearchChange,
    onSearchClick,
    showCameraIcon = true,
}) => {
    return (
        <div className="searchbar">
            <Input
                className="search"
                placeholder={placeholder}
                clearable
                onChange={(value) => onSearchChange && onSearchChange(value)}
            />
            <span>
                {showCameraIcon && <CameraOutline fontSize={16} color="#999" />}
            </span>
            <Button
                color="primary"
                fill="solid"
                className="searchbtn"
                size="mini"
                onClick={onSearchClick}
            >
                <SearchOutline fontSize={16} color="#fff" />
            </Button>
        </div>
    );
};

export default SearchBar;