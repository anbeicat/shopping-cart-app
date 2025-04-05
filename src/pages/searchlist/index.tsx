import React from 'react';
import { Button, Input, SideBar } from 'antd-mobile';
import { CameraOutline, SearchOutline } from 'antd-mobile-icons';
import CustomTabBar from '../../components/TabBar';
import SearchBar from '../../components/SearchBar';
import './index.scss';
export default () => {
    const handleTabChange = (key: string) => {
        console.log('当前激活的 Tab:', key);
        // 这里可以添加其他逻辑，例如记录用户行为
    };
    const tabs = [
        {
            key: 'key1',
            title: '选项一',
            //   badge: Badge.dot,
        },
        {
            key: 'key2',
            title: '选项二',
            badge: '5',
        },
        {
            key: 'key3',
            title: '选项三',
            badge: '99+',
            disabled: true,
        },
    ]
    return (
        <>
            <div>
                {/* searchbar */}
                <div className='header'>
                    <SearchBar
                        placeholder="검색어를 입력하세요"
                    // onSearchChange={handleSearchChange}
                    // onSearchClick={handleSearchClick}
                    />
                </div>

                <div className='content'>
                    <SideBar>
                        {tabs.map(item => (
                            <SideBar.Item key={item.key} title={item.title} />
                        ))}
                    </SideBar>
                </div>

                {/* TabBar */}
                <div className='footer'>
                    <CustomTabBar />
                </div>
            </div>
        </>
    );
};