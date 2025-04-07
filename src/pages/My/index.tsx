/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-04-05 21:00:32
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-07 14:02:39
 * @description:
 * @FilePath: /shopping-cart-app/src/pages/My/index.tsx
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
                    my
                </div>
                {/* TabBar */}
                <div className='footer'>
                    <CustomTabBar />
                </div>
            </div>
        </>
    );
};