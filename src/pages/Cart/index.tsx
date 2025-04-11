/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 21:00:32
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-11 14:23:13
 * @description:
 * @FilePath: /shopping-cart-app/src/pages/cart/index.tsx
 */
import React, { useState } from 'react';
import './index.scss';
import CustomTabBar from '../../components/TabBar';
import { EnvironmentOutline, DeleteOutline, HeartOutline } from 'antd-mobile-icons'
import { useHooks } from './hooks';

export default () => {
    const $ = useHooks();

    const data = [];
    return (
        <>
            <div className='cart'>
                {/* header */}
                <div className='cart header'>
                    <div className='header-left'>
                        <h3>장바구니(0)</h3>
                    </div>
                    <div className='header-right'>
                        <span><EnvironmentOutline />동작구</span>
                        <span><DeleteOutline /></span>
                        <span><HeartOutline /></span>
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