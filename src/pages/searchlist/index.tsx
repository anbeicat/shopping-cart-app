/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 21:00:32
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-10 17:21:46
 * @description: 
 * @FilePath: /shopping-cart-app/src/pages/searchlist/index.tsx
 */
import React from 'react';
import { Button, Image, SideBar } from 'antd-mobile';
import { CameraOutline, SearchOutline } from 'antd-mobile-icons';
import CustomTabBar from '../../components/TabBar';
import SearchBar from '../../components/SearchBar';
import './index.scss';
import { useHooks } from './hooks';

export default () => {
    const $ = useHooks();
    const categories = [
        {
            key: 'beauty', title: '뷰티', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'shoes', title: '신발', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/shoes1.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/shoes2.png'
            }]
        },
        {
            key: 'tops', title: '상의', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'outerwear', title: '아우터', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'pants', title: '바지', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'dress_skirt', title: '원피스/스커트', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'bag', title: '가방', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'fashion_accessory', title: '패션소품', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'underwear_homewear', title: '속옷/홈웨어', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'sports_leisure', title: '스포츠/레저', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'digital_life', title: '디지털/라이프', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'outlet', title: '아울렛', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'boutique', title: '부티크', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'kids', title: '키즈', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        },
        {
            key: 'earth', title: '어스', img: [{
                name: '신상',
                src: '/src/assets/images/searchlist1.png'
            }, {
                name: '스킨케어',
                src: '/src/assets/images/searchlist2.png'
            }, {
                name: '마스크팩',
                src: '/src/assets/images/searchlist3.png'
            }]
        }
    ];
    return (
        <>
            <div className='searchlist'>
                {/* searchbar */}
                <div className='header'>
                    <SearchBar
                        placeholder="검색어를 입력하세요"
                        onSearchChange={$.handleSearchChange}
                        // onSearchClick={handleSearchClick}
                        showCameraIcon={!$.showSearchBar}
                    />
                </div>

                {/* content */}
                <div className='content'>
                    <div>
                        <SideBar onChange={$.handleKeyChange}>
                            {categories.map(item => (
                                <SideBar.Item key={item.key} title={item.title} />
                            ))}
                        </SideBar>
                    </div>
                    <div style={{ width: '100%' }}>
                        <div className='imgbox'>
                            {/* <p>{categories.find(item => item.key === $?.activeKey)?.title}</p> */}
                            {categories.find(item => item.key === $?.activeKey)?.img.map(item => (
                                <div >
                                    <Image className='img' width={'100%'} height={60} lazy src={item.src} fit='contain' />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* TabBar */}
                <div className='footer'>
                    <CustomTabBar />
                </div>
            </div>
        </>
    );
};