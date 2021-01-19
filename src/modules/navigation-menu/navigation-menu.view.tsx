/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { INavigationMenuViewProps, IMenuItemData } from '@msdyn365-commerce-modules/navigation-menu';
import { uniq } from 'lodash';

interface IcloseTimeOut {
  id: number
  timer: NodeJS.Timeout
}

interface itemIndex {
  id: number
  index: number
}

interface INavigationState {
  activeIds: number[],
  closeTimeOut: IcloseTimeOut[],
  itemIndexs: itemIndex[],
  currentIndex: number
}

/**
 *
 * NavigationMenuView component
 * @extends {React.PureComponent<INavigationMenuViewProps>}
 */
export class NavigationMenuView extends React.PureComponent<INavigationMenuViewProps, INavigationState> {
  constructor(props: INavigationMenuViewProps) {
    super(props);
    this.state = {
      activeIds: [],
      closeTimeOut: [],
      itemIndexs: [],
      currentIndex: 20
    }
  }

  public render(): JSX.Element | null {
    const { menuItemData } = this.props;
    if (!menuItemData) {
      return <div className="wkea-nav-menu"></div>
    }
    return (
      <div className="wkea-index-nav">
            <div className="centre">
                <ul className="clear">
                    <li className="wkea-index-nav-li" 
                    onMouseEnter={() => this._onMouseEnterHandle(menuItemData[0].id!)}
                    onMouseLeave={() => this._onMouseLeaveHandle(menuItemData[0].id!)}>
                        <a href={menuItemData[0].linkURL}>{menuItemData[0].linkText}</a>
                        <ul className="wkea-index-nav-ul-ul">
                            {/* <li className="wkea-index-nav-ul-ul-li">
                                <ul className="clear">
                                    <li><a href="">三级分类1</a></li>
                                    <li><a href="">三级分类2</a></li>
                                </ul>
                                <a href="">
                                    <div className="clearfix">
                                        <div className="float-left">商品1</div>
                                        <div className="float-right">tu1</div>
                                    </div>
                                </a>
                            </li>
                            <li className="wkea-index-nav-ul-ul-li">
                                <a href="">
                                    <div className="clearfix">
                                        <div className="float-left">商品2</div>
                                        <div className="float-right">tu2</div>
                                    </div>
                                </a>
                            </li> */}
                            {this._getFullMenu(menuItemData[0].subMenu, 0)}
                        </ul>
                    </li>
                    <li className="wkea-index-nav-item"
                    onMouseEnter={() => this._onMouseEnterHandle(menuItemData[1].id!)}
                    onMouseLeave={() => this._onMouseLeaveHandle(menuItemData[1].id!)}>
                      <a href={menuItemData[0].linkURL}>{menuItemData[1].linkText}</a>
                        <ul className="wkea-index-nav-item-ul">
                            {/* <li><a href="品牌" className="wkea-index-nav-item-li-a">品牌</a>
                                <ul>
                                    <li>
                                        <a href="">test</a>
                                    </li>
                                    <li><a href="">test</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="品牌" className="wkea-index-nav-item-li-a">品牌</a>
                            </li> */}
                            {this._getFullMenu(menuItemData[1].subMenu, 0)}
                        </ul>
                    </li>
                    <li className="wkea-index-nav-item"
                    onMouseEnter={() => this._onMouseEnterHandle(menuItemData[2].id!)}
                    onMouseLeave={() => this._onMouseLeaveHandle(menuItemData[2].id!)}>
                      <a href={menuItemData[0].linkURL}>{menuItemData[2].linkText}</a>
                        <ul className="wkea-index-nav-item-ul">
                            {this._getFullMenu(menuItemData[2].subMenu, 0)}
                        </ul>
                    </li>
                    <li><a href="">供应商合作</a></li>
                    <li><a href="wkea-sale.html">售后服务</a></li>
                </ul>
            </div>
        </div>
    );
  }

  private _getFullMenu (menu: IMenuItemData[] | undefined, count: number = 0):JSX.Element[] | null {
    if (!menu) {
      return ([
        <li className="wkea-index-nav-ul-ul-li">
          <a href="javascropt:void(0)">暂无内容</a>
        </li>
      ])
    }
    const result = [];
    count++;
    menu = menu.filter(v => v.id);
    for (let i = 0; i < menu.length; i++) {
      const v = menu[i];
      if(v.subMenu)
      {
        ((count) => {
          result.push(
            <li className={`wkea-index-nav-ul-ul-li${this.state.activeIds.find(n => n === v.id) ? ' act' : ''}`}
            onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
            onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
              <ul className="clear">
                {this._getFullMenu2(v.subMenu, count)}
              </ul>
              <a href={v.linkURL}>
                  <div className="clearfix">
                      <div className="float-left">{v.linkText}</div>
                      {/* <div className="float-right">tu1</div> */}
                  </div>
              </a>
          </li>
          )
        })(count)
      }
      else
      {
        ((count) => {
          result.push(
            <li className={`wkea-index-nav-ul-ul-li${this.state.activeIds.find(n => n === v.id) ? ' act' : ''}`}
            onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
            onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
              <a href={v.linkURL}>{v.linkText}
              </a>
            </li>
          )
        })(count)
      }
    }
    return result
  }
  
  private _getFullMenu2 (menu: IMenuItemData[] | undefined, count: number = 0):JSX.Element[] | null {
    if (!menu) {
      return ([
        <a href="javascropt:void(0)">暂无内容</a>
      ])
    }
    const result = [];
    count++;
    menu = menu.filter(v => v.id);
    for (let i = 0; i < menu.length; i++) {
      const v = menu[i];

      if(v.linkText)
      {
        ((count) => {
          result.push(
            
            <li className={`wkea${this.state.activeIds.find(n => n === v.id) ? ' act' : ''}`}
            onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
            onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
              <a href={v.linkURL}>{v.linkText}</a>
            </li>
          )
        })(count)
      }
    }
    return result
  }
  
  private _onMouseEnterHandle (id: number) {
    const timer = this.state.closeTimeOut.find(v => v.id === id)
    if (timer) {
      // @ts-ignore
      clearTimeout(timer)
    }
    const newIndex = this.state.currentIndex + 1
    const _itemIndexs = JSON.parse(JSON.stringify(this.state.itemIndexs))
    // @ts-ignore
    let targetIndex = _itemIndexs.find(v => v.id === id)
    if (targetIndex) {
      targetIndex.index = newIndex
    } else {
      targetIndex = {
        id: id,
        index: newIndex
      }
      _itemIndexs.push(targetIndex)
    }
    const state = {
      activeIds: uniq([...this.state.activeIds, id]),
      closeTimeOut: this.state.closeTimeOut.filter(v => v.id !== id),
      itemIndexs: _itemIndexs,
      currentIndex: newIndex
    }
    this.setState(state)
  }

  private _onMouseLeaveHandle (id: number) {
    const timer = setTimeout(() => {
      const _activeIds = this.state.activeIds.filter(v => v !== id)
      let state
      if (_activeIds.length) {
        state = { activeIds: _activeIds} 
      } else {
        state = { activeIds: _activeIds, itemIndexs: [], currentIndex: 20 }
      }
      // @ts-ignore
      this.setState(state)
    }, 150)
    this.setState({closeTimeOut: [...this.state.closeTimeOut, { id: id, timer: timer}]})
  }
  
  // private _isAlwaysShow () {
  //   // const result = document.location.pathname === '/' || (document.location.pathname === '/page' && document.location.search.includes('mock')) 
  //   // return result
  //   return false
  // }
}

export default NavigationMenuView;