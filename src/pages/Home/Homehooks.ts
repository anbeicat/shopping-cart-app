/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-04 12:02:41
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-06 00:55:30
 * @description: 
 * @FilePath: /shopping-cart-app/src/pages/Home/Homehooks.ts
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const useHooks = () => {
    const navigate = useNavigate(); // 路由跳转函数
    const [activeTab, setActiveTab] = useState('home');
    const [activeBannerTab, setActiveBannerTab] = useState('recommend');
    const [searchValue, setSearchValue] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleTabChange = (key: string) => {
        console.log('当前选中的tab:', key);

        setActiveTab(key);
        navigate(`/${key}`);
    };

    const handleBannerTabChange = (key: string) => {
        setActiveBannerTab(key);
    };


    const handleSearchSubmit = () => {
        console.log('搜索:', searchValue);
        setShowSearchBar(false);
    };

    const handleSearchChange = (val: string) => {
        setShowSearchBar(!!val)
    };
    return {
        activeTab,
        activeBannerTab,
        searchValue,
        showSearchBar,
        handleTabChange,
        handleBannerTabChange,
        handleSearchChange,
        handleSearchSubmit,
        setShowSearchBar,
    };
}