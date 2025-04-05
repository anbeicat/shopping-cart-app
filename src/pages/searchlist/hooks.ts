import React, { useState, useEffect } from 'react';

export const useHooks = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [activeBannerTab, setActiveBannerTab] = useState('recommend');
    const [searchValue, setSearchValue] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleTabChange = (key: string) => {
        console.log('当前选中的tab:', key);

        setActiveTab(key);
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