/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 14:37:44
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-10 16:34:51
 * @description: 
 * @FilePath: /shopping-cart-app/src/pages/Home/Home.tsx
 */
/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 14:37:44
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-05 21:04:21
 * @description: 
 * @FilePath: /shopping-cart-app/src/pages/Home/Home.tsx
 */
import React, { useState } from 'react'
import { Button, Tag, Ellipsis, Image, Badge, TabBar, Input, Form, Swiper, Tabs } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
    ScanningOutline,
    CameraOutline,
    StarFill,
    FireFill,
    SearchOutline,
    BankcardOutline
} from 'antd-mobile-icons'
import "./Home.scss"
import { useHooks } from './Homehooks';
import IconFont from '../../components/IconFont';
import CustomTabBar from '../../components/TabBar';
import SearchBar from '../../components/SearchBar';

const bannertabs = [
    {
        key: 'recommend',
        title: '추천',
    },
    {
        key: 'ranking',
        title: '랭킹',
    },
    {
        key: 'sale',
        title: '세일',
    },
    {
        key: 'brand',
        title: '브랜드',
    },
    {
        key: 'new',
        title: '신상',
    },
    {
        key: 'early_summer',
        title: '얼리 서머',
    },
    {
        key: 'sports',
        title: '스포츠',
    },
]

const swipertabs = [
    {
        key: '1',
        img: '/src/assets/images/banner1.avif',
    },
    {
        key: '2',
        img: '/src/assets/images/banner2.avif',
    },
    {
        key: '3',
        img: '/src/assets/images/banner3.avif',
    },
    {
        key: '4',
        img: '/src/assets/images/banner4.avif',
    },
    {
        key: '5',
        img: '/src/assets/images/banner5.avif',
    },
    {
        key: '6',
        img: '/src/assets/images/banner6.gif',
    },
]

const productlist = [
    {
        key: '1',
        tag: [{
            color: 'danger',
            text: '세일'
        }, {
            color: 'primary',
            text: '신상'
        }, {
            color: 'warning',
            text: 'Choice'
        }],
        content: 'MILES 98 RAW CREW [PIGMENT D.GREY]',
        price: '₩100,000',
        details: '10,000+ 판매',
        evaluate: '5일 배송',
        img: '/src/assets/images/product1.avif'
    },
    {
        key: '2',
        tag: [{
            color: 'danger',
            text: '세일'
        }, {
            color: 'warning',
            text: 'Choice'
        }],
        content: '시티보이 빅 오버핏 플레이드 체크 셔츠 2Color',
        price: '₩60,000',
        details: '10,000+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product2.avif'
    },
    {
        key: '3',
        tag: [{
            color: 'danger',
            text: '세일'
        },],
        content: '시티보이 빅 오버핏 플레이드 체크 셔츠 2Color',
        price: '₩49,000',
        details: '100+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product3.avif'

    },
    {
        key: '4',
        tag: [],
        content: '시티보이 빅 오버핏 플레이드 체크 셔츠 2Color',
        price: '₩100,000',
        details: '10,000+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product4.avif'

    },
    {
        key: '5',
        tag: [{
            color: 'danger',
            text: '세일'
        },],
        content: '시티보이 빅 오버핏 플레이드 체크 셔츠 2Color',
        price: '₩49,000',
        details: '100+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product5.avif'

    },
    {
        key: '6',
        tag: [{
            color: 'danger',
            text: '세일'
        },],
        content: '시티보이 빅 오버핏 플레이드 체크 셔츠 2Color',
        price: '₩49,000',
        details: '100+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product6.avif'

    },
    {
        key: '7',
        tag: [{
            color: 'danger',
            text: '세일'
        }, {
            color: 'primary',
            text: '신상'
        }, {
            color: 'warning',
            text: 'Choice'
        }],
        content: 'MILES 98 RAW CREW [PIGMENT D.GREY]',
        price: '₩100,000',
        details: '10,000+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product1.avif'

    },
    {
        key: '8',
        tag: [{
            color: 'danger',
            text: '세일'
        }, {
            color: 'warning',
            text: 'Choice'
        }],
        content: '시티보이 빅 오버핏 플레이드 체크 셔츠 2Color',
        price: '₩60,000',
        details: '10,000+ 판매',
        evaluate: '인기삼품',
        img: '/src/assets/images/product2.avif'

    },
]


export default () => {
    const $ = useHooks();
    return (
        <>
            <div className='home'>
                {/* Header */}
                <div className='header'>
                    {/* 使用封装的 SearchBar */}
                    <SearchBar
                        placeholder="찾고 싶은 상품을 검색해 보세요"
                        onSearchChange={$.handleSearchChange}
                        // onSearchClick={handleSearchClick}
                        showCameraIcon={!$.showSearchBar}
                    />
                    {/* Tabs */}
                    <div className='tabs'>
                        <Tabs defaultActiveKey='recommend' activeLineMode='fixed'>
                            {bannertabs.map(item => (
                                <Tabs.Tab title={item.title} key={item.key}>

                                </Tabs.Tab>
                            ))}
                        </Tabs>
                    </div>
                </div>

                {/* Banner */}
                <div className='banner'>
                    <Swiper autoplay loop>
                        {swipertabs.map((item) => (
                            <Swiper.Item key={item.key}>
                                <Image lazy src={item.img} width="100%" height={100} />
                            </Swiper.Item>
                        ))}

                    </Swiper>
                </div>

                {/* ProductList */}
                <div className='productlist'>
                    {productlist.map(item => (
                        <div className='product' key={item.key}>
                            <Image className='img' lazy src={item.img} fit='contain' />
                            <div className='title'>
                                {item.tag.map(tag => (
                                    <Tag className='tag' color={tag.color} key={tag.text}>{tag.text}</Tag>
                                ))}<Ellipsis direction='end' content={item.content} />
                            </div>
                            <div className='pricedetails'>
                                <span className='price'>{item.price}</span>
                                <span className='details'>{item.details} <StarFill />4.7</span>
                            </div>
                            <div className='evaluate'>
                                <FireFill />{item.evaluate}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className='footer'>
                    <CustomTabBar />
                </div>
            </div >

        </>
    )
}

