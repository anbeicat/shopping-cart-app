/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 21:00:32
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-07 13:58:52
 * @description:
 * @FilePath: /shopping-cart-app/src/pages/cart/index.tsx
 */
import React, { useState } from 'react';
import './index.scss';
import CustomTabBar from '../../components/TabBar';

import { useHooks } from './hooks';

export default () => {
    const $ = useHooks();

    const data = [];
    return (
        <>
            <div>
                <div>
                    장바구니
                </div>
                {/* TabBar */}
                <div className='footer'>
                    <CustomTabBar />
                </div>
            </div>
        </>
    );
};