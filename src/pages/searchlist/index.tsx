/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 21:00:32
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-07 13:58:08
 * @description: 
 * @FilePath: /shopping-cart-app/src/pages/searchlist/index.tsx
 */
import React from 'react';
import { Button, Input, SideBar } from 'antd-mobile';
import { CameraOutline, SearchOutline } from 'antd-mobile-icons';
import CustomTabBar from '../../components/TabBar';
import SearchBar from '../../components/SearchBar';
import './index.scss';
import { useHooks } from './hooks';

export default () => {
    const $ = useHooks();
    // const handleTabChange = (key: string) => {
    //     console.log('当前激活的 Tab:', key);
    //     // 这里可以添加其他逻辑，例如记录用户行为
    // };
    const categories = [
        { key: 'beauty', title: '뷰티' },
        { key: 'shoes', title: '신발' },
        { key: 'tops', title: '상의' },
        { key: 'outerwear', title: '아우터' },
        { key: 'pants', title: '바지' },
        { key: 'dress_skirt', title: '원피스/스커트' },
        { key: 'bag', title: '가방' },
        { key: 'fashion_accessory', title: '패션소품' },
        { key: 'underwear_homewear', title: '속옷/홈웨어' },
        { key: 'sports_leisure', title: '스포츠/레저' },
        { key: 'digital_life', title: '디지털/라이프' },
        { key: 'outlet', title: '아울렛' },
        { key: 'boutique', title: '부티크' },
        { key: 'kids', title: '키즈' },
        { key: 'earth', title: '어스' }
    ];
    return (
        <>
            <div>
                {/* searchbar */}
                <div className='header'>
                    <SearchBar
                        placeholder="검색어를 입력하세요"
                        onSearchChange={$.handleSearchChange}
                        // onSearchClick={handleSearchClick}
                        showCameraIcon={!$.showSearchBar}
                    />
                </div>

                <div className='content'>
                    <SideBar>
                        {categories.map(item => (
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