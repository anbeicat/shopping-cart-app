/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 21:05:09
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-11 14:24:10
 * @description: 
 * @FilePath: /shopping-cart-app/src/pages/searchlist/hooks.ts
 */
import React, { useState, useEffect } from 'react';

export const useHooks = () => {
    const [activeKey, setActiveKey] = useState('beauty');
    const [searchValue, setSearchValue] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleKeyChange = (key: string) => {
        console.log('当前选中的tab:', key);

        setActiveKey(key);
    };




    const handleSearchSubmit = () => {
        console.log('搜索:', searchValue);
        setShowSearchBar(false);
    };

    const handleSearchChange = (val: string) => {
        setShowSearchBar(!!val)
    };
    return {
        activeKey,
        searchValue,
        showSearchBar,
        handleKeyChange,
        handleSearchChange,
        handleSearchSubmit,
        setShowSearchBar,
    };
}