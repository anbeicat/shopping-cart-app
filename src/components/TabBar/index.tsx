import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import IconFont from '../IconFont';
import { Badge } from 'antd-mobile';

interface TabBarItem {
    key: string;
    title: string;
    icon: (active: boolean) => React.ReactNode;
    badge?: React.ReactNode;
}

interface CustomTabBarProps {
    tabs?: TabBarItem[]; // 可选的 tabs 数据
    onTabChange?: (key: string) => void; // Tab 切换时的回调
}

const defaultTabs: TabBarItem[] = [
    {
        key: 'home',
        title: '훔',
        icon: (active: boolean) => {
            return active ? <IconFont name='homefill' color='#ff5000' /> : <IconFont name="home" />;
        },
        badge: Badge.dot,
    },
    {
        key: 'searchlist',
        title: '쇼핑',
        icon: (active: boolean) => {
            return <IconFont name="searchlist" color={active ? '#ff5000' : ''} />;
        },
        badge: '5',
    },
    {
        key: 'cart',
        title: '장바구니',
        icon: (active: boolean) => {
            return active ? <IconFont name="cartfill" color={active ? '#ff5000' : ''} /> : <IconFont name="cart" />;
        },
        badge: '99+',
    },
    {
        key: 'my',
        title: '마이',
        icon: (active: boolean) => {
            return active ? <IconFont name="myfill" color={active ? '#ff5000' : ''} /> : <IconFont name="my" />;
        },
    },
];

const CustomTabBar: React.FC<CustomTabBarProps> = ({ tabs = defaultTabs, onTabChange }) => {
    const navigate = useNavigate();

    // 从 localStorage 中读取 activeKey，默认为 'home'
    const [activeKey, setActiveKey] = useState(() => {
        return localStorage.getItem('activeTabKey') || 'home';
    });

    const handleTabChange = (key: string) => {
        setActiveKey(key); // 更新激活的 tab
        localStorage.setItem('activeTabKey', key); // 存储到 localStorage
        navigate(`/${key}`); // 路由跳转
        if (onTabChange) {
            onTabChange(key); // 调用父组件传递的回调
        }
    };

    return (
        <TabBar safeArea onChange={handleTabChange} activeKey={activeKey}>
            {tabs.map(item => (
                <TabBar.Item
                    key={item.key}
                    icon={item.icon(activeKey === item.key)}
                    title={item.title}
                    badge={item.badge}
                />
            ))}
        </TabBar>
    );
};

export default CustomTabBar;