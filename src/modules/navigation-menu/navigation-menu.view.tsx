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
          <ul className="clear wkea-index-nav-ul">
            {this._getListMenu(menuItemData, 0)}
          </ul>
        </div>
      </div>
    );
  }
  private _getListMenu(menu: IMenuItemData[] | undefined, count: number = 0): JSX.Element[] | null {
    if (!menu) {
      return ([
        <div className="wkea-nav-menu-item">
          <a href="javascropt:void(0)" className="nodata">暂无内容</a>
        </div>
      ])
    }
    const result = [];
    count++;
    menu = menu.filter(v => v.id);
    for (let i = 0; i < menu.length; i++) {
      const v = menu[i];
      ((count) => {
        result.push(
          <li className={`${this.state.activeIds.find(n => n === v.id) ? 'wkea-index-nav-active' : ''}`}
            onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
            onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
            {
              i === 0 ? <a className="wkea-index-nav-a" href={v.linkURL}>{v.linkText}</a> : <a className="" href={v.linkURL}>{v.linkText}</a>
            }
            {v.subMenu && v.subMenu.length && <ul className="clearboth">
              {this._getFullMenu(v.subMenu, count)}
            </ul>
              || ''}
          </li>
        )
      })(count)
    }
    return result
  }
  private _getFullMenu(menu: IMenuItemData[] | undefined, count: number = 0): JSX.Element[] | null {
    if (!menu) {
      return ([
        <div className="wkea-nav-menu-item">
          <a href="javascropt:void(0)" className="nodata">暂无内容</a>
        </div>
      ])
    }
    const result = [];
    count++;
    menu = menu.filter(v => v.id);
    for (let i = 0; i < menu.length; i++) {
      const v = menu[i];
      if (v.subMenu) {
        if ( String(v.linkText).replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, '') === '') {
         
        }else{
          ((count) => {
            result.push(
              <li className={`${this.state.activeIds.find(n => n === v.id) ? 'wkea-index-nav-active' : ''}`}
                onMouseEnter={() => this._onMouseEnterHandle(v.id!)}
                onMouseLeave={() => this._onMouseLeaveHandle(v.id!)}>
                <a className="" href={v.linkURL}>{v.linkText}</a>
                {v.subMenu && v.subMenu.length && <ul>
                  {this._getFullMenu(v.subMenu, count)}
                </ul>
                  || ''}
              </li>
            )
          })(count)
        }
      } else {
        ((count) => {
          result.push(
            <li className={`${this.state.activeIds.find(n => n === v.id) ? 'wkea-index-nav-activect' : ''}`}
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

  private _onMouseEnterHandle(id: number) {
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

  private _onMouseLeaveHandle(id: number) {
    const timer = setTimeout(() => {
      const _activeIds = this.state.activeIds.filter(v => v !== id)
      let state
      if (_activeIds.length) {
        state = { activeIds: _activeIds }
      } else {
        state = { activeIds: _activeIds, itemIndexs: [], currentIndex: 20 }
      }
      // @ts-ignore
      this.setState(state)
    }, 150)
    this.setState({ closeTimeOut: [...this.state.closeTimeOut, { id: id, timer: timer }] })
  }

  // private _isAlwaysShow () {
  //   // const result = document.location.pathname === '/' || (document.location.pathname === '/page' && document.location.search.includes('mock')) 
  //   // return result
  //   return false
  // }
}

export default NavigationMenuView;